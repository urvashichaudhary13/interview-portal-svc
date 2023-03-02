import { Router } from 'express';

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


export default router;
