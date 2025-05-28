import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import User from '../models/user';
import generateToken from "../utils/generateToken";


const registerUser = async (req: Request, res: Response): Promise<void> => {
    try{
        const { username, email, password, mobile} = req.body;
        if (!username || !email || !password || !mobile) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        const UserExists = await User.findOne({ email });
        if(UserExists){
            res.status(400).json({message: "User already exists with this email"});
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            username,
            email,
            mobile,
            hashedPassword
        })
        await user.save();
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            mobile: user.mobile,
            token: generateToken(user._id.toString())
        })
    }
    catch(error) {
        console.error("Error in registerUser: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const loginUser = async (req: Request, res: Response): Promise<void> => { 
    
}

export { registerUser};