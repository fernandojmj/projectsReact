import { all, takeLatest, call, put } from "redux-saga/effects";

import history from "~/services/history";
import api from "~/services/api";
import { signInSuccess, signFailure } from "./actions";
import { toast } from "react-toastify";

export function* signIn({ payload }) {
  const { email, password } = payload;
  console.tron.log(email);
  console.tron.log(password);
  //chamando a API para realizar autenticação
  try {
    const response = yield call(api.post, "sessions", payload);

    const { token, user } = response.data;
    console.tron.log("Entrou no signIn");
    console.tron.log(user);
    api.defaults.headers.Authorization = `Bearer ${token.token}`;
    yield put(signInSuccess(token, user));

    history.push("/dashboard");
  } catch (error) {
    toast.error("Falha na autenticação!");
    yield put(signFailure());
  }
}

export function* signup({ payload }) {
  try {
    console.tron.log("Cadastranto usuario..");
    yield call(api.post, "users", payload);
    toast.success("Cadastrado com sucesso!");
    history.push("/");
  } catch (error) {
    toast.error("Falha no cadastro. Tente mais tarde!");
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  console.tron.log("ENTROU REHYDRATE ");
  if (!payload) return;

  const { token } = payload.auth;
  const objToken = token;

  if (objToken) {
    console.tron.log(objToken.token);
    console.tron.log("adicionou token headers ");
    api.defaults.headers.Authorization = `Bearer ${objToken.token}`;
    console.tron.log(objToken.token);
  }
}

export function signOut() {
  api.defaults.headers.Authorization = ``;
  history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signup),
  takeLatest("@auth/SIGN_OUT", signOut)
]);
