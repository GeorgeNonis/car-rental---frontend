import CarLogo from "../../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";
import { Image, LogoContainer, LogoText } from "./logo.styles";
import { LogoProps } from "./logo.types";

const Logo = ({ color, bgColor }: LogoProps) => {
  return (
    <LogoContainer>
      <Image>
        <img
          src={bgColor === "dark" ? CarLogoDarkImg : CarLogo}
          alt="car logo"
        />
      </Image>
      <LogoText color={color || "dark"}>Yourcar.</LogoText>
    </LogoContainer>
  );
};
export default Logo;
