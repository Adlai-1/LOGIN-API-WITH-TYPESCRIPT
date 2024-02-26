import { Router, Request, Response } from "express";
import { UserModel } from "../Models/User";
import jsonwebtoken from "jsonwebtoken"
import {ENVs} from "../Env"

export const userRoute = Router();

// json response interface
interface response {
  status: number,
  message: string
}

interface loginResponse extends response{
  token: string
}

// end-points for User Router
userRoute.post("/signUp", async (req: Request, res: Response) => {
  try {
    const file = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    await file.save();

    const response: response = {
      status: 200,
      message: "user created."
    }
    res.json(response)
  } catch (err) {
    const response: response = {
      status: 400,
      message: `error occurred: ${err}.`
    }
    res.json(response)
  }
});

userRoute.post("/logIn", (req: Request, res: Response) => {
  UserModel.findOne({ email: req.body.email }).then((match) => {
    if (match) {
      // create AccessToken...
      const email: string = req.body.email
      const Authtoken: string = jsonwebtoken.sign(email, ENVs.SECRETKEY)

      const response: loginResponse = {
        status: 200,
        message: "user found.",
        token: Authtoken
      }
      res.json(response)
    }
    else {
      const response: response = {
        status: 200,
        message: "user not found."
      }
      res.json(response)
    }

  })
    .catch((err) => {
      const response: response = {
        status: 400,
        message: `error occurred: ${err}.`
      }
      res.json(response)
    })
});
