import {jobsAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {JobType, UserType} from "../types/types";
import {AppStateType} from "./redux_store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AxiosResponse} from "axios";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_JOBS = 'SET_JOBS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    jobs: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOBS: {
            // @ts-ignore
            return {...state, jobs: action.jobs}
        }

        default:
            return state;
    }

}



export const followSuccess = (userId) => ({type: FOLLOW, userId});

export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});


export const setJobs = (jobs) => ({type: SET_JOBS, jobs});


export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
});


export const requestJobs = (typeOfJobs) => {

    return async (dispatch, getState) => {
        let jobsData = await jobsAPI.getAllJobs(typeOfJobs);
        dispatch(setJobs(jobsData));
    }
}

export default usersReducer;
