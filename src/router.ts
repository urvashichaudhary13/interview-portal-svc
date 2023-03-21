import { Router } from 'express';
import { validationHandler } from "./libs/validationHandler";
import { validations } from './validations';
import { UserMiddleware } from './middlewares';

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

router.route('/users')
.post(
  ...validationHandler(validations.users as any),
  UserMiddleware.getUsers,
)

export default router;
