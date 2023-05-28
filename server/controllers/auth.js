import mongoose from "mongoose"
import User from '../models/User.js'
import bcrypt from "bcryptjs"
export const signup = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password.toString(), salt);
        const newUser = new User({ ...req.body, password: hash })
        await newUser.save();
        res.status(201).send("Created the User")
    } catch (error) {
        next(error)
    }
}