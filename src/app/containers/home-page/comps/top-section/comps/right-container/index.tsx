import McLaren from "../../../../../../../assets/images/mclaren-orange-big.png";
import Blob from "../../../../../../../assets/images/blob.svg";
import {
  BlobContainer,
  RightContainer,
  StandAloneCar,
} from "../../top-section.styles";

const RightSide = () => {
  return (
    <RightContainer>
      <BlobContainer>
        <img src={Blob} alt="blob svg" />
      </BlobContainer>
      <StandAloneCar>
        <img src={McLaren} alt="mclaren img" />
      </StandAloneCar>
    </RightContainer>
  );
};
export default RightSide;
