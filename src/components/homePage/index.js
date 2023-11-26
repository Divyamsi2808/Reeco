
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchProducts} from '../../features/products/productSlice';

import HeaderSection from '../headerSection';
import OrderSection from '../orderSection';
import ShippingDetails from '../ShippingDetails';
import ProductsSection from '../ProductsSection';

import {HomepageContainer, ContentContainer} from "./styled"

const HomePage = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.products.status);
    
  
    useEffect(() => {
      if (status === 'idle') {
        const existingProducts = fetchProducts()
        dispatch(existingProducts);
      }
    }, [dispatch, status]);
  

  return (
    <HomepageContainer>
      <HeaderSection/>
      <OrderSection/>
      <ContentContainer>
        <ShippingDetails/>
        <ProductsSection/>
      </ContentContainer>
    </HomepageContainer>
  );
};

export default HomePage;
