import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password.toString(), salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(201).send("Created the User");
  } catch (error) {
    next(createError(500, error.message));
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "Invalid credentials"));

    const isCorrect = await bcrypt.compare(
      req.body.password.toString(),
      user.password
    );
    if (!isCorrect) return next(createError(404, "Invalid credentials"));

    const { password, ...userDetails } = user._doc;

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    return res
      .cookie("access-token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(userDetails);
  } catch (error) {
    next(error);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
      return res
        .cookie("access-token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
      });
      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.SECRET_KEY);
      return res
        .cookie("access-token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser._doc);
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
};
