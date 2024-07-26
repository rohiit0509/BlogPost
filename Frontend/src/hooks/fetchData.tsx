import { useMutation, useQuery } from "react-query"
import {Instance}  from "../services"

export const useGet =(key:string, url:string)=>{
    const get = async()=>{
        const {data} = await Instance.get(url , {withCredentials:true})
        return data
    }
 
    return useQuery(key, get, {enabled:false})
}

export const usePost = (url:string)=>{
    const post = async(data:any)=>{
        return await Instance.post(url,data, {withCredentials:true})
    }
    return useMutation(post)
}
