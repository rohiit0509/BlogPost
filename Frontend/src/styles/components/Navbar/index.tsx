import styled from "styled-components";

const HiddenNav = styled.div`
  height: 4rem;
  background-color: #ffffff;
  position: fixed;
  top: -80px;
  width: 100%;
  display: block;
  transition: top .3s;
  z-index:2;
`;
const NavbarWrapper = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  height: 4rem;
  position: fixed;
  top: 0;
  color: #ffffff;
  width: 100%;
  z-index:3;
`;

const NavLogo = styled.div`
  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;
`;
const NavBtn = styled.div`
  border: 1px solid #ffffff;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background-color: #ff8000;
    border-color: transparent;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  svg{

  }
`;

export { HiddenNav, NavbarWrapper, NavLogo, NavBtn, Div};
