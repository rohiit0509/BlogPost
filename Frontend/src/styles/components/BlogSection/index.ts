import styled from "styled-components";

const BlogSectionWrapper = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: center;
  height: 100vh;
  z-index: 0;
  background: white;
  position: relative;
`;
const BlogContainer = styled.div`
  width: 75%;
  display: flex;
  column-gap: 6%;
  padding: 0 25px;
  position:relative;
`;
const BlogContainerLeft = styled.div`
  width: 62%;
  display: flex;
  flex-direction:column;
  gap: 50px;
  padding-bottom: 30px;
  height: fit-content;
  
`;
const Wrapper = styled.div<{justifyContent?:string}>`
display: flex;
align-items: center;
gap: 20px;
justify-content:${(props)=>props?props.justifyContent:'space-around'};
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
width: 100%;
max-width: 400px;
`;
const BlogImg = styled.img`
  width: 120px;
  aspect-ratio: auto 120 / 134;
  object-fit: contain;
`;
const UserContainer = styled.div`
  display: flex;
  gap: 0.7%;
  align-items: center;
`;
const UserProfile = styled.img`
  width: 8%;
  border-radius: 50px;
`;
const UserName = styled.div`
  font-weight: 500;
`;
const BlogTitle = styled.div<{fontSize:string}>`
  font-size: ${(props)=>props.fontSize};
  font-weight: 500;
`;
const BlogDescription = styled.div`
  font-size: 15px;
  color:rgba(100,100,100,1);
`;
const BlogReadBtn = styled.div`
margin-top: 10px;
  font-size: 12px;
  border: 1px solid black;
  border-radius: 5px;
  color: white;
  background-color: black;
  height: 30px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
`;

const BlogContainerRight = styled.div`
  width: 38%;
  position:sticky;
  top:80px;
`;
const RightWrapper = styled.div`
display: flex;
flex-direction:column;
gap: 25px;
`
const TopicNameContainer = styled.div`
display:flex;
gap: 20px;;
flex-wrap:wrap;
`
const TopicName = styled.div`
background-color:#f2f2f2;
padding:2% 3%;
border-radius:50px;
transition: background-color .3s ease;
cursor: pointer;
&:hover{
    background-color:rgba(0,0,0,0.2);
}
`
const SeeMoreBtn = styled.a`
cursor: pointer;
color:#52a356;
&:hover{
color:rgba(0,0,0,.8)
}
`
const LikeWrapper = styled.div`
display: flex;
gap: 20px;
color:rgb(117 117 117);
cursor: pointer;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover{
    color: #000000;
  }
  
`
const Count = styled.div`
font-size: 11px;
`
export {
  BlogSectionWrapper,
  UserContainer,
  BlogContainer,
  BlogImg,
  UserProfile,
  UserName,
  BlogTitle,
  BlogDescription,
  BlogReadBtn,
  BlogContainerLeft,
  BlogContainerRight,
  Details,
  Wrapper,
  Container,
  RightWrapper,
  TopicNameContainer,
  TopicName,
  SeeMoreBtn,
  LikeWrapper,
  Count
};
