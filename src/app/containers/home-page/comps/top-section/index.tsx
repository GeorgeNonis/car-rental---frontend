import {
  BlobContainer,
  Description,
  LeftContainer,
  RightContainer,
  Slogan,
  StandAloneCar,
  TopSectionContainer,
} from "./top-section.styles";
import McLaren from "../../../../../assets/images/mclaren-orange-big.png";
import Blob from "../../../../../assets/images/blob.svg";

const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Quality Car's With Us</Slogan>
        <Description>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like
        </Description>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={Blob} alt="blob svg" />
        </BlobContainer>
        <StandAloneCar>
          <img src={McLaren} alt="mclaren img" />
        </StandAloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
};
export default TopSection;
