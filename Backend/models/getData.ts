import mongoose from "mongoose"
const getDataSchema = new mongoose.Schema({
    userId:String,
    userName:String,
    title:String,
    description:String,
    thumbnail:String,
    body:String,
    likes:Array,
    comments:Array,
})

export default mongoose.model('getData', getDataSchema)