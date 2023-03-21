import mongoose from "mongoose";

const users = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        unique:true,
        type:String,
        required: true,
    },
    password: {
        type: String,
        // required: true,
    }
})

export const Users = mongoose.model("Users", users)
