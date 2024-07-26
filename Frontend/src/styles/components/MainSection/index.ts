import styled, { keyframes } from "styled-components";
const ColorChanger = keyframes`
0%{
    background-color:#bc382f;
}
50%{
    background-color:#bc382f;
}
75%{
    background-color:#388d80;
}
100%{
    background-color: #427c9e;
}
`
const MainSectionWrapper = styled.div`
background-color:#bc382f;
height:100vh;
animation:10s ease ${ColorChanger} infinite ;
`
const MainTextContainer = styled.div`
height:65%;
color:#ffffff;
display: flex;
justify-content:center;
align-items:center;
`
const MainTitle = styled.div`
font-size:50px;
`
const MainPara = styled.div`
font-size:25px;
`
const MainBtn = styled.div`
background-color:#ff8000;
padding:15px 20px;
border-radius:5px;
cursor:pointer;
text-transform:uppercase;
`
const FlexCenter = styled.div<{flexDirection:string, gap:string}>`
display:flex;
gap:${(props)=>props.gap};
flex-direction:${(props)=>props.flexDirection};
justify-content:center;
align-items:center;
`
const Translate = keyframes`
50%{
    transform: translateY(0);
}
70%{
    transform: translateY(0);
}
10%{
    transform: translateY(650px);
}
`
const Icon = styled.img`
position: absolute;
bottom:-38px;
left:38%;
opacity:.85;
transform: translateY(400px);
animation: 8s ease ${Translate} infinite ;
`
const LeftIcon = styled.img`
width:200px;
position:absolute;
left:150px;
opacity:.7;
transform: translateY(650px);
animation: 8s ease ${Translate} infinite ;
`
const RightIcon = styled.img`
width:200px;
position: absolute;
right:150px;
opacity:.7;
transform: translateY(650px);
animation: 8s ease ${Translate} infinite ;
`

export {MainSectionWrapper,MainTextContainer, MainTitle, MainPara, MainBtn, FlexCenter, Icon, RightIcon, LeftIcon}