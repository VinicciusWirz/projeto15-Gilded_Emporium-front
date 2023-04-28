import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setToken, setName } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function login(e) {
    e.preventDefault();

    const URL = process.env.REACT_APP_API_BASE_URL;
    const body = { ...form };

    if (form.email === "" || form.password === "") {
      alert("Preencha todos os campos");
    }

    try {
      const res = await axios.post(URL, body);
      setToken(res.data.token);
      setName(res.data.user.name);
      navigate("/");
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <Wrapper>
      <Container>
        <h1>Faça seu login</h1>

        <InputField>
          <p>Seu e-mail</p>
          <input
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleForm}
            name="email"
            required
          />
          <p>Sua senha</p>
          <input
            type="password"
            placeholder="Senha"
            value={form.password}
            onChange={handleForm}
            name="password"
            required
          />

          <button type="submit" onClick={login}>
            Continuar
          </button>
        </InputField>
        <Link to={"/cadastro"}>
          Ainda não tem cadastro? <br /> Clique aqui para fazer o registro
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
    text-transform: uppercase;
  }

  input::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    text-indent: 5px;
  }
`;
