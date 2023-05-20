import { NextFunction, Request, Response } from 'express';
import { mockProfileData } from './mockData' 


export class ProfileMiddleware {
    public async createProfile(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        try {
            res.send(mockProfileData)
        } catch (err) {
            res.status(400).send(err)
        }
    }
}

export default ProfileMiddleware;