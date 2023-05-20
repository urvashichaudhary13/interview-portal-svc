import mongoose from "mongoose";

const candidates = new mongoose.Schema({
    // userId: {
    //     type: String,
    //     required: true,
    // },
    name: {
        type:String,
        required: true,
    },
    email: {
        unique:true,
        type:String,
        required: true,
    },
    experience: {
        type: Number,
        required:true,
    },
    jobProfile: {
        type: String
    },
    status: {
        type: String,
        default:"Aligned",
    },
    department: {
        type: String,
        required:true,
    },
    feedbacks: {
        type: String,
        // type: [
        //     {
        //         id: {
        //             type: String,
        //             required: true,
        //         },
        //         feedback: {
        //             type: String,
        //         },
        //         givenBy: {
        //             type: String
        //         },
        //         statusFrom: {
        //             type: String,
        //         },
        //         statusTo: {
        //             type: String,
        //         }
        //     }
        // ]
    }
})

export const Candidates = mongoose.model("Candidates", candidates)