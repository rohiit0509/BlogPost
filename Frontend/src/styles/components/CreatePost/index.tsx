import styled from "styled-components";

const CreatePostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
`;
const PostContainer = styled.div`
  width: 75%;
  height: 80%;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
`;
const Container = styled.form`
  display:flex;
  justify-content:center;
  width:100%;
  gap:10px;
`
const Input = styled.input`
  height: 40px;
  width:25%;
  outline: none;
  font-size: 19px;
  border: none;
  border-bottom: 1px solid rgba(22, 22, 22, 0.4);
`;
const PreviewBtn = styled.button<{backgroundColor?:string, color:string}>`
background-color:${(props)=>props.backgroundColor};
display:flex;
justify-content:space-between;
align-items:center;
gap:10px;
padding:8px 10px;
border-radius:5px;
color:${(props)=>props.color};
cursor:pointer;
font-weight:500;
border:none;
transition:all .3s ease;
&:hover{
  background-color: rgba(0,0,0,.180);
}
`

export { CreatePostWrapper, PostContainer, Input, PreviewBtn, Container };
