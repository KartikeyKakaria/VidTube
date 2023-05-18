import express from "express"

const app = express()
const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>console.log(`listening at port: ${PORT}`))
