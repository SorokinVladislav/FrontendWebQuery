import {authApi, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'VladkaProject/auth/SET_USER_DATA';


let initialState = {
    usersId: null as number | null,
    email: null as number | null,
    login: null as number | null,
    isAuth: false,
    captchaURL: null as number | null
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                userId: "fwf",
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }

}

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authApi.me();
    if (response.status === 200) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string) => async (dispatch: any) => {

    let response = await authApi.login(email, password);
debugger
    if (response.status === 200) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }

}

export const logout = () => async (dispatch: any) => {
    let response = await authApi.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}

export default authReducer;