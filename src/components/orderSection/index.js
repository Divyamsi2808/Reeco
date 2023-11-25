import { FaAngleRight } from "react-icons/fa6";

import {OrderContainer,
     OrderPara, 
     AnchorEle,
     OrderApprovalContainer,
      OrderHeading,
       ApprovalButtons,
       ButtonEle,
       ApprovalButton,
    } from "./styled"









const OrderSection = () => (
    <OrderContainer>
        <OrderPara>
            Orders <FaAngleRight/>
            <AnchorEle href="">
                Order 32457ABC
            </AnchorEle>
        </OrderPara>
        <OrderApprovalContainer>
            <OrderHeading>
                Order 32457ABC
            </OrderHeading>
            <ApprovalButtons>
                <ButtonEle type = "button">
                    Back
                </ButtonEle>
                <ApprovalButton type = "button">
                    Approve order
                </ApprovalButton>
            </ApprovalButtons>
        </OrderApprovalContainer>
    </OrderContainer>
)

export default OrderSection