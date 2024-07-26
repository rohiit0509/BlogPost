import styled from "styled-components";

export const IconContainer = styled.div`
  padding: 25px 25px 0 25px;
  display: flex;
  justify-content: space-between;
`;
export const IconDiv = styled.div`
  display: flex;
  gap: 15px;
`;
export const Profile = styled.img`
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 25px;
`;
export const Name = styled.div`
  font-size: 20px;
`;

export const SendMessageDiv = styled.form`
  width: 100%;
  padding: 8px 15px 8px 15px;
  border-radius: 50px;
  border: 1px solid #455a64;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 10px 0;
  max-width: 350px;
  bottom: 1px;
  left: 10px;
  position: absolute;
  justify-content: space-between;
`;
export const ViewContainer = styled.div`
margin-top: 30px;

`
export const LeftMsg = styled.div`
float: left;
clear: both;
margin-left: 4px;
background-color: #2196f3;
padding:5px 10px;
border-radius: 5px;
max-width: 150px;
color: #ffffff;
word-break:break-all;
font-size: 11px;
`
export const RightMsg = styled.div`
float: right;
clear: both;
padding:5px 10px;
border-radius: 5px;
background-color: #2196f3;
margin-right: 4px;
max-width: 150px;
color: #ffffff;
word-break:break-all;
font-size: 11px;
`