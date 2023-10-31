import Navbar from "../../components/navbar";
import TopSection from "./comps/top-section";
import { PageContainer } from "./home-page.styles";

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
    </PageContainer>
  );
};
export default HomePage;
