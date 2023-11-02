import {
  AboutUsContainer,
  CarContainer,
  InfoContainer,
  InfoText,
  Title,
} from "./about-us.styles";
import Jeep from "../../../../../assets/images/jeep.png";
import { aboutUsText, aboutUsTitle } from "../../../../../config";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={Jeep} alt="Jeep" />
      </CarContainer>
      <InfoContainer>
        <Title>{aboutUsTitle}</Title>
        <InfoText>{aboutUsText}</InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};
export default AboutUs;
