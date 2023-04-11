import { Router } from 'express';
import { validationHandler } from "./libs/validationHandler";
import { validations } from './validations';
import { UserMiddleware, RolesMiddleware } from './middlewares';


const router = Router();

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
router.get('/health-check', (req: any, res) => {
  res.send('I am OK');
});


/**
 * @swagger
 * /users/signup:
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
router.route('/users/signup')
  .post(
    ...validationHandler(validations.users as any),
    UserMiddleware.createUser,
  )

router.route('/users/login')
  .post(
    ...validationHandler(validations.loginuser as any),
    UserMiddleware.getLoginUser,
  )

export default router;
