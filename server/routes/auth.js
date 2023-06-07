import { Router } from "express";
import { signup, signin, googleAuth } from "../controllers/auth.js";

const authRouter = Router();

//CREATE A USER
authRouter.post("/signup", signup);

//SIGN IN
authRouter.post("/signin", signin);

//GOOGLE AUTH
authRouter.post("/google", googleAuth);

export default authRouter;
