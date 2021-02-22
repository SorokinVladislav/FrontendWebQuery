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
const SET_JOBDETAILS = 'SET_JOBDETAILS';
const SET_MISTAKES = 'SET_MISTAKES';
const SET_REPORTDETAILS = 'SET_REPORTDETAILS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    jobid: null,
    jobs: [],
    jobdetails: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    mistakes: [],
    reportdetails: []
}


export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOBS: {
            // @ts-ignore
            return {...state, jobs: action.jobs}
        }
        case SET_JOBDETAILS: {
            // @ts-ignore
            return {...state, jobdetails: action.jobdetails}
        }
        case SET_MISTAKES: {
            // @ts-ignore
            return {...state, mistakes: action.mistakes}
        }
        case SET_REPORTDETAILS: {
            // @ts-ignore
            return {...state, reportdetails: action.reportdetails}
        }

        default:
            return state;
    }

}


export const setJobs = (jobs) => ({type: SET_JOBS, jobs});

export const setMistakes = (mistakes) => ({type: SET_MISTAKES, mistakes});

export const setJobDetails = (jobdetails) => ({type: SET_JOBDETAILS, jobdetails});

export const setReportDetails = (reportdetails) => ({type: SET_REPORTDETAILS, reportdetails});


export const requestJobs = (typeOfJobs) => {
    return async (dispatch) => {
        let jobsData = await jobsAPI.getAllJobs(typeOfJobs);
        dispatch(setJobs(jobsData));
    }
}

export const requestMistakes = () => {
    return async (dispatch) => {
        let mistakesData = await jobsAPI.getAllMistakes();
        dispatch(setMistakes(mistakesData));
    }
}

export const requestJobDetails = (jobid) => {
    return async (dispatch) => {
        let jobDetailsData = await jobsAPI.getJobDetails(jobid);
        dispatch(setJobDetails(jobDetailsData));
    }
}

export const requestReportDetails = (jobid, xmltype) => {
    return async (dispatch) => {
        let reportDetailsData = await jobsAPI.getReportDetails(jobid, xmltype);
        dispatch(setReportDetails(reportDetailsData));
    }
}

export default jobsReducer;
