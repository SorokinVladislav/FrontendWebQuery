import {AppStateType} from "./redux_store";
import {createSelector} from "reselect";

const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users;
}

const getJobsSelector = (state: AppStateType) => {
    return state.usersPage.jobs;
}




export const getAllUsers = createSelector(getUsersSelector,
    (users) =>{
        return users.filter(u => true);

})

export const getPageSize = (state: AppStateType) =>{
    return state.usersPage.pageSize;
}


export const getAllJobs = createSelector(getJobsSelector,
    (jobs) =>{
        return jobs.filter(() => true);
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



