import { Router } from "express";
import {
  addVideo,
  deleteVideo,
  updateVideo,
  getVideo,
  trend,
  addView,
  random,
  sub,
  getByTag,
  search,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";
const videoRouter = Router();

//create a video
videoRouter.post("/", verifyToken, addVideo);

//delete a video
videoRouter.delete("/:id", verifyToken, deleteVideo);

//update a video
videoRouter.put("/:id", verifyToken, updateVideo);

//get a video
videoRouter.get("/find/:id", getVideo);

//add view to a video
videoRouter.put("/view/:id", addView);

//get the most viewed videos
videoRouter.get("/trend", trend);

//get any random videos
videoRouter.get("/random", random);

//get the videos of channels user is subscribed to
videoRouter.get("/sub", verifyToken, sub);

//get videos by tags
videoRouter.get("/tags", getByTag);

//get search results for videos
videoRouter.get("/search", search);

export default videoRouter;
