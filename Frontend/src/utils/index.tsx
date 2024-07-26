import axios from "axios"
export const IsLogin =async()=>{
     try{
      let res = await axios.get('http://localhost:9000/auth',{withCredentials:true})
      if(res.status===200){
        return true
      }else
    return false
     }
     catch(err:any){
        return false
     }
      
}
