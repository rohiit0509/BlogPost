import {RiLogoutBoxRFill} from "react-icons/ri";
import { ProfileWrapper , LogoutContainer, SigninSignupContainer, Button} from "../../styles/components/Profile"
import { UserContainer, UserProfile, UserName } from "../../styles/components/BlogSection"
import Travel from "../../assets/images/travel.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
    const navigate = useNavigate();
    const [userName, setUserName]= useState();
    function handleLogout() {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
      }
      useEffect(() => {
        const func = async () => {
          try {
            const getUser = await axios.get("http://localhost:9000/getUserDetail" ,{withCredentials:true});
            if (getUser) {
                setUserName(getUser.data)
            }
          } catch (err) {
            console.log("Error while fetching data", err);
          }
        };
        func();
      }, [userName]);
  return (
    <ProfileWrapper>
        <UserContainer style={{gap:"15px"}}>
            <UserProfile src={Travel}></UserProfile>
            <UserName>{userName?userName:"Guest"}</UserName>
        </UserContainer>
        <SigninSignupContainer>
            <Button backgroundColor="#427c9e" onClick={()=>navigate("/signup")}>Sign up</Button>
            <Button backgroundColor="transparent" color="rgb(117,117,117)" onClick={()=>navigate("/login")}>Log in</Button>
        </SigninSignupContainer>
        <LogoutContainer onClick={handleLogout}>
            <RiLogoutBoxRFill/>
        <UserName>Logout</UserName>
        </LogoutContainer>
    </ProfileWrapper>
  )
}

export default Profile