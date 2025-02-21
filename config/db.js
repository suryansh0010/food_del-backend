import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://suryansh:964840@cluster0.mtpak.mongodb.net/food-del').then(()=>console.log("DB connected"));
} 