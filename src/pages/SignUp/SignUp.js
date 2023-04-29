import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  async function createAccount(e) {
    e.preventDefault();

    const URL = process.env.REACT_APP_API_BASE_URL;

    if (
      password !== passwordConfirmation ||
      password.length < 6 ||
      name === "" ||
      email === "" ||
      password === "" ||
      passwordConfirmation === ""
    ) {
      if (password !== passwordConfirmation) {
        alert("As senhas não coincidem");
      }
      if (!password === "" && password.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres");
      }
      if (
        name === "" ||
        email === "" ||
        password === "" ||
        passwordConfirmation === ""
      ) {
        alert("Preencha todos os campos");
      }
      return;
    }

    try {
      await axios.post(`${URL}/sign-up`, { name, email, password });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Wrapper>
      <Container>
        <h1>Faça seu cadastro</h1>

        <InputField>
          <p>Seu nome</p>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            required
          />
          <p>Seu e-mail</p>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
          <p>Sua senha</p>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
          <p>Confirme sua senha</p>
          <input
            type="password"
            placeholder="Confirme a senha"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            name="passwordConfirmation"
            required
          />

          <button type="submit" onClick={createAccount}>
            Cadastrar
          </button>
        </InputField>
        <Link to={"/"}>
          Já tem uma conta? <br /> Clique aqui para fazer login
        </Link>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  overflow-y: hidden;
`;

const Container = styled.div`
  background-color: #fafafa;
  box-sizing: border-box;
  width: 500px;
  min-height: 400px;
  margin: 0 auto;
  border-radius: 2rem;
  box-shadow: 0 0 10px 0 rgba(189, 189, 189, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    padding-top: 2rem;
    color: #0f0f0f;
  }

  a {
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: #0f0f0f;
    margin-bottom: 2rem;
    margin-left: 9rem;
    width: fit-content;
    display: flex;
  }

  a:visited {
    color: #777;
  }
`;

const InputField = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 304px;
  padding-top: 2rem;
  align-items: center;

  p {
    text-align: left;
    align-self: flex-start;
    color: #0f0f0f;
    text-indent: 5px;
  }

  input,
  button {
    width: 300px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 15px;
  }

  button {
    font-size: 17px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    line-height: 14px;
    cursor: pointer;
  }

  button:hover {
    background-color: #ddd;
    letter-spacing: 3px;
  }

  input::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    text-indent: 5px;
  }
`;
