import express from 'express'
import { addFood } from "../controllers/foodcontroller.js"
import multer from 'multer'

const foodRouter = express.Router();

// Image storage Engine

const storage = multer.diskStorage({
    destinstion:"uploads",
    filename:(reqe,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})
foodRouter.post('/add',upload.single("image"),addFood)

export default foodRouter;