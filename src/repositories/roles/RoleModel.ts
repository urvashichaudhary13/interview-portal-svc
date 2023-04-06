import mongoose from "mongoose";

const role = new mongoose.Schema({
    roleId: {
        type: String
    },
    roleName: {
        type: String,
    },
    permissions: {
        type: Array,
    },
})

export const Role = mongoose.model("roles", role);