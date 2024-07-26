import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LeftDiv,
  RightDiv,
  Input,
  LoginContainer,
  LoginWrapper,
  InputBtn,
  Image,
  TitleContainer,
  Title,
  TitlePara,
  A,
  LoginFooter,
  Form
} from "../../styles/components/Login";
import LoginDp from "../../assets/svg/login-dp.svg"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const {register, handleSubmit} = useForm();

  const onSubmit = async(data:any)=>{
    setLoader(true)
    const config = {
      headers: {
        "Content-Type": "application/json"
        },
        withCredentials: true
      }
    let res = await axios.post("http://localhost:9000/login", data, config)
    if (res.status === 200) {
      setLoader(false)
      toast.success(res.data.msg, {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         progress: undefined,
         theme: "colored",
         style:{background:"#ff755a"}
         });
           setTimeout(()=>{
             navigate("/")
           },2000)
     }
     if (res.status === 203) {
      setLoader(false);
       toast.error(res.data.msg, {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         progress:undefined,
         theme: "colored",
         transition:Zoom,
         });
     }

  }
  const navigate = useNavigate();
  return (
    <LoginWrapper>
      <LoginContainer>
        <ToastContainer/>
        <LeftDiv>
          <Image src={LoginDp}></Image>
        </LeftDiv>
        <RightDiv>
        <TitleContainer>
        <Title>Login</Title>
        <TitlePara>Please Sign in to continue.</TitlePara>
        </TitleContainer>
          <Form height="35%" gap="20px" onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("email")} type="email" placeholder="Username"/>
          <Input {...register("password")} type="password" placeholder="Password"/>
         <InputBtn BackgroundColor="#fb684e" disabled={loader}>Login</InputBtn>
          </Form>
          <LoginFooter marginTop="0">
          <TitlePara>Don't have an account? <A onClick={()=>{navigate("/signup")}}>Sign up</A></TitlePara>
          </LoginFooter>
        
        </RightDiv>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default Login;
