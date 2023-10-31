import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../responsive";
import { BurgerStyle } from "../styles";

const MenuWrapper = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  return isMobile ? (
    <Menu right styles={BurgerStyle}>
      {children}
    </Menu>
  ) : (
    <>{children}</>
  );
};

export default MenuWrapper;
