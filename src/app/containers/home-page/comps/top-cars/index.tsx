import Car from "../../../../components/car";
import { CarProps } from "../../../../components/car/car.types";
import { CarsContainer, Title, TopCarsContainer } from "./top-cars.styles";

const TopCars = () => {
  const testCar: CarProps = {
    name: "Audi S3 Car",
    mileage: "10k",
    source:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: "70",
    monthlyPrice: "1600",
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: CarProps = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    source: "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: "50",
    monthlyPrice: "1500",
    gearType: "Auto",
    gas: "Petrol",
  };

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals.</Title>
      <CarsContainer>
        <Car {...testCar} />
        <Car {...testCar2} />
      </CarsContainer>
    </TopCarsContainer>
  );
};
export default TopCars;
