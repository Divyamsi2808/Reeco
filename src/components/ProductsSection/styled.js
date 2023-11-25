import styled from "styled-components"
import { IoSearchOutline } from "react-icons/io5";


export const ProductsContainer = styled.div`
box-shadow: 0px 0px 1px 1px #8b8f8d;
width: 80%;
flex-grow: 1;
background-color: #ffffff;
border-radius: 12px;
padding: 10px 20px;
display: flex;
flex-direction: column;
`

export const TopSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 20px;
`

export const SearchContainer = styled.div`
display: flex;
align-items: center;
border: 2px solid #746f75;
border-radius: 20px;
padding: 6px;
flex: 0 1 auto;
`

export const SearchInput = styled.input`
padding: 0px 10px;
border: none;
outline: none;
background-color: transparent;
font-size: 14px;
font-weight: 500;
color: #4c4a4d;
flex: 0 1 auto;
`

export const SearchIcon = styled(IoSearchOutline)`
font-size: 24px;
columns: #4c4a4d;
`


export const ButtonsContainer = styled.div`
display: flex;
align-items: center;
`

export const PirintButton = styled.button`
background-color: transparent;
font-size: 30px;
border: none;
outline: none;
cursor: pointer;
color: green;
`
