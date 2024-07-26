import {  useParams } from "react-router-dom"
import { useGet } from "../../hooks/fetchData";
import { useEffect } from "react";

const OpenBlog = () => {
    const {id} = useParams();
  const {data, refetch} = useGet('fetchblog', `http://localhost:9000/fetchBlog/${id}`)

useEffect(()=>{
  refetch()
},[])
    const body=data;
  return (
    <>
    <div dangerouslySetInnerHTML={{__html:body}}></div>
    </>
  )
}

export default OpenBlog