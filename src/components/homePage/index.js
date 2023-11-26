
import React from 'react';

import HeaderSection from '../headerSection';
import OrderSection from '../orderSection';
import ShippingDetails from '../ShippingDetails';
import ProductsSection from '../ProductsSection';

import {HomepageContainer, ContentContainer} from "./styled"

const HomePage = () => (
  <HomepageContainer>
      <HeaderSection/>
      <OrderSection/>
      <ContentContainer>
        <ShippingDetails/>
        <ProductsSection/>
      </ContentContainer>
    </HomepageContainer>
)

export default HomePage;
