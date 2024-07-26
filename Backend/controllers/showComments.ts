import {Response, Request} from "express"
import getDataModel from "../models/getData"


export const ShowComments = async(req:Request, res:Response) => {
    const postId = req.params.id;
    try{
        const findComment:any = await getDataModel.findOne({_id:postId},{comments:1})
        if(findComment){
        const data = findComment.comments.map((item:any) => {
            return {
              msg: item.msg,
              userName: item.user.userName
            };
          });
          res.status(200).send(data)
        }
        else{
            throw new Error("something went wrong")
        }
    }
    catch(err){
        res.status(204).send(err.message)
    }
  
}
