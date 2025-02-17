 import express from "express"
 import cors from "cors"


//  app config
const app = express()
const port = 4000 

// middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`server Started on http://localhost:${port}`)
})


// mongodb+srv://suryansh:964840@cluster0.mtpak.mongodb.net/?