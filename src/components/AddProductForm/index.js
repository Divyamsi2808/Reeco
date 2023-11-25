import { useState } from "react"
import {nanoid} from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { FaPlus,FaMinus  } from "react-icons/fa6";

import { addProduct } from "../../features/products/productSlice"

import {
    PopupOverlay,
    DropdownButton,
    PopupContent,
    InputContainer,
    LabelEle,
    InputEle,
    QuantityContainer,
    QuantityButton,
    QuantityPara,
    ButtonsContainer,
    Button,
    AddButton,
} from "./styled"


const AddProduct = () => {

    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)
    const [productName, setProductName] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState(0)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleAddProduct = () => {
        const newProduct = {
            id : nanoid(),
            name: productName,
            brand,
            price,
            quantity,
            image: "https://res.cloudinary.com/dxaugnoxj/image/upload/v1700803413/samples/Avocado_Hass_vhpfs6.jpg",
            status:"",
            reason: "",
        };
        dispatch(addProduct(newProduct));
        setIsOpen(!isOpen);
        setProductName("")
        setBrand("")
        setPrice("")
        setQuantity(0)
      };

    const productNameField  = () => (
        <InputContainer>
            <LabelEle htmlFor="productName">
                Product Name
            </LabelEle>
            <p>
                :
            </p>
            <InputEle
            type = "text"
            id = "productName"
            placeholder="Product name..."
            value={productName}
            onChange={(e) => (setProductName(e.target.value))}
            />
        </InputContainer>
    ) 

    const brandField = () => (
        <InputContainer>
            <LabelEle htmlFor="brand">
                Brand Name
            </LabelEle>
            <p>
                :
            </p>
            <InputEle
            type = "text"
            id = "brand"
            placeholder="Brand..."
            value={brand}
            onChange={(e) => (setBrand(e.target.value))}
            />
        </InputContainer>
    )

    const priceField = () => (
        <InputContainer>
            <LabelEle htmlFor="price">
                Produc price 
            </LabelEle>
            <p>
                :
            </p>
            <InputEle
            type = "text"
            id = "price"
            placeholder="Price..."
            value={price}
            onChange={(e) => {
                const inputValue = e.target.value
                const numericValue = inputValue.replace(/[^0-9]/g, '')
                setPrice(numericValue)
            }}
            />
        </InputContainer>
    )

    const quantityField = () => (

        <InputContainer>
            <LabelEle htmlFor="quantity">
                Quantity
            </LabelEle>
            <p>
                :
            </p>
            <QuantityContainer id = "quantity">
                <QuantityButton type = "button" onClick={() => (setQuantity((prevState) => prevState > 0 ? (prevState - 1): prevState))}>
                    <FaMinus />
                </QuantityButton>
                <QuantityPara>
                    {quantity}
                </QuantityPara>
                <QuantityButton type = "button" onClick={() => (setQuantity((prevState) => (prevState + 1)))}>
                    <FaPlus/>
                </QuantityButton>
            </QuantityContainer>
            
        </InputContainer>
    )

    const renderButtons = () => (
        <ButtonsContainer>
            <Button type = "button" onClick={toggleDropdown} >
                Cancle
            </Button>
            <AddButton type = "button" onClick={handleAddProduct} >
                Add
            </AddButton>
    </ButtonsContainer>
    )


    return (
        <>
        <DropdownButton onClick={toggleDropdown}>
                Add item
            </DropdownButton>
            <PopupOverlay open={isOpen} >
            <PopupContent id = "add product">
                {
                    productNameField()
                }
                {
                    brandField()
                }
                {
                    priceField()
                }
                {
                    quantityField()
                }{
                    renderButtons()
                }
            </PopupContent>
            </PopupOverlay>
        </>
    )
}

export default AddProduct