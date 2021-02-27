import {jobsAPI, reportsAPI} from "../api/api";

const SET_JOBS = 'SET_JOBS';
const SET_JOBDETAILS = 'SET_JOBDETAILS';
const SET_MISTAKES = 'SET_MISTAKES';
const SET_REPORTDETAILS = 'SET_REPORTDETAILS';
const SET_MDLPCOUNT = 'SET_MDLPCOUNT';
const SET_TWCOUNT = 'SET_TWCOUNT';
const SET_JOBSTATUS = 'SET_JOBSTATUS';



let initialState = {
    jobid: null,
    jobs: [],
    jobdetails: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    mistakes: [],
    reportdetails: [],
    mdlpcount: 0,
    twcount: 0,
    jobstatus: "",
}


export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOBS: {
            // @ts-ignore
            return {...state, jobs: action.jobs}
        }
        case SET_JOBDETAILS: {
            // @ts-ignore
            return {...state, jobdetails: action.jobdetails, jobstatus: action.jobdetails[3][0].jobstatus }
        }
        case SET_MISTAKES: {
            // @ts-ignore
            return {...state, mistakes: action.mistakes}
        }
        case SET_REPORTDETAILS: {
            // @ts-ignore
            return {...state, reportdetails: action.reportdetails}
        }
        case SET_TWCOUNT: {
            // @ts-ignore
            return {...state, twcount: action.twcount}
        }
        case SET_MDLPCOUNT: {
            // @ts-ignore
            return {...state, mdlpcount: action.mdlpcount}
        }
        case SET_JOBSTATUS: {
            // @ts-ignore
            return {...state, jobstatus: action.jobstatus}
        }

        default:
            return state;
    }

}


export const setJobs = (jobs) => ({type: SET_JOBS, jobs});

export const setMistakes = (mistakes) => ({type: SET_MISTAKES, mistakes});

export const setJobDetails = (jobdetails) => ({type: SET_JOBDETAILS, jobdetails});

export const setReportDetails = (reportdetails) => ({type: SET_REPORTDETAILS, reportdetails});

export const setMDLPCount = (mdlpcount) => ({type: SET_MDLPCOUNT, mdlpcount});

export const setTWCount = (twcount) => ({type: SET_TWCOUNT, twcount});

export const setJobStatus = (jobstatus) => ({type: SET_JOBSTATUS, jobstatus});


export const requestJobs = (typeOfJobs) => {
    return async (dispatch) => {
        let jobsData = await jobsAPI.getAllJobs(typeOfJobs);
        dispatch(setJobs(jobsData));
    }
}

export const requestUIDGeneratedJob = (jobid) => {
    return async (dispatch) => {
        let jobsData = await jobsAPI.setUIDGeneratedJob(jobid);
        alert("Успешно");
        dispatch(setJobStatus("4 - Линия выделена"));
    }
}

export const requestRejectJob = (jobid) => {
    return async (dispatch) => {
        let jobsData = await jobsAPI.setRejectJob(jobid);
        alert("Успешно");
        dispatch(setJobStatus("16 - Работа отклонена"));
    }
}

export const requestSuspendJob = (jobid) => {
    return async (dispatch) => {
        let jobsData = await jobsAPI.setSuspendJob(jobid);
        alert("Успешно");
        dispatch(setJobStatus("12 - Работа приостановлена"));
    }
}



export const requestTWCount = (jobid) => {
    return async (dispatch) => {
        let jobsData = await reportsAPI.getTWCount(jobid);
        dispatch(setTWCount(jobsData.data));
    }
}

export const requestMDLPCount = (jobid) => {
    return async (dispatch) => {
        let jobsData = await reportsAPI.getMdlpCount(jobid);
        dispatch(setMDLPCount(jobsData.data));
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
        dispatch(setMDLPCount("0"));
        dispatch(setTWCount("0"));
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
