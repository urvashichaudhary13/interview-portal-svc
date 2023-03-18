import { Router } from 'express';
import { Candidate } from './libs/schema/schema';

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
router.post('/candidate', async (req: any, res) => {
  try {
    const resCandidate = new Candidate(req.body);
    console.log("req.body:::::::::::::", req.body)
    const insertCandidateRecords = await resCandidate.save();
    res.send(insertCandidateRecords);
  } catch(e) {
    console.log("-----error", e)
    res.send(e)
  }
})


export default router;
