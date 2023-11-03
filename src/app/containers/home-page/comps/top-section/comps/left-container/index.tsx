import { topSectionText, topSectionTitle } from "../../../../../../../config";
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
      <Slogan>{topSectionTitle}</Slogan>
      <Description>{topSectionText}</Description>
      <ButtonsContainer>
        <Button>Book Your Ride</Button>
        <Button theme="filled">Sell Your Car</Button>
      </ButtonsContainer>
    </LeftContainer>
  );
};
export default LeftSide;
