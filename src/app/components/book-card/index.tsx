import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CardContainer,
  DateCalendar,
  Icon,
  ItemContainer,
  LineSeperator,
  Name,
  SmallIcon,
} from "./book-card.styles";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { Marginer } from "../marginer";
import Button from "../button";
import "react-calendar/dist/Calendar.css";

const BookCard = () => {
  // State
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  // Handlers
  const toggleStartCalendar = () => {
    if (isReturnCalendarOpen) {
      setReturnCalendarOpen(!isReturnCalendarOpen);
    }
    setStartCalendarOpen(!isStartCalendarOpen);
  };
  const toggleReturnCalendar = () => {
    if (isStartCalendarOpen) {
      setStartCalendarOpen(!isStartCalendarOpen);
    }
    setReturnCalendarOpen(!isReturnCalendarOpen);
  };

  // Comps

  const startCalendar = isStartCalendarOpen && (
    <DateCalendar value={startDate} onChange={setStartDate as any} />
  );

  const startCalendarIcon = isStartCalendarOpen ? faCaretDown : faCaretUp;

  const returnCalendar = isReturnCalendarOpen && (
    <DateCalendar value={returnDate} onChange={setReturnDate as any} />
  );
  const returnCalendarIcon = isReturnCalendarOpen ? faCaretDown : faCaretUp;

  return (
    <CardContainer>
      <ItemContainer onClick={toggleStartCalendar}>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon icon={startCalendarIcon} />
        </SmallIcon>
        {startCalendar}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer onClick={toggleReturnCalendar}>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon icon={returnCalendarIcon} />
        </SmallIcon>
        {returnCalendar}
      </ItemContainer>
      <Marginer direction="horizontal" margin={"2em"} />
      <Button>Book Your Ride</Button>
    </CardContainer>
  );
};
export default BookCard;
