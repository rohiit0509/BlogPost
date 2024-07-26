import User from "../models/user";
import { OtpModel } from "../models/user";
import nodemailer from "nodemailer"
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import "../database/index";
import jwt from "jsonwebtoken"

const mailer =(email, otp)=>{
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:"infocbs869@gmail.com",
    pass:"nqckcnvulorsbezu"
  },
});
const mailOptions = {
  from: 'infocbs869@gmail.com',
  to: email,
  subject: 'Reset Password',
  html: `<p>Use this token to reset your password: ${otp}</p>`,
};
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
   console.log('Error sending reset password email');
  } else {
    console.log(`Reset password email sent ${info.response}`);
  }
});
}

// SIGNUP REQUEST
export const SignupRequest = async(req: Request, res: Response) => {
  let {email, password, phone, userName} = req.body;
  try {
    let checkUser = await User.findOne({email:req.body.email})
    if(!checkUser){
    let hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;
    const savedData = await User.create({
      email,
      password,
      phone,
      userName,
      userProfile:`https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${userName}&backgroundColor=f2d3b1`
    });
    if (savedData) {
      return res.status(200).send({msg:"User saved successfully"});
    }
  }
  throw new Error("Email already exist :)");
} catch (error) {
    res.status(203).send({msg:error.message});
  }
};

const secretKey="rohit123"

// LOGIN REQUEST
export const LoginRequest = async(req:Request, res:Response)=>{
  const data = req.body;
  try{
    let findUser = await User.findOne({email:data.email})
    if(findUser){
      jwt.sign(findUser.id, secretKey, (err, token)=>{
        res.cookie("userAuth", token)
        res.status(200).send({msg:"Logged in successfully"})
      });
    }
      else {
    throw new Error("User not found")
    }
  }catch(err){
      res.status(203).send({msg:err.message})
  }
}


export const ForgetPassword = (req:Request, res:Response)=>{
  try{
    const checkMail= User.findOne({email:req.body.email})
    if(!checkMail){
      throw new Error("Email is not exist")
    }
    else{
      let genOtp = Math.floor(Math.random()*10000+1);
     const createOtpData = new OtpModel({
      email:req.body.email,
      otpCode:genOtp,
      expireIn: new Date().getTime()
      })
      createOtpData.save()
      mailer(req.body.email, genOtp)
      res.status(200).send("Please check your email id")
    }
  }
catch(e){
  res.status(500).send(e.message)
}
}


export const ChangePassword = (req:Request, res:Response)=>{

}

