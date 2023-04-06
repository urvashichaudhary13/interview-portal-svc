import mongoose from "mongoose";
import * as bcrypt from "bcrypt";

// const bcrypt = require("bcrypt");
const users = new mongoose.Schema({
    firstname: {
        type:String,
        required: true,    
    },
    lastname: {
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
        required: true,
        // bcrypt: true,
    },
    roleId: {
        type:String,
    },
    userId: {
        type: String,
    }
})
users.pre('save', function(next) {
    const user = this;
  
    if (!user.isModified('password')) {
      return next();
    }
  
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
  
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
  
        user.password = hash;
        next();
      });
    });
  });
  
export const Users = mongoose.model("Users", users)
