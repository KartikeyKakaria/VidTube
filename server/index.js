import { config } from "dotenv";
config();
import express from "express";
import { connect } from "mongoose";
import userRouter from "./routes/users.js";
import videoRouter from "./routes/videos.js";
import commentRouter from "./routes/comments.js";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 8000;

const dbConn = () => {
  connect(process.env.MONGO_URI)
    .then(() => console.log("connected to DB"))
    .catch((err) => {
      throw new Error(err);
    });
};

//see all the incoming requests in the terminal
app.use((req, res, next) => {
  console.log(
    `Requesting Method:[${req.method}] -> ${req.url} from [${req.socket.remoteAddress}]`
  );
  res.on("finish", () => {
    console.log(
      `Responding Method:[${req.method}] -> ${req.url} from [${req.socket.remoteAddress}] status:[${res.statusCode}]`
    );
  });
  next()
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/videos", videoRouter);
app.use("/api/comments", commentRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    sucess: false,
    status,
    message,
  });
});

app.listen(PORT, () => {
  dbConn();
  console.log(`listening at port: ${PORT}`);
});
