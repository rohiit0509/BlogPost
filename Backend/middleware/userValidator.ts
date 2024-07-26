import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
const secretKey = "rohit123";

export const userValidator = (req: Request, res: Response, next:NextFunction) => {
    const token =  req.cookies.userAuth;
    if(!token){
      return res.status(401).send("Access Denied");
    }
    try{
      const verifyToken = jwt.verify(token, secretKey);
      if(!verifyToken){
            throw new Error("Invalid Token");   
      }
      else{
        req.body.userId = verifyToken;
        next();
      }
    }
   catch(err){
    res.status(400).send({msg:err.msg})
   }
  };
