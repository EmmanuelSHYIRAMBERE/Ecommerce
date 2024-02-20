const express = require("express");
const { registerUser, getUsers } = require("../Controllers/userController");
const { Login } = require("../Controllers/Authentication/Login");
const { deleteUser } = require("../Controllers/deleteUser");

const userRouter = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - fullNames
 *         - email
 *         - phoneNUmber
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *           example: email@example.com
 *         fullNames:
 *           type: string
 *           description: The fullNames of the user
 *           example: user names
 *         phoneNUmber:
 *           type: string
 *           description: The phoneNUmber of the user
 *           example: +25070000000
 *         password:
 *           type: string
 *           description: The password of the user
 *           example: myPassword1
 *       example:
 *         email: email@example.com
 *         fullNames: user names
 *         phoneNUmber: "+25070000000"
 *         password: myPassword1
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The user authorization managing API
 */

/**
 * @swagger
 * /ecommerce/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *          description: The user successfully created
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /ecommerce/getUsers:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *          description: The users successfully displayed
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /ecommerce/deleteUser/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The user id
 *     responses:
 *       200:
 *          description: The user successfully deleted
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal Server Error
 */

userRouter.get("/getUsers", getUsers);
userRouter.post("/register", registerUser);
userRouter.post("/login", Login);
userRouter.delete("/deleteUser/:id", deleteUser);

module.exports = { userRouter };
