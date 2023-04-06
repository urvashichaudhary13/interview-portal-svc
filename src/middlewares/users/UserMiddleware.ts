import { NextFunction, Request, Response } from 'express';
import { Users } from '../../repositories/users/UsersModel';


class UserMiddleware {
    public async getUsers (
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const userResponse = new Users(req.body);
            const  { email } = userResponse;
            const isExisting = await Users.findOne({ email })
            if (isExisting) {
              return res.status(400).json({ error: 'Data already exists' });
            }
              const insertCandidateRecords = await userResponse.save();
              res.send(insertCandidateRecords);
          } catch(e) {
            res.status(400).send(e);
          }
    }
}

export default new UserMiddleware();