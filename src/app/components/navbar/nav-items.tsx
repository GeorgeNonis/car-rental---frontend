import { ListContainer, NavItem } from "./styles";
import MenuWrapper from "./comps/wrapper";

const NavItemsList = ["Home", "Cars", "Services", "Contact Us"];

const NavItems = () => {
  return (
    <MenuWrapper>
      <ListContainer>
        {NavItemsList.map((item) => {
          return (
            <NavItem menu>
              <a href="#">{item}</a>
            </NavItem>
          );
        })}
      </ListContainer>
    </MenuWrapper>
  );
};
export default NavItems;
