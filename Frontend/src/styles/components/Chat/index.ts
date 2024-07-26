import styled from "styled-components";

export const ChatWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 370px;
  height: 80%;
  top: 70px;
  right: 10px;
  position: absolute;
  z-index: 1;
  border-radius: 5px;
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
  padding-left: 15px;

  &::before {
    content: "";
    width: 17px;
    height: 17px;
    right: 145px;
    top: -8px;
    rotate: 45deg;
    background-color: #ffffff;
    position: absolute;
  }
`;
export const ChatLogo = styled.div`
  font-weight: 500;
  font-size: 25px;
  padding: 20px 0 8px 0;
  color: #455a64;
`;
export const SearchBarDiv = styled.div`
  width: 100%;
  padding: 5px 10px;
  max-width: 330px;
  border-radius: 50px;
  border: 1px solid #455a64;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 10px 0;
`;
export const ImageContainer = styled.div`
`;

export const SearchBar = styled.input`
  width: 100%;
  max-width: 280px;
  border: none;
  outline: none;
  font-size: 15px;
`;
