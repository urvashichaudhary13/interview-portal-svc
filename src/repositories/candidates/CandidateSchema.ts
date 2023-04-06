import mongoose from "mongoose";

const candidates = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
    },
    status: {
        type: String,
        required: true,
    },
    department: {
        type: String,
    },
    feedbacks: {
        type: [
            {
                id: {
                    type: String,
                    required: true,
                },
                feedback: {
                    type: String,
                },
                givenBy: {
                    type: String
                },
                statusFrom: {
                    type: String,
                },
                statusTo: {
                    type: String,
                }
            }
        ]
    }
})

export const Candidates = mongoose.model("Candidates", candidates)