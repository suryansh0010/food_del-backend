import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
})