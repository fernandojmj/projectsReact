export function signInRequest(email, password) {
  console.tron.log("Chamou action");
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password }
  };
}

export function signInSuccess(token, user) {
  console.tron.log(token);
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token, user }
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_FAILURE"
  };
}
