import {
  AboutUsContainer,
  CarContainer,
  InfoContainer,
  InfoText,
  Title,
} from "./about-us.styles";
import Jeep from "../../../../../assets/images/jeep.png";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={Jeep} alt="Jeep" />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals.</Title>
        <InfoText>
          At Yourcar., we're here to make your car rental experience as smooth
          and enjoyable as possible. Whether you're planning a weekend getaway,
          a business trip, or need a temporary vehicle, we've got you covered.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};
export default AboutUs;
