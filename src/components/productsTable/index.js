import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SiVerizon } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";

import { updateProductStatus } from '../../features/products/productSlice';

import {Table,
    Tr,
    Th,
    Td,
    ProductNameContainer,
    ProductImg,
    StatusContainer,
    PopupOverlay,
    PopupContent,
    PopupTopSection,
    CloseButton,
    PopupData,
    ButtonsContainer,
    Button,
    StatusText,
    ApprovalButtonsContainer,
    ApprovalButton,
    RejectButton,
} from "./styled"


const ProductTable = () => {
     
    const dispatch = useDispatch();

    const [selectedProduct, setSelectedProduct] = useState("");

  
    const productsList = useSelector((state) => state.products.productsList);
    const handlePopupClose = () => (setSelectedProduct(""))

    const onClickNo = () => {
        const newObj = {
            ...selectedProduct,
            status: "Missing"
        }
        dispatch(updateProductStatus(newObj))
        setSelectedProduct("")
      }

    const onClickYes = () => {
    const newObj = {
        ...selectedProduct,
        status: "Missing Urgent"
    }
    dispatch(updateProductStatus(newObj))
    setSelectedProduct("")
    }

    const onClickRight = (product) => {
    const newObj = {
        ...product,
        status: "Approved"
    }
    dispatch(updateProductStatus(newObj))
    setSelectedProduct("")
    }

    const onClickCross  = (product) => {
    setSelectedProduct(product);
    }
        

    return (
        <>
        <Table>
        <thead>
          <Tr>
            <Th>Product Name</Th>
            <Th>Brand</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Total</Th>
            <Th>Status</Th>
          </Tr>
        </thead>
        <tbody>
          {productsList.map((product) => (
            <Tr key={product.id}>
            <Td>
                <ProductNameContainer>
                <ProductImg
                src={product.image}
                alt = {product.name}
                />
                {product.name}
                </ProductNameContainer>
            </Td>
            <Td>{product.brand}</Td>
            <Td>${product.price}</Td>
            <Td>{product.quantity}</Td>
            <Td>${product.price * product.quantity}</Td>
            <Td  >
                <StatusContainer>
                    <StatusText status = {product.status}>
                    {product.status}
                    </StatusText>
                    <ApprovalButtonsContainer>
                        <ApprovalButton  type = "button" status = {product.status} onClick={() => onClickRight(product)}>
                            <SiVerizon/>
                        </ApprovalButton>
                        <RejectButton  type = "button" status = {product.status} onClick={() => onClickCross(product)}>
                            <RxCross2/>
                        </RejectButton>
                    </ApprovalButtonsContainer>
                </StatusContainer>
               
            </Td>
        </Tr>
          ))}
        </tbody>
      </Table>
      {
        <PopupOverlay open={selectedProduct !== ""} >
                <PopupContent>
                    <PopupTopSection>
                        <h1>
                            Missing Product
                        </h1>
                        <CloseButton onClick={handlePopupClose} >
                            <RxCross2/>
                        </CloseButton>
                    </PopupTopSection>
                    <PopupData>
                        {selectedProduct.name}
                    </PopupData>
                    <ButtonsContainer>
                        <Button type = "button" onClick={onClickNo}>
                            No
                        </Button>
                        <Button type = "button" onClick={onClickYes}>
                            Yes
                        </Button>
                    </ButtonsContainer>
                </PopupContent>
            </PopupOverlay>
      }
        </>
    )
}

export default ProductTable