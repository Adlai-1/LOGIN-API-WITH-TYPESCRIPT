"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const userRoute_1 = require("./Routers/userRoute");
const app = express();
const Env_1 = require("./Env");
(0, dotenv_1.config)();
//middleware to make use of req.body
app.use(express.json());
//connecting to our db
const { connect } = mongoose_1.default;
// opening end-point
app.get('/welcome/:name', (req, res) => {
    res.json({ 'message': `Welcome to the Auth API ${req.params.name}` });
});
// User route calls
app.use('/user', userRoute_1.userRoute);
// run db server
connect(Env_1.ENVs.MONGO);
// run server
app.listen(Env_1.ENVs.PORT, () => {
    console.log("Server is running!");
});
