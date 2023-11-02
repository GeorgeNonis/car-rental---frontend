import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CarContainer,
  CarDetail,
  CarDetailsContainer,
  CarInfo,
  CarName,
  CarThumbnail,
  DailyPrice,
  MonthlyPrice,
  PricesContainer,
  RentButton,
  Seperator,
  SmallIcon,
  SmallText,
} from "./car.styles";
import { CarProps } from "./car.types";
import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Car = ({
  source,
  name,
  dailyPrice,
  monthlyPrice,
  gas,
  gearType,
  mileage,
}: CarProps) => {
  const carDetails = [
    { icon: faTachometerAlt, info: mileage },
    { icon: faEllipsisH, info: gearType },
    { icon: faFillDrip, info: gas },
  ].map(({ icon, info }) => {
    return (
      <CarDetail>
        <SmallIcon>
          <FontAwesomeIcon icon={icon} />
        </SmallIcon>
        <CarInfo>{info}</CarInfo>
      </CarDetail>
    );
  });
  return (
    <CarContainer>
      <CarThumbnail>
        <img src={source} alt="car" />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrice>
          $ {dailyPrice}
          <SmallText>/day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          $ {monthlyPrice} <SmallText>/month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Seperator />
      <CarDetailsContainer>{carDetails}</CarDetailsContainer>
      <RentButton>Rent now</RentButton>
    </CarContainer>
  );
};
export default Car;
