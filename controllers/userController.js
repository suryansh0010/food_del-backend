import userModel from "../models/userModel";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


// login user
const loginUser = async (req,res) =>{
    
}

const createToken = (id) =>{
    return jwt.sign({id})
}
// login user
const registerUser = async (req,res) =>{
    const [name,password,email]= req.body;
    try {
        const exists =await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"user already exists"})
        }

        // validating email formate and strong passwORD
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email"})
        }

        if(password.length<8){
            return res.json({success:false,message:"please enter a Strong Password"})
        }

        // hasing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user = await newUser.save()
    } catch (error) {
        
    }
}

export{loginUser,registerUser}