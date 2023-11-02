import Logo from "../logo";
import {
  AboutContainer,
  AboutText,
  BottomContainer,
  CopyrightText,
  FooterContainer,
  InnerContainer,
} from "./footer.styles";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import LinksContainer from "./comps/links-container";
import InfoContainer from "./comps/info-container";
import { footerAbout, otherLinks, ourLinks } from "../../../config";

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>{footerAbout}</AboutText>
        </AboutContainer>
        <LinksContainer links={ourLinks} title="Our Links" />
        <LinksContainer links={otherLinks} title="Other Links" />
        <InfoContainer
          icon={faPhoneAlt}
          info="+91 555-234-8469"
          title="Call Now"
        />
        <InfoContainer icon={faEnvelope} info="info@yourcar.com" title="Mail" />
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
