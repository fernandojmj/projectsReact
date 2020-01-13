import { all, takeLatest, call, put } from "redux-saga/effects";

import history from "~/services/history";
import api from "~/services/api";
import { signInSuccess } from "./actions";

export function* signIn({ payload }) {
  const { email, password } = payload;
  console.log(email);
  console.log(password);
  //chamando a API para realizar autenticação
  const response = yield call(api.post, "sessions", email, password);

  const { token, user } = response.data;
  console.tron.log("Entrou no signIn");
  yield put(signInSuccess(token, user));

  history.push("/dashboard");
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
