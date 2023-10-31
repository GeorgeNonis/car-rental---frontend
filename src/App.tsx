import styled from "styled-components";
import "./App.css";
import tw from "twin.macro";
import HomePage from "./app/containers/home-page";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

const App = () => {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
};

export default App;
