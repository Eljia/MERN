import {
  LOGIN_USER_SUCCESS,
  AUTH_FAIL,
  SETLOADING,
  LOGOUT,
  GETAUTHUSER,
} from "../const";
import axios from "axios";

// login
export const login = (formData) => async (dispatch) => {
  dispatch({
    type: SETLOADING,
  });
  try {
    let { data } = await axios.post("/auth/login", formData);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data, // token , user
    });
  } catch (error) {
    console.dir(error);
    const res = error.response.data;
    if (Array.isArray(res)) {
      res.forEach((elt) => {
        alert(elt.msg);
      });
    }

    dispatch({
      type: AUTH_FAIL,
    });
  }
};
//logout
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
//GET auth user

export const getAuthUser = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const { data } = await axios.get("/auth/me", config);
    dispatch({
      type: GETAUTHUSER,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
    });
  }
};
