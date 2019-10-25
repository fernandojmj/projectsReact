import { all, takeLatest, call, put } from "redux-saga/effects";

import history from "~/services/history";

import { signInSuccess } from "./actions";

export function* signIn({ payload }) {
  const { email, password } = payload;
  // const response = ''; //chamar a api

  const token = "asdasdasdasda";
  const user = " Fernando";

  console.tron.log("Entrou no signIn");
  yield put(signInSuccess(token, user));

  history.push("/dashboard");
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
