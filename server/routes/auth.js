import {Router} from "express"
import { signup, signin} from "../controllers/auth.js"

const authRouter = Router();

//CREATE A USER
authRouter.post("/signup",signup)

//SIGN IN
authRouter.post("/signin",signin)

//GOOGLE AUTH
authRouter.post("/google")

export default authRouter;