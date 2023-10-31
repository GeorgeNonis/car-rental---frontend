import { useMediaQuery } from "react-responsive";
import { BurgerStyle, ListContainer, NavItem } from "../../styles";
import { slide as Menu } from "react-burger-menu";
import { SCREENS } from "../../../responsive";

const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={BurgerStyle}>
        <ListContainer>
          <NavItem menu>
            <a href="#">Home</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Cars</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Services</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Contact Us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="#">Home</a>
      </NavItem>
      <NavItem>
        <a href="#">Cars</a>
      </NavItem>
      <NavItem>
        <a href="#">Services</a>
      </NavItem>
      <NavItem>
        <a href="#">Contact Us</a>
      </NavItem>
    </ListContainer>
  );
};
export default NavItems;
