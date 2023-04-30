import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../Context/CartContext";

export default function Header() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  return (
    <HeaderStyle>
      <Wrapper>
        <h1 onClick={() => navigate("/")}>The Gilded Emporium</h1>
        <SearchArea>
          <GiHamburgerMenu size={30} cursor="pointer" />
          <InputWrapper>
            <input type="text" placeholder="Pesquisar" />
            <span>
              <FiSearch size={25} position="absolute" />
            </span>
          </InputWrapper>
        </SearchArea>
        <ClientArea>
          <Auth>
            <IoPersonOutline size={25} cursor="pointer" />
            <AuthText>
              {authContext.token ? (
                <>
                  <p>Olá, {authContext.name}</p>
                  <div style={{ cursor: "pointer" }}>Minha conta</div>
                </>
              ) : (
                <>
                  <p>Olá, Anônimo(a)</p>
                  <div>
                    <Link to="/login">Entrar</Link>/
                    <Link to="/cadastro">Cadastro</Link>
                  </div>
                </>
              )}
            </AuthText>
          </Auth>
          <Cart cursor="pointer" onClick={() => navigate("/carrinho")}>
            <BsCart size={25} />
            {cart && <p>{cart.length}</p>}
          </Cart>
        </ClientArea>
      </Wrapper>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400&family=Raleway:wght@400;500;700&display=swap");
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 999;
  font-family: "Raleway";
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  h1 {
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    line-height: 25px;
    cursor: pointer;
    width: 21%;
  }
`;

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  width: 39%;
`;
const InputWrapper = styled.div`
  position: relative;
  margin-right: 20px;
  width: 100%;
  input {
    width: 100%;
    padding: 15px;
    padding-right: 51px;
    background: #d9d9d9;
    border: 1px solid #c1c1c1;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-left: 10px;
    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      align-items: center;
      text-align: center;
      color: #7b7b7b;
    }
    &:focus {
      outline: 1px solid gray;
    }
  }
  span {
    position: absolute;
    top: 53%;
    right: 5px;
    transform: translate(-50%, -50%);
    color: #7b7b7b;
    cursor: pointer;
  }
`;

const ClientArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 21%;
  margin-right: 25px;
`;

const Auth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  a {
    font-family: "Raleway";
    color: #0c0404;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;
const AuthText = styled.div`
  width: 135px;
  max-width: 135px;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  position: relative;
  p {
    overflow-x: hidden;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #0c0404;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Cart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 25px;

  p {
    position: absolute;
    bottom: -5px;
    left: -16px;
    background: #39f053;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 21px;
    height: 21px;
    border-radius: 50%;
    font-size: 15px;
    font-weight: 500;
    margin-left: 5px;
    line-height: 18px;
  }
`;
