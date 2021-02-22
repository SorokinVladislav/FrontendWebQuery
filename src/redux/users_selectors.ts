import {AppStateType} from "./redux_store";
import {createSelector} from "reselect";

/*const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users;
}*/

const getJobsSelector = (state: AppStateType) => {
    return state.usersPage.jobs;
}

const getMistakesSelector = (state: AppStateType) => {
    return state.usersPage.mistakes;
}

const getJobDetailsSelector = (state: AppStateType) => {
    return state.usersPage.jobdetails;
}

const getReportDetailsSelector = (state: AppStateType) => {
    return state.usersPage.reportdetails;
}

/*export const getAllUsers = createSelector(getUsersSelector,
    (users) =>{
        return users.filter(u => true);

})*/

export const getPageSize = (state: AppStateType) =>{
    return state.usersPage.pageSize;
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

export const getAllReportDetails = createSelector(getJobDetailsSelector,
    (reportdetails) =>{
        return reportdetails.filter(() => true);
    })


export const getTotalUsersCount = (state: AppStateType) =>{
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: AppStateType) =>{
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: AppStateType) =>{
    return state.usersPage.isFetching;
}



