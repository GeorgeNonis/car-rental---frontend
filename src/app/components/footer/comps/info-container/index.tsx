import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HeaderTitle,
  HorizontalContainer,
  RedIcon,
  SectionContainer,
  SmallText,
} from "../../footer.styles";
import { InfoContainerProps } from "./info-container.types";

const InfoContainer = ({ info, title, icon }: InfoContainerProps) => {
  return (
    <SectionContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HorizontalContainer>
        <RedIcon>
          <FontAwesomeIcon icon={icon} />
        </RedIcon>
        <SmallText>{info}</SmallText>
      </HorizontalContainer>
    </SectionContainer>
  );
};
export default InfoContainer;
