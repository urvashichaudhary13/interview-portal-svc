import { NextFunction, Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { Candidates } from '../../repositories/candidates/CandidateSchema';
import { mockProfileData } from '../profiles/mockData';

export class CandidateMiddleware {
    public async createCandidate(
        req: Request,
        res: Response,
        next: NextFunction,
      ) {
        try {
            const { email, jobProfile } = req.body;
            const user = await Candidates.findOne({ email });
            if(user) return res.send("Candidate already exists");
            const department = mockProfileData.find(entry => entry.jobProfile.find(item => item.name === jobProfile))
            let body = {
              ...req.body,
              department: department.department.code,
            }
            const candidateRes = new Candidates(body);
            const insertcandidate = await candidateRes.save();
            res.send(insertcandidate);
        } catch(err) {
          res.status(400).send(err)
        }
      }
      public async getCandidates(
        req: Request,
        res: Response,
        next: NextFunction,
      ) {
        try {
            const user = await Candidates.find({});
            res.send(user);
        } catch(err) {
          res.status(400).send(err)
        }
      }
      public async removeUser (
        req: Request,
        res: Response,
        next: NextFunction,
      ) {
        try{
          const user =  await Candidates.deleteOne({ _id: new ObjectId(req.params.id)})
          if(user.deletedCount === 1){
            res.status(200).send(user)
          } else {
            res.status(203).send("Not Deleted")
          }
        } catch(err) {
          res.status(400).send(err)
        }
      }
      public async updateUser (
        req: Request,
        res: Response,
        next: NextFunction,
      ) {
        try{
          const user =  await Candidates.updateOne({ 
            email: req.body.email
          },
          { $set: { "feedbacks": req.body.feedbacks, "status": req.body.status } },
          )

          if(user.acknowledged){
            res.status(200).send(user)
          } else {
            res.status(203).send("Not Deleted")
          }
        } catch(err) {
          res.status(400).send(err)
        }
      }
}

export default new CandidateMiddleware;