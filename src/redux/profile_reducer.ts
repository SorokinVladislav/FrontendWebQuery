import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'ADD-DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 12},
        {id: 3, message: 'It\'s my first post', likesCount: 12},
        {id: 4, message: 'Sasha', likesCount: 12},
        {id: 5, message: 'Dimych', likesCount: 12},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    newPostText: ""
}

export type InitialStateType = typeof initialState;

export const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {

            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: 6,
                        message: action.newPostText,
                        likesCount: 0
                    }],
                newPostText: ''
            }
        }
        case DELETE_POST: {

            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }

        case SET_STATUS: {
            return {...state, status: action.status}
        }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state;
    }
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}



export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText});
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
type SetStatusCreatorType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string):SetStatusCreatorType => ({type: SET_STATUS, status});
type DeletePostCreatorType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostCreatorType => ({type: DELETE_POST, postId});
type SavePhotoSuccessCreatorType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType):SavePhotoSuccessCreatorType => ({type: SAVE_PHOTO_SUCCESS, photos});


export const getStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(status);
    dispatch(setStatus(response.data));
};

export const savePhoto = (file: string) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    let userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0]);
    }
};


export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0)
        dispatch(setStatus(status));
};

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export default profileReducer;