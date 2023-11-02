import { useState } from "react";
import Car from "../../../../components/car";
import { CarProps } from "../../../../components/car/car.types";
import { CarsContainer, Title, TopCarsContainer } from "./top-cars.styles";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../../components/responsive";

const testCar: CarProps = {
  name: "Audi S3 Car",
  mileage: "10k",
  source: "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
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

const cars = [testCar, testCar2, testCar, testCar2, testCar, testCar2];

const TopCars = () => {
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals.</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={[
            <Car {...testCar} />,
            <Car {...testCar2} />,
            <Car {...testCar} />,
            <Car {...testCar2} />,
          ]}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
};
export default TopCars;
