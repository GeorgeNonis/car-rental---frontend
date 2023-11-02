import {
  HeaderTitle,
  LinksList,
  ListItem,
  SectionContainer,
} from "../../footer.styles";
import { LinksContainerProps } from "./links-container.types";

const LinksContainer = ({ links, title }: LinksContainerProps) => {
  const mappedLinks = links.map((link) => (
    <ListItem>
      <a href="#">{link}</a>
    </ListItem>
  ));
  return (
    <SectionContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <LinksList>{mappedLinks}</LinksList>
    </SectionContainer>
  );
};
export default LinksContainer;
