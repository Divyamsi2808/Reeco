import styled from "styled-components";


export const OrderContainer = styled.div`
background-color: #ffffff;
padding: 6px 20px;
border: 2px solid #615763;
`

export const OrderPara = styled.p`
font-size: 14px;
font-family: Roboto;
font-weight: 500;
color: #515753;
`

export const AnchorEle = styled.a`
font-size: 12px;
color: #515753;
`

export const OrderApprovalContainer = styled.div`
color: black;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: -20px;
`

export const OrderHeading = styled.h1`
font-size: 30px;
color: black;
font-weight: 700;
`

export const ApprovalButtons = styled.div`
display: flex;
align-items: center;
width: 200px;
justify-content: space-around;
`

export const ButtonEle = styled.button`
font-size: 14px;
font-weight: 600;
background-color: transparent;
padding: 6px 10px 6px 10px;
color: green;
border: 2px solid green;
outline: none;
cursor: pointer;
border-radius: 10px;
flex: 0 1 auto;
`

export const ApprovalButton = styled(ButtonEle)`
background-color: green;
color: #ffffff;
padding: 8px 10px 8px 10px;
border: none;
`