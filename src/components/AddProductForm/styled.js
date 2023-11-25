import styled from "styled-components";



export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;



export const DropdownButton = styled.button`
  background-color: green;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 20px;
`;

export const PopupContent = styled.form`
  background-color: #f9f9f9;
  min-width: 160px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const InputContainer = styled.div`
display: flex;
align-items: center;
line-height: 1.2;
justify-content: space-evenly;
margin-bottom: 10px;
`

export const LabelEle = styled.label`
font-size: 16px;
color: #322f33;
font-weight: 600;
font-family: Roboto;
margin-left: 4px;
width: 150px;
flex: 0 1 auto;
`

export const InputEle = styled.input`
width: 200px;
padding: 4px 8px;
border: 2px solid #605a61;
outline: none;
font-size: 16px;
border-radius: 10px;
`
export const QuantityContainer = styled.div`
width: 200px;
padding: 4px 8px;
font-size: 16px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: space-evenly;
`

export const QuantityButton = styled.button`
border: none;
height: 50px;
width: 50px;
border-radius: 25px;
background-color: green;
color: #ffffff;
padding: 6px 0px 0px 0px;
`

export const QuantityPara = styled.p`
font-size: 20px;
font-weight: 600;
padding: 10px;
border: 2px solid #656366;
border-radius: 10px;
width: 50px;
text-align: center;
`

export const ButtonsContainer = styled.div`
align-self: flex-end;
display: flex;
align-items: center;
`

export const Button = styled.button`
background-color: transparent;
border: 2px solid green;
border-radius: 10px;
padding: 6px 10px;
outline: none;
cursor: pointer;
font-size: 14px;
font-weight: 600;
color: green;
margin-right: 16px;
`

export const AddButton = styled(Button)`
background-color: green;
border: none;
color: #ffffff;
padding: 8px 12px 8px 10px;
`