import { auth, provider } from "../components/firebase.js";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log(payload.user);
        dispatch(setUser(payload.user));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChange(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}