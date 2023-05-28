import { Router } from "express"
import { delUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js"
import { verifyToken } from "../verifyToken.js";

const userRouter = Router();

//update user
userRouter.put("/:id", verifyToken, update)

//delete user
userRouter.delete("/:id", verifyToken, delUser)

//get a user
userRouter.get("/find/:id", getUser)

//subscribe a user
userRouter.put("/sub/:id", verifyToken, subscribe)

//unsub a user
userRouter.put("/unsub/:id", verifyToken, unsubscribe)

//like a video
userRouter.put("/like/:video", verifyToken, like)

//dislike a video
userRouter.put("/dislike/:video", verifyToken, dislike)

export default userRouter;