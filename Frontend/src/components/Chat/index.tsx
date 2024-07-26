import { useEffect, useState } from "react";
import { useGet } from "../../hooks/fetchData";
import { CiSearch } from "react-icons/ci";
import Travel from "../../assets/images/travel.jpg";
import ChattingBox from "../ChattingBox";
import {
  UserContainer,
  UserProfile,
  UserName,
} from "../../styles/components/BlogSection";
import {
  ChatLogo,
  ChatWrapper,
  SearchBar,
  ImageContainer,
  SearchBarDiv,
} from "../../styles/components/Chat";

const Chat = () => {
  const [openChat, setOpenChat] = useState(false);
  const { data, refetch } = useGet("getallusers", `/getallusers`);
  const [user, setUser] = useState({});
  const [conversation, setConversation] = useState([])
  const [currentChat, setCurrentChat] = useState()
  const {data:conversationData, refetch:conversationRefetch} = useGet('getConversation',`getConversation/${data?.loggedInUser}`)

  const handleUserClick = (userId: string, userName: string) => {
    setOpenChat((prev) => !prev);
    setUser({ userId: userId, userName: userName, loggedInUser:data.loggedInUser });
    conversation.map((c:any)=>{
      c.member.find((m:any)=>{
        if(m===userId){
         setCurrentChat(c)
        }
      })
    })
  };
  useEffect(() => {
    refetch();
    conversationRefetch();
    setConversation(conversationData)
  }, [data?.loggedInUser]);

  return (
    <>
      <ChatWrapper>
        <ChatLogo>Messages</ChatLogo>
        <SearchBarDiv>
          <ImageContainer>
            <CiSearch />
          </ImageContainer>
          <SearchBar type="text" placeholder="Search" />
        </SearchBarDiv>

        {data?.getAllUser.map((item: any, index: number) => {
          return (
            <UserContainer
              onClick={() => handleUserClick(item._id, item.userName)}
              style={{
                padding: "20px 0  0  18px",
                gap: "8px",
                cursor: "pointer",
              }}
              key={index}
            >
              <UserProfile src={data.loggedInUser!==item._id?Travel:""} />
              <UserName>{data.loggedInUser!==item._id?item.userName:""}</UserName>
            </UserContainer>
          );
        })}
      </ChatWrapper>
      {openChat && <ChattingBox user = {user} openChat={setOpenChat} conversation={currentChat}/>}
    </>
  );
};

export default Chat;
