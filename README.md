# About
This is a REST API for a user signup and login.

# Documentation
## The API allows Users to:
* Signup with their name, email and a password.
* Signin with their email and password.

# Tech Stack
* TypeScript.
* ExpressJs.
* MongoDB.
* Mongoose.
* JsonWebTokens(JWTs).
* argon2.

# API End-points 

## The welcome End-point.
* Route Path -> '/welcome/:name
* Request URL -> http://localhost:5000/welcome/David
* Expected response -> {"message": Welcome to the Auth API David"}

## The signUp End-point.
* Route Path -> '/user/signUp
* Request URL -> http://localhost:5000/user/signUp
* Expected Input: {
  "Name" : "David Nettey",
  "Email" : "david@carrot.com",
  "Password": "Dadlai1" }
* Expected Output: {
    status: 200,
    message: "user created."
  }
*This is a POST method.*

## The logIn End-point.
* Route Path -> '/user/logIn
* Request URL -> http://localhost:5000/user/logIn
* Expected Input: {
  "Email" : "david@carrot.com",
  "Password": "Dadlai1" }
* Expected Output: {
    "status": 200,
    "message": "user found.",
    "token": "eyJhbGciOiJIUzI1NiJ9.bmV0dGV5ZGF2aWQ4QGdtYWlsLmNvbQ.OFwToKZFT0Iri27Z9byFvgnxLtAr1boZWKXPVQyTg5I"
  }
*This is a POST method.*
