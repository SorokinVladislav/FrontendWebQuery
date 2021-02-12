import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";
import {AppStateType} from "./redux_store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> //array of users id
}

type InitialStateType = typeof initialState;

export const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS: {
            // @ts-ignore
            return {...state, users: action.users}

        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}

        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }

}

type ActionTypes = FollowSuccessCreatorType | UnFollowSuccessCreatorType | SetUsersCreatorType |
    SetCurrentPageCreatorType | SetTotalUsersCountCreatorType | ToggleIsFetchingCreatorType
    | ToggleFollowingProgressCreatorType;

type FollowSuccessCreatorType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessCreatorType => ({type: FOLLOW, userId});
type UnFollowSuccessCreatorType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnFollowSuccessCreatorType => ({type: UNFOLLOW, userId});

type SetUsersCreatorType = {
    type: typeof SET_USERS
    users: Array<UserType> | string
}
export const setUsers = (users: string): SetUsersCreatorType => ({type: SET_USERS, users});
type SetCurrentPageCreatorType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageCreatorType => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
type SetTotalUsersCountCreatorType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountCreatorType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
});
type ToggleIsFetchingCreatorType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingCreatorType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
type ToggleFollowingProgressCreatorType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressCreatorType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

type getStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionTypes>;

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch: DispatchType, getState: getStateType) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number,
                                   apiMethod: any, actionCreator: (userId:number) => FollowSuccessCreatorType | UnFollowSuccessCreatorType ) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch: any) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;