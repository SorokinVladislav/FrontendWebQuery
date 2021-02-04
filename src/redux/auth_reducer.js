import {authApi, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'VladkaProject/auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'VladkaProject/auth/GET_CAPTCHA_URL';


let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAPTCHA_URL:
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }


        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});


export const getCaptchaURL = (captchaURL) =>
    ({type: GET_CAPTCHA_URL, payload: {captchaURL}});


export const getAuthUserData = () => async (dispatch) => {
    let response = await authApi.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    let response = await authApi.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }  else {
        if (response.data.resultCode === 10) {
dispatch(getCaptchaThunk());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }

}

export const getCaptchaThunk = () => async (dispatch) => {
    let response = await securityAPI.getCaptcha();
    let captchaURL = response.data.url;
    dispatch(getCaptchaURL(captchaURL));


}

export const logout = () => async (dispatch) => {
    let response = await authApi.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}

export default authReducer;