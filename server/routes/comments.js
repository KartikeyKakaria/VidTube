import { Router } from "express";
import { addComment, deleteComment, getComments } from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";

const commentRouter = Router();

commentRouter.post("/", verifyToken, addComment );
commentRouter.delete("/:id", verifyToken, deleteComment);
commentRouter.get("/:videoId", getComments);

export default commentRouter;
