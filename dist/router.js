"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validationHandler_1 = require("./libs/validationHandler");
const validations_1 = require("./validations");
const middlewares_1 = require("./middlewares");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /health-check:
 *   get:
 *     tags:
 *       - General
 *     description: Health Check
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: I am OK
 */
router.get('/health-check', (req, res) => {
    res.send('I am OK');
});
/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - User
 *     description: Create new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: firstname
 *         description: Firstname of user.
 *         example: "Jack"
 *         in: body
 *         type: string
 *         required: false
 *       - name: lastname
 *         description: Lastname of user.
 *         example: "Joe"
 *         in: body
 *         type: string
 *         required: false
 *       - name: email
 *         description: Email Id of user.
 *         example: "jack@gmail.com"
 *         in: body
 *         type: string
 *         required: false
 *       - name: password
 *         description: Password of user.
 *         example: "lkjsdf32"
 *         in: body
 *         type: string
 *         required: false
 *     responses:
 *       200:
 *         description: Information of duplicate Name String
 *         schema:
 *           type: object
 *           properties:
 *             firstname:
 *               type: "string"
 *               example: "Phoebe"
 *             lastname:
 *               type: "string"
 *               example: "Buffay"
 *             email:
 *               type: "string"
 *               example: "phoebe@gmail.com"
 *             password:
 *               type: "string"
 *               example: "fkldsjfkls"
 *       400:
 *         description: Error Bad request
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: "string"
 *               example: "Something went wrong"
 *             status:
 *               type: "string"
 *               example: "400"
 *             error:
 *               type: "string"
 *               example: "Internal Server Error"
 *
 */
router.route('/users')
    .post(...(0, validationHandler_1.validationHandler)(validations_1.validations.users), (req, res, next) => {
    console.log("------------------------------");
    next();
}, middlewares_1.UserMiddleware.getUsers);
// router.route('/roles')
// .post(
//   ...validationHandler(validations.roles as any),
//   (req,res,next) => {
//     console.log("-----------------------------------------------------")
//   },
//   RolesMiddleware.updateRoles,
// )
exports.default = router;
