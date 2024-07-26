import styled from "styled-components";

const LoginWrapper = styled.div`
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`
const LoginContainer = styled.div`
width:55%;
height:65%;
border-radius:15px;
box-shadow: 0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08);
display: flex;
overflow:hidden;
`
const LeftDiv = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content:center;
align-items:center;
`
const Image = styled.img`
width: 80%;
`
const RightDiv = styled.div`
width: 50%;
display:flex;
flex-direction:column;
gap:60px;
align-items:center;
justify-content:center;

`
const TitleContainer = styled.div`
align-self:flex-start;
padding:0 15%;
`
const Title = styled.div`
font-size:30px;
font-weight:800;
`
const TitlePara = styled.div`

`
const Form = styled.form<{height:string,gap:string}>`
display: flex;
flex-direction:column;
width: 70%;
height:${(props)=>props.height};
gap: ${(props)=>props.gap};
justify-content:space-between;
align-items:center;
`
const Input = styled.input`
width: 100%;
height:20%;
outline:none;
font-size:19px;
border:none;
border-bottom:1px solid black;
`
const InputBtn = styled.button<{BackgroundColor:string}>`
background-color:${(props)=>props.BackgroundColor};
padding:3% 5%;
width:30%;
border-radius:5px;
color:#ffffff;
font-family: 'Poppins', sans-serif;
font-weight:600;
border:none;
cursor:pointer;
&:hover{
    color:rgba(255,255,255,.7)
}

`
const A = styled.a`
font-weight:800;
cursor: pointer;
`
const LoginFooter = styled.div<{marginTop:string}>`
margin-top:${(props)=>props.marginTop};
`
export {LoginWrapper,LoginContainer, LeftDiv,Form, RightDiv, Input,LoginFooter, InputBtn, Image,TitleContainer,A, Title, TitlePara}