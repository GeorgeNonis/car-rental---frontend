import BookCard from "../../components/book-card";
import Navbar from "../../components/navbar";
import TopSection from "./comps/top-section";
import { PageContainer } from "./home-page.styles";

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <BookCard />
    </PageContainer>
  );
};
export default HomePage;
