import { TopSectionContainer } from "./top-section.styles";
import LeftSide from "./comps/left-container";
import RightSide from "./comps/right-container";

const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftSide />
      <RightSide />
    </TopSectionContainer>
  );
};
export default TopSection;
