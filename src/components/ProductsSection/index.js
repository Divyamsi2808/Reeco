import { useState } from "react"
import { SlPrinter } from "react-icons/sl";

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

    const [searchText, onChangeSearchText] = useState("")

    

    const renderSerachBar = () => (
        <SearchContainer>
            <SearchInput
            type = "text"
            placeholder="Serch..."
            value={searchText}
            onChange={(e) => (onChangeSearchText(() => e.target.value))}
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