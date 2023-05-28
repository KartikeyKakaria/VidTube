import { config } from "dotenv"
config()
import express from "express"
import { connect } from "mongoose"
import userRouter from "./routes/users.js"
import videoRouter from "./routes/videos.js"
import commentRouter from "./routes/comments.js"
import authRouter from "./routes/auth.js"

const app = express()
const PORT = process.env.PORT || 8000

const dbConn = () => {
    connect(process.env.MONGO_URI)
        .then(() => console.log("connecyed to DB"))
        .catch(err => {
            console.log(err)
        })
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/users", userRouter)
app.use("/api/videos", videoRouter)
app.use("/api/comments", commentRouter)
app.use("/api/auth", authRouter)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong"
    return res.status(status).json({
        sucess: false,
        status,
        message,
    })
})

app.listen(PORT, () => {
    dbConn()
    console.log(`listening at port: ${PORT}`);
})
