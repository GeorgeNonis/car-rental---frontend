import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../logo";
import {
  AboutContainer,
  AboutText,
  BottomContainer,
  CopyrightText,
  FooterContainer,
  HeaderTitle,
  HorizontalContainer,
  InnerContainer,
  LinksList,
  ListItem,
  RedIcon,
  SectionContainer,
  SmallText,
} from "./footer.styles";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const ourLinks = ["Home", "ABout Us", "Services", "Models", "Blog"].map(
    (link) => <ListItem>{link}</ListItem>
  );
  const otherLinks = [
    "FAQ",
    "Contact Us",
    "Support",
    "Privacy Policy",
    "Terms & Conditions",
  ].map((link) => <ListItem>{link}</ListItem>);
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Yourcar is a Car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>{ourLinks}</LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>{otherLinks}</LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+91 555-234-8469</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
};
export default Footer;
