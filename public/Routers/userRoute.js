"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const User_1 = require("../Models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Env_1 = require("../Env");
exports.userRoute = (0, express_1.Router)();
// end-points for User Router
exports.userRoute.post("/signUp", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = new User_1.UserModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        yield file.save();
        const response = {
            status: 200,
            message: "user created."
        };
        res.json(response);
    }
    catch (err) {
        const response = {
            status: 400,
            message: `error occurred: ${err}.`
        };
        res.json(response);
    }
}));
exports.userRoute.post("/logIn", (req, res) => {
    User_1.UserModel.findOne({ email: req.body.email }).then((match) => {
        if (match) {
            // create AccessToken...
            const email = req.body.email;
            const Authtoken = jsonwebtoken_1.default.sign(email, Env_1.ENVs.SECRETKEY);
            const response = {
                status: 200,
                message: "user found.",
                token: Authtoken
            };
            res.json(response);
        }
        else {
            const response = {
                status: 200,
                message: "user not found."
            };
            res.json(response);
        }
    })
        .catch((err) => {
        const response = {
            status: 400,
            message: `error occurred: ${err}.`
        };
        res.json(response);
    });
});
