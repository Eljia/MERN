import {
  LOGIN_USER_SUCCESS,
  AUTH_FAIL,
  SETLOADING,
  LOGOUT,
  GETAUTHUSER,
} from "../const/index";
const initialState = {
  user: null,
  token: null,
  isLoading: false,
  isAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SETLOADING:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload.user,
        token: payload.token,
      };
    case GETAUTHUSER: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload.user,
      };
    }
    case AUTH_FAIL:
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
