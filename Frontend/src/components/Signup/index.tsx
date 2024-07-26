import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LeftDiv,
  Input,
  LoginContainer,
  Form,
  LoginWrapper,
  RightDiv,
  Image,
  TitleContainer,
  Title,
  TitlePara,
  InputBtn,
  LoginFooter,
  A,
} from "../../styles/components/Login";
import SignupImg from "../../assets/images/signup-dp.webp";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    let res = await axios.post("http://localhost:9000/signup", data);
    if (res.status === 200) {
         toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style:{background:"#84a5e9"}
        });
          setTimeout(()=>{
            navigate("/login")
          },2000)
    }
    if (res.status === 203) {
      toast.error(res.data.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress:undefined,
        theme: "colored",
        transition:Zoom,
        });
    }
  };
  return (
    <LoginWrapper>
      
      <LoginContainer>
        <ToastContainer/>
        <LeftDiv>
          <Image src={SignupImg} style={{ width: "550px" }}></Image>
        </LeftDiv>
        <RightDiv>
          <TitleContainer>
            <Title>Sign up</Title>
            <TitlePara>Create your account.</TitlePara>
          </TitleContainer>
          <Form height="50%" gap="40px" onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("email")} type="email" placeholder="Email" />
            <Input
              {...register("userName")}
              type="text"
              placeholder="Username"
            />
            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
            />
            <Input {...register("phone")} type="tel" placeholder="Phone" />
            <InputBtn BackgroundColor="#aca1ff">Sign up</InputBtn>
          </Form>
          <LoginFooter marginTop="0">
            <TitlePara>
              Do you have an account?{" "}
              <A
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log in
              </A>
            </TitlePara>
          </LoginFooter>
        </RightDiv>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default Signup;
