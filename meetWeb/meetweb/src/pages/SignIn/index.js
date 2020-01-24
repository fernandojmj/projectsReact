import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { signInRequest } from "~/store/modules/auth/actions";

// import { Container } from './styles';
import logo from "~/assets/logo.png";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail invalido")
    .required("E-mail obrigatorio"),
  password: Yup.string().required("Senha obrigatória")
});

export default function SignIn() {
  const dispacth = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    const { email, password } = data;
    dispacth(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Go Barber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail"></Input>
        <Input
          name="password"
          type="password"
          placeholder="senha secreta"
        ></Input>
        <button type="submit">{loading ? "carregando..." : "entrar"}</button>
        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
