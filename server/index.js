import { config } from "dotenv"
config()
import express from "express"
import { connect } from "mongoose"
import userRouter from "./routes/users.js"
import videoRouter from "./routes/videos.js"
import commentRouter from "./routes/comments.js"
const app = express()
const PORT = process.env.PORT || 8000
const dbConn = () => {
    connect(process.env.MONGO_URI)
        .then(() => console.log("connecyed to DB"))
        .catch(err => {
            console.log(err)
        })
}

app.use("/api/users", userRouter)
app.use("/api/videos", videoRouter)
app.use("/api/comments", commentRouter)

app.listen(PORT, () => {
    dbConn()
    console.log(`listening at port: ${PORT}`);
})
