import { takeLatest, all, call, put } from "redux-saga/effects";
import { updateProfileSuccess, updateProfileFailure } from "./actions";
import { toast } from "react-toastify";
import api from "~/services/api";

export function* updateProfile({ payload }) {
  // try {
  const { email, username, password_old, ...rest } = payload.data;

  const profile = Object.assign(
    { email, username, password_old },
    rest.password_old ? rest : {}
  );
  console.tron.log(profile);
  const response = yield call(api.put, "users", profile);
  toast.info("Perfil atualizado!!");

  yield put(updateProfileSuccess(response.data));
  // } catch (error) {
  //   toast.error("Ocorreu um erro na atualização do perfil!");

  //   yield put(updateProfileFailure());
  // }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
