import express  from "express";
import userRouter from "../routes/userRoute"
import postRouter from "../routes/postRoute"
import cookieParser from "cookie-parser"
import {getData} from "../controllers/getData"
import {sendData} from "../controllers/sendData"
import { userValidator } from "../middleware/userValidator";
import {upload} from "../multer/index"
import {imageURl} from "../controllers/imageURl"
import {fetchBlog} from "../controllers/fetchBlog"
import {likeOnPost} from "../controllers/likeOnPost"
import {getUserDetail} from "../controllers/getUserDetail"
import {GetAllUsers} from "../controllers/getAllUsers"
import {Conversation} from "../controllers/Conversation"
import { GetConversation } from "../controllers/Conversation";
import {Message} from "../controllers/Message"
import { GetMessage } from "../controllers/Message";
import cors from "cors" 

const app=express();
app.use(express.json())
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cookieParser())
app.use(cors(corsOptions));
// Conversatoin
app.post('/conversation', Conversation)
app.get('/getConversation/:userId', GetConversation)

// Message
app.post('/message', Message)
app.get('/getMessage/:conversationId', GetMessage)

app.use(userRouter)
app.use(userRouter)
app.use(userRouter)

app.post('/sendData', upload.single('thumbnail'), userValidator, getData)
app.post('/imageURl',upload.single('image'), imageURl)
app.get('/getData', sendData)
app.get('/fetchBlog/:title', fetchBlog)
app.patch('/likeonpost',userValidator, likeOnPost)
app.get('/getUserDetail',userValidator, getUserDetail)
app.get('/getallusers',userValidator, GetAllUsers )
app.use(postRouter)

const PORT= 9000;
app.listen(PORT, () => {
  console.log("Running on* ",PORT);
});

export default app
