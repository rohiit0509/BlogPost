import { Request, Response } from "express";
import getDataModel from "../models/getData"
import User from "../models/user";

export const CommentOnPost= async (req:Request, res:Response) => {
    const userId = req.body.userId;
    const comment = req.body.comment
    const postId = req.params.id;
     try {
      const getUserName = await User.findOne({_id:userId},{userName:1})
      if(getUserName)
      {
       const post = await getDataModel.findOneAndUpdate({_id:postId},{$push:{comments:{msg:comment, user:getUserName}}},{new:true});
      if(post){
       res.send('Comment added successfully');
      }
    }
     } catch (err) {
       console.error(err);
       res.status(500).send('Error adding comment');
     }
   };