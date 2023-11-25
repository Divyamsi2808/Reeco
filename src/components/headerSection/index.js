import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import { HeaderContainer, CartIcon, HeaderHeading,Anchor, TabsContainer, DropdownContainer, DropdownButton, DropdownContent } from "./styled"






const HeaderSection = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderDropDown = () => (
    <DropdownContainer>
        <CartIcon/>
      <DropdownButton onClick={toggleDropdown}>
        Hello James <RiArrowDropDownLine/>
      </DropdownButton>
      <DropdownContent open={isOpen}>
        <p>
            name: James
        </p>
        <p>Email: XXXXX@gmail.com</p>
      </DropdownContent>
    </DropdownContainer>
  )

    return (
        <HeaderContainer>
            <TabsContainer>
                    <li>
                        <HeaderHeading>
                            REECO
                        </HeaderHeading>
                    </li>
                    <li>
                        <Anchor  href="">
                            Store
                        </Anchor>
                    </li>
                    <li>
                        <Anchor  href="">
                            Orders
                        </Anchor>
                    </li>
                    <li>
                        <Anchor  href="">
                            Analytics
                        </Anchor>
                    </li>
                </TabsContainer>
                {
                    renderDropDown()
                }
        </HeaderContainer>
    )
}


export default HeaderSection