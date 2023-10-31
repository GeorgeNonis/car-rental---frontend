import CarLogo from "../../../assets/images/car-logo.png";
import { Image, LogoContainer, LogoText } from "./logo.styles";

const Logo = () => {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogo} alt="car logo" />
      </Image>
      <LogoText>Yourcar.</LogoText>
    </LogoContainer>
  );
};
export default Logo;
