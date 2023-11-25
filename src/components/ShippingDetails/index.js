import {ShippingDetailsContainer, DetailsList, DetailsItem, DetailsLastItem, SpanEle, ImageEle, ParaEle} from "./styled"





const ShippingDetails = () => (
    <ShippingDetailsContainer>
        <DetailsList>
            <DetailsItem>
            <SpanEle>
                    Supplier
                </SpanEle>
                <ParaEle>
                East coast fruits & vegetables
                </ParaEle>
            </DetailsItem>
            <DetailsItem>
            <SpanEle>
                    Shipping date
                </SpanEle>
                <ParaEle>
                Thu, Feb 10
                </ParaEle>
            </DetailsItem>
            <DetailsItem>
            <SpanEle>
                    Total
                </SpanEle>
                <ParaEle> 
                $ 15,028.3
                </ParaEle>
            </DetailsItem>
            <DetailsItem>
            <SpanEle>
                    Category
                </SpanEle>
                <ImageEle
                src = "https://res.cloudinary.com/dxaugnoxj/image/upload/v1700886365/samples/products_wa2eet.png"
                alt = "products list"/>
            </DetailsItem>
            <DetailsItem>
            <SpanEle>
                    Department
                </SpanEle>
                <ParaEle>
                    
                300-444-678
                </ParaEle>
            </DetailsItem>
            <DetailsLastItem>
            <SpanEle>
                    Status
                </SpanEle>
                <ParaEle>
                Awaiting your approvel
                </ParaEle>
            </DetailsLastItem>
            
        </DetailsList>
    </ShippingDetailsContainer>
)

export default ShippingDetails