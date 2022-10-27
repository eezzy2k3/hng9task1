const aboutRouter = require("./src/router/router")
const cors = require("cors")

const express = require("express")
const app = express()



app.use("/api/v1/aboutme",aboutRouter)

app.all("*",(req,res)=>{
    res.status(404).send("resource not found")
})


// allow cors
app.use(cors())





const port = process.env.PORT||3000
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})
