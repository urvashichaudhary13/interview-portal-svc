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
router.route('/users')
    .post(...(0, validationHandler_1.validationHandler)(validations_1.validations.users), middlewares_1.UserMiddleware.getUsers);
exports.default = router;
