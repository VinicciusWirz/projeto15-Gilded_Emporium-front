import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import GlobalStyle from "./assets/css/GlobalStyle";
import ResetStyle from "./assets/css/ResetStyle";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <AuthProvider>
        <PagesContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/login" element={<SignIn />} />
            </Routes>
          </BrowserRouter>
        </PagesContainer>
      </AuthProvider>
    </>
  );
}

const PagesContainer = styled.main`
  background: #fafafa;
  padding-top: 10%;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

export default App;
