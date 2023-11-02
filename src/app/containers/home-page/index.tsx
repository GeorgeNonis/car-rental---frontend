import BookCard from "../../components/book-card";
import BookingSteps from "../../components/booking-steps";
import { Marginer } from "../../components/marginer";
import Navbar from "../../components/navbar";
import AboutUs from "./comps/about-us";
import TopCars from "./comps/top-cars";
import TopSection from "./comps/top-section";
import { PageContainer } from "./home-page.styles";

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin={"4em"} />
      <BookCard />
      <Marginer direction="vertical" margin={"8em"} />
      <BookingSteps />
      <Marginer direction="vertical" margin={"8em"} />
      <AboutUs />
      <Marginer direction="vertical" margin={"8em"} />
      <TopCars />
    </PageContainer>
  );
};
export default HomePage;
