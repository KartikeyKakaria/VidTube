import { Router } from "express"
import { addVideo, deleteVideo, updateVideo, getVideo, trend, addView, random ,sub } from "../controllers/video.js"
import { verifyToken } from '../verifyToken.js'
const videoRouter = Router();

//create a video
videoRouter.post("/", verifyToken, addVideo)
videoRouter.delete("/:id", verifyToken, deleteVideo)
videoRouter.put("/:id", verifyToken, updateVideo)
videoRouter.get("/find/:id", getVideo)
videoRouter.put("/view/:id", addView)
videoRouter.get("/trend", trend)
videoRouter.get("/random", random)
videoRouter.get("/sub",verifyToken, sub)

export default videoRouter;