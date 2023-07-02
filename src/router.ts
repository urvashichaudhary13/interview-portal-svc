import { Router } from 'express';
import { validationHandler } from "./libs/validationHandler";
import { validations } from './validations';
import { UserMiddleware, RolesMiddleware, CandidateMiddleware } from './middlewares';


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
    // ...validationHandler(validations.loginuser as any),
    // UserMiddleware.getLoginUser,
  )

/**
 * @swagger
 * /candidate:
 *   post:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Candidate
 *     description: Create candidate
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: name
 *       description: name of candidate.
 *       in: body
 *       type: string
 *       required: true
 *       example: Joey
 *     - name: email
 *       description: email of candidate.
 *       in: body
 *       type: string
 *       required: true
 *       example: joey@gmail.com
 *     - name: jobProfile
 *       description: Profile for which candidate has applied
 *       in: body
 *       required: true
 *       type: string
 *       example: "joey@gmail.com"
 *     - name: experience
 *       description: Total experience of candidate
 *       in: body
 *       type: integer
 *       required: true
 *       example: 2
 *     responses:
 *       200:
 *         description:  Array of candidates
 *         schema:
 *           type: array
 *           items:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 6469292be84cee7bb661f7e5
 *                 name:
 *                   type: string
 *                   example: Joey
 *                 email:
 *                   type: string
 *                   example: joey@gmail.com
 *                 experience:
 *                   type: number
 *                   example: 2
 *                 jobProfile:
 *                   type: string
 *                   example: React Developer
 *                 status:
 *                   type: string
 *                   example: Selected
 *                 department:
 *                   type: string
 *                   example: Node 
 *                 feedbacks:
 *                   type: string
 *                   example: Good knowledge of React       
 *       400:
 *         description: Bad Request
 *         schema:
 *           type: object
 *           items:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: No data in collection
 */
router.route('/candidate')
.post(
  ...validationHandler(validations.createCandidate),
  CandidateMiddleware.createCandidate,
)

/**
 * @swagger
 * /candidate:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Candidate
 *     description: Get candidate data
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description:  Array of candidates
 *         schema:
 *           type: array
 *           items:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 6469292be84cee7bb661f7e5
 *                 name:
 *                   type: string
 *                   example: Joey
 *                 email:
 *                   type: string
 *                   example: joey@gmail.com
 *                 experience:
 *                   type: number
 *                   example: 2
 *                 jobProfile:
 *                   type: string
 *                   example: React Developer
 *                 status:
 *                   type: string
 *                   example: Selected
 *                 department:
 *                   type: string
 *                   example: Node 
 *                 feedbacks:
 *                   type: string
 *                   example: Good knowledge of React       
 *       400:
 *         description: Bad Request
 *         schema:
 *           type: object
 *           items:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: No data in collection
 */
router.route('/candidate')
.get(
  ...validationHandler(validations.getCandidates),
  CandidateMiddleware.getCandidates,
)

router.route('/candidate/:id')
.delete(
  CandidateMiddleware.removeUser
)

router.route('/candidate')
.put(
  CandidateMiddleware.updateUser
)

export default router;
