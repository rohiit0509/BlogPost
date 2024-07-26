import { useNavigate } from "react-router-dom"
import { MainBtn, MainPara, MainSectionWrapper, MainTextContainer,MainTitle, FlexCenter, Icon,LeftIcon,RightIcon } from "../../styles/components/MainSection"
import laptop from "../../assets/images/laptop.png"
import speaker from "../../assets/images/speaker.png"
import glass from "../../assets/images/glass.webp"
import letter from "../../assets/images/letter.webp"
import coffee from "../../assets/images/coffee.png"
import pencil from "../../assets/images/pencil.png"
import notepad from "../../assets/images/notepad.png"
import phone from "../../assets/images/phone.png"

const MainSection = () => {
  const navigate = useNavigate()
  return (
    <MainSectionWrapper>
      <MainTextContainer>
        <FlexCenter flexDirection="column" gap="20px">
        <MainTitle>Publish your passions, your way</MainTitle>
        <MainPara>Create & read unique and beautiful blog easily.</MainPara>
        <MainBtn onClick={()=>navigate("/create")}>Create your blog</MainBtn>
        </FlexCenter>
      </MainTextContainer>
        <Icon src={laptop}/>
        <LeftIcon src={speaker} style={{top:"280px", width:"9%", rotate:"-10deg"}}/>
        <LeftIcon src={glass} style={{top:"520px", width:"8%"}}/>
        <LeftIcon src={letter} style={{ bottom:"80px", rotate:"-20deg"}}/>
        <RightIcon src={notepad} style={{top:"280px", width:"9%"}}/>
        <RightIcon src={pencil} style={{top:"380px", width:"3%"}}/>
        <RightIcon src={coffee} style={{bottom:"250px", width:"9%"}}/>
        <RightIcon src={phone} style={{bottom:"80px", width:"9%",right:"180px", rotate:"25deg"}}/>
    </MainSectionWrapper>
  )
}

export default MainSection