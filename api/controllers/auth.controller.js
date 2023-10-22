import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"; 
import { errorHandler } from "../utlis/error.js";

export const signIn = async (req,res, next) =>{
    const {username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password,10);
    const newUser = new  User({username, email, password: hashPassword});
    try {
        await newUser.save()
        res.status(201).json('User created successfully!');
    } catch (error) {
        next(error/*Handler(550, 'Error from the function')*/);
    }
    
};