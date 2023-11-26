import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0px 0px 1px 1px #7b747d;
  flex: 0 1 auto;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  box-shadow: 0px 0px 1px 1px #7b747d;
  font-size: 14px;
`;

export const Td = styled.td`
padding: 8px 6px;
width: 60px;
box-shadow: 0px 0px 1px 1px #a6ada8;
text-align: center;
`;

export const ProductNameContainer = styled(Td)`
display: flex;
align-items: center;
width: 100%;
box-shadow: none;
`

export const ProductImg = styled.img`
width: 50px;
margin-right: 12px;
`


export const StatusContainer = styled(Td)`
display: flex;
align-items: center;
justify-content: space-between;
justify-content: space-between;
box-shadow: none;
width: 150px;
`

export const StatusText = styled.p`
padding: 4px 10px 6px 10px;
border-radius: 10px;
color: #ffffff;
font-family: Roboto;
font-size: 16px;
font-weight: 400;
background-color: ${(props) => {
    switch (props.status) {
        case "Approved":
        case "Price updated":
        case "Quantity updated":
            return "green"
        case "Missing":
            return "orange"
        case "Missing Urgent":
            return "red"
        default:
            return "transparent"
    }
}};
`


export const Tr = styled.tr`
cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

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

export const PopupContent = styled.div`
  background-color: #f9f9f9;
  min-width: 160px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const DropdownButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const PopupTopSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 20px;
width: 100%;
font-size: 12px;
`

export const CloseButton = styled.button`
font-size: 30px;
background-color: transparent;
border: none;
outline: none;
cursor: pointer;
`

export const PopupData = styled.p`
font-size: 14px;
color: #8b8794;
text-align: center;
`
export const ButtonsContainer = styled.div`
align-self: flex-end;
display: flex;
align-items: center;
`

export const Button  = styled.div`
font-size: 14px;
font-weight: 400;
font-family: Roboto;
border: none;
outline: none;
background-color: transparent;
padding: 6px 12px;
margin-right: 10px;
cursor: pointer;
`

export const ApprovalButtonsContainer = styled.div`
display: flex;
align-items: center;
flex: 0 1 auto;
`

export const ApprovalButton = styled.button`
background-color: transparent;
border: none;
outline: none;
cursor: pointer;
margin-right: 20px;
padding: 6px;
color: ${(props) => {
    switch (props.status) {
        case "Approved":
        case "Price updated":
        case "Quantity updated":
            return "green"
        default:
            return "#737178"
    }
}};
`

export const RejectButton = styled.button`
background-color: transparent;
border: none;
outline: none;
cursor: pointer;
margin-right: 20px;
padding: 6px;
font-size: 18px;
color: ${(props) => {
    switch (props.status) {
        case "Missing":
            return "orange"
        case "Missing Urgent":
            return "red"
        default:
            return "#737178"
    }
}};
`