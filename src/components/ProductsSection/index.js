import {  useState } from "react"
import { SlPrinter } from "react-icons/sl";
import { useDispatch } from 'react-redux';
import { searchFilter } from "../../features/products/productSlice";

import AddProduct from "../AddProductForm"
import ProductTable from "../productsTable";

import {ProductsContainer, 
    TopSection,
    SearchContainer,
    SearchInput,
    SearchIcon,
    ButtonsContainer,
    PirintButton,
} from "./styled"


const ProductsSection = () => {
    const dispatch = useDispatch()
    

    const [searchText, onChangeSearchText] = useState("")

    const onChangeSearch = (event) => {
        event.preventDefault()
        const text = event.target.value
        dispatch(searchFilter(text))
        onChangeSearchText(text)
    }
    

    const renderSerachBar = () => (
        <SearchContainer>
            <SearchInput
            type = "text"
            placeholder="Serch..."
            value={searchText}
            onChange={onChangeSearch}
            />
            <SearchIcon/>
        </SearchContainer>
    )


    const renderAddButton =  () => (
        <AddProduct/>
    )

    
    const renderTopSection = () => (
        <TopSection>
            {
                renderSerachBar()
            }
            <ButtonsContainer>
                {
                    renderAddButton()
                }
                <PirintButton type = "button">
                    <SlPrinter/>
                </PirintButton>
            </ButtonsContainer>
            
        </TopSection>
    )

    return (
        <ProductsContainer>
            {
                renderTopSection()
            }
            <ProductTable/>
        </ProductsContainer>
    )
}

export default ProductsSection