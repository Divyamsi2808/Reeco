import {  useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts,searchTextUpdate } from "../../features/products/productSlice";
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
    const dispatch = useDispatch()
    const status = useSelector((state) => state.products.status);
    const [searchText, onChangeSearchText] = useState("")
    
  
    useEffect(() => {
      if (status === 'idle') {
        const existingProducts = fetchProducts()
        dispatch(existingProducts);
      }
    }, [dispatch, status]);
    

    

    const onChangeSearch = (event) => {
        event.preventDefault()
        const text = event.target.value
        dispatch(searchTextUpdate(text));
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