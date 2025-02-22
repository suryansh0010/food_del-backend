import express from 'express';
import { addFood } from '../controllers/foodcontroller.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Ensure 'uploads' folder exists
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Fix: Ensure `POST` method is used for adding food
foodRouter.post('/add', upload.single('image'), addFood);

export default foodRouter;
