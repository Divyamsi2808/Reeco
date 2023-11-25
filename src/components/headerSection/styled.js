import styled from 'styled-components';

import { PiShoppingCartBold } from "react-icons/pi";


export const HeaderContainer = styled.div`
width: 100%;
padding: 10px 60px 10px 20px;
background-color: green;
color: #ffffff;
display: flex;
align-items: center;
justify-content: space-between;
flex: 0 1 auto;
`




export const TabsContainer = styled.ul`
display: flex;
align-items: center;
justify-content: space-around;
flex: 0 1 auto;
list-style-type: none;
width: 500px;
`

export const HeaderHeading = styled.div`
font-size: 26px;
font-family: Sans-serif;
font-weight: 600;
color: #ffffff;
`


export const Anchor = styled.a`
text-decoration: none;
color: #e5e8d5;
font-size: 14px;
font-weight: 600;
`


export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  flex: 0 1 auto;
  align-items: center;
`;

export const CartIcon = styled(PiShoppingCartBold)`
font-size: 30px;
`

export const DropdownButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  color: #254869;
  padding: 10px;
  font-size: 12px;
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 1;
  flex: 0 1 auto;
`;
