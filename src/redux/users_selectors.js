import {AppStateType} from "./redux_store";
import {createSelector} from "reselect";

const getJobsSelector = (state) => {
    return state.usersPage.jobs;
}

const getMistakesSelector = (state) => {
    return state.usersPage.mistakes;
}

const getJobDetailsSelector = (state) => {
    return state.usersPage.jobdetails;
}

const getReportDetailsSelector = (state) => {
    return state.usersPage.reportdetails;
}




export const getAllJobs = createSelector(getJobsSelector,
    (jobs) =>{
        return jobs.filter(() => true);
    })

export const getAllMistakesSelector = createSelector(getMistakesSelector,
    (mistakes) =>{
        return mistakes.filter(() => true);
    })

export const getAllJobDetails = createSelector(getJobDetailsSelector,
    (jobs) =>{
        return jobs.filter(() => true);
    })

export const getAllReportDetails = createSelector(getReportDetailsSelector,
    (reportdetails) =>{
    if(reportdetails===null)
        return null
        else
        return reportdetails.filter(() => true);
    })


export const getTotalUsersCount = (state) =>{
    return state.usersPage.totalUsersCount;
}

export const getJobStatus = (state) =>{
    return state.usersPage.jobstatus;
}





