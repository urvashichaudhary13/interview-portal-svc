import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true,
    },
    email: {
        type:String,
        require: true,
    },
})

export const Candidate = mongoose.model("Candidate", candidateSchema)
