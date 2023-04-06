import { Request, Response, NextFunction } from "express";
import { Role } from "../../repositories/roles/RoleModel";

class RolesMiddleware {
    public async updateRoles(
        req: Request,
        res: Response,
        next:NextFunction,
    ){
        try {
            console.log("INSIDEEEEEEEEEEEEEEE")
            const rolesResponse = new Role(req.body);
            console.log("-----------------req.body::::", req.body)
        const response = await rolesResponse.save();
        console.log("response:::::::::::::::;", response)
        res.send(response)
        } catch (err) {
            res.send(400).send(err);
        }
    }
}

export default new RolesMiddleware