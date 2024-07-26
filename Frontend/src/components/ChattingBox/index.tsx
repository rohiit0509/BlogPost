import { ChatWrapper, ImageContainer, SearchBar} from "../../styles/components/Chat"
import { IconContainer, IconDiv, Profile, ProfileContainer, Name, SendMessageDiv, ViewContainer, LeftMsg, RightMsg} from "../../styles/components/ChattingBox"
import { FcCallback, FcVideoCall, FcLeft, FcAbout} from 'react-icons/fc';
import Travel from "../../assets/images/travel.jpg";
import { TbSend } from 'react-icons/tb';
import { useEffect, useRef, useState } from "react";
import {io, Socket} from "socket.io-client"
import { useForm } from "react-hook-form";
import { useGet } from "../../hooks/fetchData";

const ChattingBox = ({openChat, user, conversation}:any) => {
  const {userName, userId, loggedInUser} = user;
  const socket  = useRef<Socket | undefined>();
  const {register, handleSubmit}= useForm();
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const [sendMessage, setSendMessage] = useState([])
  const [conversationId, setConversationId] = useState(null);

  const submit = (data:any)=>{
    socket.current?.emit('sendMessage', {
      senderId: loggedInUser,
      receiverId:userId,
      text:data.text,
    })
    setSendMessage(data.text)
  }

  const {data, refetch} = useGet('getMessage', `getMessage/${conversation._id}`)

  useEffect(()=>{
    const friendId = conversation.member.find((m:string)=>m!==loggedInUser)
    refetch()
  },[conversation])

  useEffect(()=>{
    socket.current = io("http://192.168.11.103:8000",{
      transports: ["websocket", "polling", "flashsocket"],
    })  
    socket.current?.on('getMessage', data =>{
      setArrivalMessage(data.text)
    })
  },[])


  useEffect(()=>{
      arrivalMessage && setSendMessage(prev=>[...prev, arrivalMessage])  
  },[arrivalMessage])


  useEffect(()=>{
    socket.current?.emit("addUser", userId)
    socket.current?.on('getUsers', users =>{
    })
  },[userId])
  return (
    <ChatWrapper style={{padding:"0"}}>
        <IconContainer>
        <FcLeft size={22} cursor={"pointer"} onClick={()=>openChat(false)}/>
            <IconDiv >
            <FcCallback size={22} cursor={"pointer"}/>
            <FcVideoCall size={22} cursor={"pointer"}/>
            <FcAbout size={22} cursor={"pointer"}/>
            </IconDiv>
        </IconContainer>
        <ProfileContainer>
        <Profile src={Travel}/>
        <Name>{userName}</Name>
        </ProfileContainer>
        <ViewContainer> 
          {data?.map((msg:any)=>{
            return(
              <>
              {
              msg.sender === loggedInUser? <RightMsg>{msg.text}</RightMsg>:
              <LeftMsg>{msg.text}</LeftMsg>
              }
              </>
            )
          })}
        </ViewContainer>
        <SendMessageDiv onSubmit={handleSubmit(submit)}>
          <SearchBar {...register('text')} type="text" placeholder="Message"/>  
          <ImageContainer>
        <TbSend size={20} cursor={"pointer"}/>
        </ImageContainer>
      </SendMessageDiv>
    </ChatWrapper>
  )
}

export default ChattingBox