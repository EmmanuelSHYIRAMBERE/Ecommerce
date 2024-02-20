const express = require("express");
const { registerUser, getUsers } = require("../Controllers/userController");
const { Login } = require("../Controllers/Authentication/Login");

const userRouter = express.Router();

userRouter.get("/getUsers", getUsers);
userRouter.post("/register", registerUser);
userRouter.post("/login", Login);

module.exports = { userRouter };
