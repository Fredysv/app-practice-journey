import firebase from "firebase";
import "firebase/firestore";
import { USER_STATE_CHANGE } from "../constants/index";

export function fetchUser() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          console.log(snapshot.data);
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
        } else {
          console.log("does not exists");
        }
      });
  };
}
export function getSesion() {
  return (dispatch) => {
    dispatch({
      type: "SESION_LOADING_STATUS",
      payload: true,
    });

    firebase
      .database()
      .ref("/sesion")
      .on("value", (snapshot) => {
        dispatch({
          type: "SESION_FETCH",
          payload: snapshot.val(),
        });

        dispatch({
          type: "SESION_LOADING_STATUS",
          payload: false,
        });
      });
  };
}

export function postSesion(objetivos, notas, logros, mejoras, fecha) {
  return (dispatch) => {
    firebase
      .database()
      .ref("/sesion")
      .push({ objetivos, notas, logros, mejoras, fecha });
  };
}

export function deleteSesion(key) {
  return (dispatch) => {
    firebase.database().ref(`/sesion/${key}`).remove();
  };
}

export function editSesion(objetivos, notas, logros, mejoras, fecha, key) {
  return (dispatch) => {
    firebase
      .database()
      .ref(`/sesion`)
      .child(key)
      .update({ objetivos, notas, logros, mejoras, fecha });
  };
}
