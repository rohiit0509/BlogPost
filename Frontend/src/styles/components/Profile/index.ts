import styled from "styled-components";

const ProfileWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
justify-content: space-between;
position: absolute;
top: 70px;
background-color: #ffffff;
color: #000000;
width: 250px;
height: 250px;
padding: 20px;
border-radius: 5px;
right: 15px;
box-shadow: 0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08);;

&::after{
    content: '';
    width: 15px;
    height: 15px;
    background-color: rgb(255, 255, 255);
    position: absolute;
    top: -6px;
    right: 95px;
    rotate: 50deg;
}
`
const LogoutContainer = styled.div`
display: flex;
gap: 15px;
align-items: center;
border-top: 1px solid black;
padding-top: 5px;
cursor: pointer;
`
const SigninSignupContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
const Button = styled.div<{backgroundColor:string, color?:string}>`
text-align: center;
cursor: pointer;
background-color: ${(props)=>props.backgroundColor} ;
color: ${(props)=>props.color?props.color:"white"};
font-size: 15px;
font-weight: 500;
padding: 5px;
border-radius: 5px;
border: 1px solid rgb(117,117,117);
`
export {ProfileWrapper, LogoutContainer, SigninSignupContainer, Button} 