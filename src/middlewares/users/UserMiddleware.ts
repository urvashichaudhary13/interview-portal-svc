import { NextFunction, Request, Response } from 'express';
import { Users } from '../../repositories/users/UsersModel';
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";


class UserMiddleware {
  public async createUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { email } = req.body;
      const isExisting = await Users.findOne({ email })
      if (isExisting) {
        return res.status(400).json({ error: 'Data already exists' });
      }
      const userResponse = new Users(req.body);
      const insertCandidateRecords = await userResponse.save();
      res.send(insertCandidateRecords);
    } catch (e) {
      res.status(400).send(e);
    }
  }
  public async getLoginUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { email } = req.body;
      const user = await Users.findOne({ email })
      if (!user) {
        return res.status(400).json({ error: 'User does not exists' });
      }
      const validPass = await bcrypt.compare(req.body.password, user.password);
      if (!validPass) return res.status(400).send('Email or password is wrong');

      const secretKey = 'mySecretKey';

      const token = jwt.sign({ _id: user }, secretKey, { expiresIn: '1h' });
      const tokenHeaders = {
        authorization: token,
      }
      res.status(200).json(token);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

export default new UserMiddleware();