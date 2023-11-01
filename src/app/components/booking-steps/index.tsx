import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Step,
  StepContainer,
  StepDescription,
  StepIcon,
  StepTitle,
  StepsContainer,
  TitleContainer,
} from "./booking-steps.styles";
import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    icon: faMapMarkedAlt,
    title: "Choose Location",
    text: "Find the nearest Yourcar point and book your car.",
  },
  {
    icon: faCalendarAlt,
    title: "Pick-up Date",
    text: "Pickup the Best Date to rent a car for your.",
  },
  {
    icon: faCarSide,
    title: "Book your car",
    text: "Book your nice car with ease in one single click.",
  },
];

const stepsComps = steps.map(({ icon, text, title }) => {
  return (
    <StepContainer>
      <Step>
        <StepIcon>
          <FontAwesomeIcon icon={icon} />
        </StepIcon>
      </Step>
      <StepTitle>{title}</StepTitle>
      <StepDescription>{text}</StepDescription>
    </StepContainer>
  );
});

const BookingSteps = () => {
  return (
    <Container>
      <TitleContainer>Our Working Steps</TitleContainer>
      <StepsContainer>{stepsComps}</StepsContainer>
    </Container>
  );
};
export default BookingSteps;
