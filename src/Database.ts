import mongoose from "mongoose";


const Mongoose = mongoose.connect("mongodb://localhost:27017/interview-portal").then(() => {
    console.log("DB Connected")
}).catch(() => {
    console.log("DB not Connected");
})