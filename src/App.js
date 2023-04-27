import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </PagesContainer>
    </>
  );
}

const PagesContainer = styled.main`
  background: #FAFAFA;
  padding-top: 10%;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

export default App;
