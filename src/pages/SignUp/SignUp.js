import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();

  async function createAccount(e) {
    e.preventDefault();

    const URL = process.env.REACT_APP_API_URL;
    if (
      password !== confirmPassword ||
      password.length < 3 ||
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      if (password !== confirmPassword) {
        alert("As senhas não coincidem");
      }
      if (!password && password.length < 3) {
        alert("A senha deve ter no mínimo 3 caracteres");
      }
      if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        alert("Preencha todos os campos");
      }
      return;
    }

    try {
      await axios.post(`${URL}/sign-up`, {
        name,
        email,
        password,
        confirmPassword,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PageView>
      <Container>
        <h6>Faça seu cadastro</h6>

        <Form>
          <label>
            Seu nome
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              required
            />
          </label>
          <label>
            Seu e-mail
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />
          </label>
          <label>
            Sua senha
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
            />
          </label>
          <label>
            Confirme sua senha
            <input
              type="password"
              placeholder="Confirme a senha"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              name="confirmPassword"
              required
            />
          </label>

          <button type="submit" onClick={createAccount}>
            Cadastrar
          </button>
        </Form>
        <LinkStyle>
          <Link to={"/login"}>Já tem uma conta?</Link>
          <Link to={"/login"}>Clique aqui para fazer login</Link>
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
