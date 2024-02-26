import express = require('express');
import {Request, Response} from 'express'
import mongo from "mongoose"
import {config} from "dotenv"
import { userRoute } from './Routers/userRoute';
const app = express();
import {ENVs} from "./Env"

config()
//middleware to make use of req.body
app.use(express.json())

//connecting to our db
const {connect} = mongo

// opening end-point
app.get('/welcome/:name', (req: Request, res: Response) =>{
    res.json({'message': `Welcome to the Auth API ${req.params.name}`})
})

// User route calls
app.use('/user', userRoute)

// run db server
connect(ENVs.MONGO)

// run server
app.listen(ENVs.PORT, () =>{
    console.log("Server is running!")
})