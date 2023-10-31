import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CardContainer,
  Icon,
  ItemContainer,
  LineSeperator,
  Name,
} from "./book-card.styles";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Marginer } from "../marginer";
import Button from "../button";

const BookCard = () => {
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Pick Up Date</Name>
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Return Date</Name>
      </ItemContainer>
      <Marginer direction="horizontal" margin={"2em"} />
      <Button>Book Your Ride</Button>
    </CardContainer>
  );
};
export default BookCard;
