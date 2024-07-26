import {useNavigate } from "react-router-dom"
import { Div, NavBtn, NavLogo, NavbarWrapper , HiddenNav} from "../../styles/components/Navbar"
import { useEffect, useState } from "react";
import {FcSettings} from "react-icons/fc";
import {SiMessenger} from "react-icons/si";
import Chat from "../Chat";

import Profile from "../Profile";

const Navbar = () => {
  const [top, setTop] = useState(-80);
  const [fontColor, setColor] = useState('#ffffff')
  const [background, setBackground]= useState('');
  const [openProfile, setOpenProfile] = useState(false)
  const [openChat, setOpenChat] = useState(false)
 useEffect(()=>{
  window.onscroll = (()=>{
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        setTop(0);
        setColor('#ff8000')
        setBackground('#ff8000');
      } 
        else {
          setTop(-80)
          setColor('#ffffff')
        setBackground('');
        }
  })
 },[top])
  const navigate = useNavigate();
  return (
    <>
    <HiddenNav id="HiddenNav" style={{top:top}}/> 
    <NavbarWrapper>
        <NavLogo style={{color:fontColor}}>Blogpost</NavLogo>
        <Div>
        <NavBtn onClick={()=>navigate("/signup")} style={{background:background}}>Sign up</NavBtn>
        <NavBtn onClick={()=>navigate("/login")} style={{background:background}}>Login</NavBtn>
        <SiMessenger color="#455a64" size={27} cursor={"pointer"} onClick={()=>setOpenChat((prev)=>!prev)}/>
        <FcSettings cursor={"pointer"} size={30} onClick={()=>setOpenProfile((prev)=>!prev)} /> 
        {openProfile && <Profile />}
        </Div>
    </NavbarWrapper>
    {openChat && <Chat/>}
    </>
  )
}

export default Navbar