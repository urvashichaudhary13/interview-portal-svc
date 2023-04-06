// import { Role } from "./RoleModel";
// import { NextFunction, Request, Response } from 'express';
// import mongoose from "mongoose";

// export class RoleRepository {
//     public async getRoles(
//     ) {
//         try {
//             const exists = await Role.findOne({ });
//             console.log("------exists", exists);
//             if(exists) {
//                 return
//             } else {
//                 Role.create({
//                     roleId: new mongoose.Types.ObjectId(),
//                     roleName: "Super USer",
//                     permissions: [],
//                 }, {
//                     roleId: new mongoose.Types.ObjectId(),
//                     roleName: "HR",
//                     permissions: [],
//                 },
//                 {
//                     roleId: new mongoose.Types.ObjectId(),
//                     roleName: "Interviewer",
//                     permissions: [],
//                 }
//                 )
//             }
//         } catch (err) {
//             // res.send(400).send(err);
//             console.log("errrrrrrrrrrrr", err)
//         }
//     }
// }