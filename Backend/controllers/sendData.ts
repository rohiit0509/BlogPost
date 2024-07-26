import { Request, Response } from "express";
import getDataModel from "../models/getData";

export const sendData = async(req:Request, res:Response)=>{
    try{
       req.body.userId
        const fetchData = await getDataModel.find({});
    if(fetchData){
        res.status(200).send(fetchData)
    }

    else
    throw new Error("something went wrong")
}
    catch(err){
        res.status(204).send({msg:err.message})
    }
    }
   
    
