import express from "express";
import userRoutes from './routes/user.js'

const port = 8080;
const app = express()

app.use('/user',userRoutes)

app.listen(port,()=>{
    console.log(`App is listening on port: ${port}`)
})
