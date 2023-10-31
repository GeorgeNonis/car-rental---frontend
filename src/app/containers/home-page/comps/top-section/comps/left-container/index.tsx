import Button from "../../../../../../components/button";
import {
  ButtonsContainer,
  Description,
  LeftContainer,
  Slogan,
} from "../../top-section.styles";

const LeftSide = () => {
  return (
    <LeftContainer>
      <Slogan>Rent The Best Quality Car's With Us</Slogan>
      <Description>
        Always choose the best car from our local stores or order it remotely at
        the best price for you and get the best quality cars for as long as you
        like
      </Description>
      <ButtonsContainer>
        <Button>Book Your Ride</Button>
        <Button theme="filled">Sell Your Car</Button>
      </ButtonsContainer>
    </LeftContainer>
  );
};
export default LeftSide;
