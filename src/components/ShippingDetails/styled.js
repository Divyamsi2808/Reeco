import styled from "styled-components";

export const ShippingDetailsContainer = styled.div`
background-color: #ffffff;
box-shadow: 0px 0px 1px 1px #615763;
padding: 2px 10px;
width: 80%;
border-radius: 12px;
flex: 0 1 auto;
margin-bottom: 20px;
`

export const DetailsList = styled.ul`
display: flex;
align-items: center;
padding:10px 20px;
list-style-type: none;
`

export const DetailsItem = styled.li`
display: flex;
flex-direction: column;
padding: 4px 10px;
border-right: 2px solid #8b8f8d;
font-size: 18px;
font-family: Roboto;
font-weight: 600;
flex: 0 1 auto;
width: 200px;
height: 60px;
line-height: 0.8;
`

export const DetailsLastItem = styled(DetailsItem)`
border: none;
`

export const SpanEle = styled.span`
font-size: 13px;
font-weight: 500;
color: #9ca19f;
line-height: 0.8;
`
export const ImageEle = styled.img`
width: 130px;
margin-top: 6px;
padding: 4px 20px;
`
export const ParaEle = styled.p`
line-height: 1.2;
`