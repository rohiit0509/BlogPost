import { useForm } from "react-hook-form";
import { CommentWrapper , CommentTitle,CommentContainer, CommentTitleDiv, CommentInput, CommentForm, Msg} from "../../styles/components/Comment"
import { GrFormClose } from 'react-icons/gr';
import { useGet, usePost } from "../../hooks/fetchData";
import Travel from "../../assets/images/travel.jpg";
import { UserContainer, UserProfile, UserName } from "../../styles/components/BlogSection";
import { useEffect } from "react";

const Comment = ({ postData, openComment }: any) => {
  const { register, handleSubmit } = useForm();

  const { mutate } = usePost(`/commentonpost/${postData.postId}`);

  const submit = (data: any) => {
    mutate(data);
  };

  const { data, refetch } = useGet(
    "showcomnts",
    `/showcomments/${postData.postId}`
  );

  useEffect(() => {
    refetch();
  }, [refetch()]);
  return (
    <CommentWrapper>
     <CommentTitleDiv>
     <CommentTitle>Responses</CommentTitle>
     <GrFormClose size={25} cursor={"pointer"} onClick={()=>openComment(false)}/>
     </CommentTitleDiv>
     <CommentForm onSubmit={handleSubmit(submit)}>
     <CommentInput  {...register("comment")} type="text" placeholder="What's your thoughts?"/>
     </CommentForm>
     {data?.map((item:any, index:number)=>{
      return(
      <CommentContainer key={index}>
      <UserContainer style={{gap:"5px"}}>
             <UserProfile src={Travel}/>
             <UserName>{item.userName}</UserName>
         </UserContainer>
       <Msg>{item.msg}</Msg>          
      </CommentContainer>
      )
     })}
     
    </CommentWrapper>
  )
}

export default Comment