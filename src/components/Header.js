import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1 onClick={() => navigate("/")}>The Gilded Emporium</h1>
      <SearchArea>
        <GiHamburgerMenu size={30} />
        <input type="text" placeholder="Pesquisar" />
        <span>
          <FiSearch size={25} />
        </span>
      </SearchArea>
      <ClientArea>
        <Auth>
          <IoPersonOutline size={25} />
          {authContext.token ? (
            <p>
              Olá, <br /> {authContext.name}
            </p>
          ) : (
            <p>
              Minha conta <br /> <Link to="/login">Entrar</Link>/
              <Link to="/cadastro">Cadastro</Link>
            </p>
          )}
        </Auth>
        <Cart>
          <BsCart size={25} />
          <p>
            Seu carrinho <br /> está vazio
          </p>
        </Cart>
      </ClientArea>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400&family=Raleway:wght@400;500;700&display=swap");

  background-color: #eeeeee;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  color: #0c0404;
  width: 100%;
  height: 20%;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid #777;

  h1 {
    font-size: 25px;
    padding: 0;
    margin: 2.5rem 1.5rem;
    line-height: 25px;
    width: auto;
    cursor: pointer;
  }
`;

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;

  input {
    font-size: 15px;
    padding: 1rem;
    margin: 2.5rem;
    border-radius: 12px;
    outline: none;
    width: 400px;
    height: 15px;
    text-align: center;
    align-items: center;
    border: 1px solid transparent;
    background-color: #d3d3d3;
  }

  span {
    display: flex;
    position: relative;
    right: 5rem;
    z-index: 1;
  }
`;

const ClientArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
`;

const Auth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    font-size: 15px;
    font-weight: 500;
    margin-left: 5px;
    line-height: 18px;
  }

  a {
    color: #0c0404;
    text-decoration: none;
  }

  a::visited {
    color: #777;
  }
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 25px;

  p {
    font-size: 15px;
    font-weight: 500;
    margin-left: 5px;
    line-height: 18px;
  }
`;
