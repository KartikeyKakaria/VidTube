import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies["access-token"]
    if (!token) return next(createError(401, "You are not authenticated"));
    jwt.verify(token, process.env.SECRET_KEY, (err, userId) => {
        if (err) return next(createError(401, "Invalid Token"));
        req.user = userId;
        next();
    })
}