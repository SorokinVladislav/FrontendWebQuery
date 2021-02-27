import axios from "axios";
import FormData from "form-data";


const instance = axios.create({

    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b1056f8e-5782-4993-9e7b-ed38d6cd308e"
    },
});

const jobInstance = axios.create({
    baseURL: "http://localhost:8080/",
});


export const MdlpAPI = {

    getRequest10311_10300(docid) {
        return jobInstance.get(`getrequestfrom10311/${docid}`, {
            responseType: 'blob',
        }).then(response => {
            return response;
        })
    },

    getResponse10311_10300(docid) {
        return jobInstance.get(`getresponsefrom10311/${docid}`, {
            responseType: 'blob',
        }).then(response => {
            return response;
        })
    },

    getReportResponse(docid) {
        return jobInstance.get(`getresponse/${docid}`, {
            responseType: 'blob',
        }).then(response => {
            return response;
        })
    },

    getReportRequest(docid) {
        return jobInstance.get(`getrequest/${docid}`, {
            responseType: 'blob',
        }).then(response => {
            return response;
        })
    },
}


export const reportsAPI = {

    getMapReport(jobid) {
        return jobInstance.get(`jobs/${jobid}/mapreport`, {
            responseType: 'blob',
        }).then(response => {
            return response;
        })
    },
    getDetailedJob(jobid) {
        return jobInstance.get(`jobs/${jobid}/detailedjob`, {
            responseType: 'blob',
        }).then(response => {
            return response;
        })
    },
    getMdlpCount(jobid) {
        return jobInstance.get(`jobs/${jobid}/mdlpcount`).then(response => {
            return response;
        })
    },
    getTWCount(jobid) {
        return jobInstance.get(`jobs/${jobid}/tracewaycount`).then(response => {
            return response;
        })
    },
    sendMessageToMDLPAPI(document_id, document_receipt) {
        const sendMessageToMDLPInstance = axios.create({
            baseURL: "http://localhost:8080/",
            params: {document_id, document_receipt}
        });
        return sendMessageToMDLPInstance.post(`jobs/sendmessagetomdlp`).then(response => {
            return response;
        })
    },

}


export const jobsAPI = {
    getAllJobs(typeOfJobs, value) {
        debugger
        switch (typeOfJobs) {
            case "allJobs": {
                return jobInstance.get("jobs").then(response => {
                    return response.data;
                })
            }
            case "closedJobs": {
                return jobInstance.get("closed").then(response => {
                    return response.data;
                })
            }
            case "suspendJobs": {
                return jobInstance.get("suspend").then(response => {
                    return response.data;
                })
            }
            case "codeswaiting": {
                return jobInstance.get("codeswaiting").then(response => {
                    return response.data;
                })
            }

            case "batch": {
                return jobInstance.get(`batch?batch=${value}`).then(response => {
                    debugger
                    return response.data;
                })
            }
            case "jobid": {
                return jobInstance.get(`jobid?jobid=${value}`).then(response => {
                    return response.data;
                })
            }
            case "jobName": {
                return jobInstance.get(`jobname?jobname=${value}`).then(response => {
                    return response.data;
                })
            }
        }
    },
    getJobDetails(jobid) {
        return jobInstance.get(`jobs/${jobid}`).then(response => {
            return response.data;
        })
    },

    getSuzAPI() {
        return jobInstance.get(`suz`).then(response => {
            return response.data;
        })
    },
    getReportDetails(jobid, xmltype) {
        return jobInstance.get(`jobs/${jobid}/${xmltype}`).then(response => {
            return response.data;
        })
    },
    getAllMistakes() {
        return jobInstance.get("mistakes").then(response => {
            return response.data;
        })
    },

    setRejectJob(jobid) {
        return jobInstance.get(`jobs/${jobid}/reject`).then(response => {
            return response.data;
        })
    },

    setSuspendJob(jobid) {
        return jobInstance.get(`jobs/${jobid}/suspend`).then(response => {
            return response.data;
        })
    },

    setUIDGeneratedJob(jobid) {
        return jobInstance.get(`jobs/${jobid}/uidgenerated`).then(response => {
            return response.data;
        })
    },

    resendReportAPI(jobid, xmltype) {
        return jobInstance.get(`jobs/${jobid}/${xmltype}/resend`).then(response => {
            return response.data;
        })
    },

    setReportStatus7API(jobid, xmltype) {
        return jobInstance.get(`jobs/${jobid}/${xmltype}/status7`).then(response => {
            return response.data;
        })
    },

    resendReport9151API(jobid, xmltype) {
        return jobInstance.get(`jobs/${jobid}/${xmltype}/resend9151`).then(response => {
            return response.data;
        })
    },


}

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },


    follow(userId) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn("obsolete method.")
        return profileAPI.getProfile(userId);
    },
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}

