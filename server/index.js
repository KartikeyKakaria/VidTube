import { config } from "dotenv"
config()
import express from "express"
import { connect } from "mongoose"
const app = express()
const PORT = process.env.PORT || 8000
const dbConn = ()=>{
    connect(process.env.MONGO_URI)
    .then(()=>console.log("connecyed to DB"))
    .catch(err=>{
        console.log(err)
    })
}
app.listen(PORT, ()=>{
    dbConn()
    console.log(`listening at port: ${PORT}`);
})
