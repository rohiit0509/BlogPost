import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { useGet } from "../../hooks/fetchData";
import {
  BlogSectionWrapper,
  UserContainer,
  BlogContainer,
  BlogImg,
  BlogReadBtn,
  UserProfile,
  UserName,
  BlogTitle,
  BlogDescription,
  BlogContainerLeft,
  BlogContainerRight,
  Details,
  Wrapper,
  TopicNameContainer,
  TopicName,
  RightWrapper,
  SeeMoreBtn,
  LikeWrapper,
  Container,
  Count,
} from "../../styles/components/BlogSection";
import Travel from "../../assets/images/travel.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Comment from "../Comment";

const BlogSection = () => {
  const [like, setLike] = useState();
  const navigate = useNavigate();
  const [openComment, setOpenComment] = useState(false);
  const [ fill , setFill] = useState(false)
  const topics = [
    "Programming",
    "Data Science",
    "Technology",
    "Self Improvement",
    "Writing",
    "Machine Learning",
    "Relationships",
    "Productivity",
    "Politics",
  ];

  const { data, refetch } = useGet("fetchData", "/getData");
  const { data: userData, refetch: userRefetch } = useGet(
    "getallusers",
    "/getallusers"
  );

  const [postData, setPostData] = useState({});
  const handleCommentBtn = (postId: string) => {
    setOpenComment((prev) => !prev);
    setPostData({
      postId: postId,
    });
  };
  const handleLikeBtn = async (data: any) => {
    const res = await axios.patch(
      "http://localhost:9000/likeonpost/",
      data,
      {
        withCredentials: true,
      }
    );
    setLike(res.data.likesCount);
    console.log(res)
  };
  useEffect(() => {
    refetch();
  }, [like]);
  return (
    <BlogSectionWrapper>
      {openComment && (
        <Comment postData={postData} openComment={setOpenComment} />
      )}
      <BlogContainer>
        <BlogContainerLeft>
          {data?.map((item: any, index:number) => {
            return (
              <Wrapper key={index}>
                <Details>
                      <UserContainer>
                        <UserProfile src={Travel} />
                        <UserName>{item.userName}</UserName>
                      </UserContainer>
                  <BlogTitle fontSize="22px">{item.title}</BlogTitle>
                  <BlogDescription>{item.description}</BlogDescription>
                  <Wrapper justifyContent="space-between">
                    <BlogReadBtn
                      onClick={() => navigate(`/openblog/${item.title}`)}
                    >
                      Read more
                    </BlogReadBtn>
                    <LikeWrapper>
                      <Container>
                   { fill? <AiFillLike size={19}
                          onClick={() =>
                            handleLikeBtn({
                              postId: item._id,
                              userId: item.userId,
                              like: true,
                            })
                          }/>:<AiOutlineLike
                          size={19}
                          onClick={() =>
                            handleLikeBtn({
                              postId: item._id,
                              userId: item.userId,
                              like: true,
                            })
                          }
                        />}
                        <Count>{item.likes.length}</Count>
                      </Container>
                      <Container onClick={() => handleCommentBtn(item._id)}>
                        <FaRegComment size={19} />
                        <Count>{item.comments.length}</Count>
                      </Container>
                    </LikeWrapper>
                  </Wrapper>
                </Details>
                <BlogImg src={item.thumbnail} />
              </Wrapper>
            );
            
          })}
        </BlogContainerLeft>
        <BlogContainerRight>
          <RightWrapper>
            <BlogTitle fontSize="24px">
              Discover more of what matters to you
            </BlogTitle>
            <TopicNameContainer>
              {topics.map((topic, idx) => (
                <TopicName key={`topic-name-${idx}`}>{topic}</TopicName>
              ))}
            </TopicNameContainer>
            <SeeMoreBtn>See more topics</SeeMoreBtn>
          </RightWrapper>
        </BlogContainerRight>
      </BlogContainer>
    </BlogSectionWrapper>
  );
};

export default BlogSection;
