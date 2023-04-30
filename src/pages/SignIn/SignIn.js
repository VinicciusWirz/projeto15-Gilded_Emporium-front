import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import CartContext from "../../Context/CartContext";
import apiCart from "../../services/apiCart";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setToken, setName } = useContext(AuthContext);
  const { cart, setCart } = useContext(CartContext);

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function login(e) {
    e.preventDefault();

    const URL = process.env.REACT_APP_API_URL;
    const body = { ...form };

    if (form.email === "" || form.password === "") {
      alert("Preencha todos os campos");
    }

    try {
      const res = await axios.post(`${URL}/sign-in`, body);
      setToken(res.data.token);
      setName(res.data.name);
      const localData = JSON.stringify({
        token: res.data.token,
        name: res.data.name,
      });
      localStorage.setItem("auth", localData);
      if (res.data.cart.length === 0 && cart) {
        unloadCart(res.data.token);
      } else {
        const serverCart = JSON.stringify(res.data.cart);
        localStorage.setItem("sessionCart", serverCart);
        setCart(res.data.cart);
      }

      navigate("/");
    } catch (err) {
      alert(`Erro ${err.status}: ${err.response.message}`);
    }
  }

  function unloadCart(token) {
    apiCart
      .unloadCartProducts(cart, token)
      .then((res) => {
        const localData = JSON.stringify(cart);
        localStorage.setItem("sessionCart", localData);
      })
      .catch((err) => console.log(err));
  }
  return (
    <PageView>
      <Container>
        <h6>Faça seu login</h6>

        <Form>
          <label>
            Seu e-mail
            <input
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleForm}
              name="email"
              required
            />
          </label>
          <label>
            Sua senha
            <input
              type="password"
              placeholder="Senha"
              value={form.password}
              onChange={handleForm}
              name="password"
              required
            />
          </label>

          <button type="submit" onClick={login}>
            Entrar
          </button>
        </Form>
        <LinkStyle>
          <Link to={"/cadastro"}>Ainda não tem cadastro?</Link>
          <Link to={"/cadastro"}>Clique aqui para fazer seu registro</Link>
        </LinkStyle>
      </Container>
    </PageView>
  );
}

const PageView = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding-bottom: 100px;
`;

const Container = styled.div`
  background-color: #fafafa;
  padding: 51px 0px;
  box-sizing: border-box;
  width: 39%;
  min-height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(189, 189, 189, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  h6 {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #0f0f0f;
  }

  a {
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: #0047ff;
    display: flex;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  color: #000000;
  width: 100%;
  gap: 15px;

  label {
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  input {
    background: #f2f2f2;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    border: none;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    padding: 9px 11px;
    height: 53px;
    &::placeholder {
      color: #7b7b7b;
    }
    &:focus {
      outline: 1px solid #dbdbdb;
    }
  }
  button {
    width: 41%;
    height: 53px;
    border: none;
    margin-top: 30px;
    background: #90ff9c;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000000;
  }
`;
const LinkStyle = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
