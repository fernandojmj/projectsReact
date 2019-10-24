import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';
import logo from "~/assets/logo.png";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail invalido")
    .required("E-mail obrigatorio"),
  password: Yup.string()
    .min(4, "Senha dever ter o minimo de 4 caracteres")
    .required("Senha obrigatória"),
  name: Yup.string().required("Nome Completo obrigatório")
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Go Barber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo"></Input>
        <Input name="email" type="email" placeholder="Seu e-mail"></Input>
        <Input
          name="password"
          type="password"
          placeholder="senha secreta"
        ></Input>
        <button type="submit">Acessar</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
