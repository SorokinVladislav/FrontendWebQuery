import React from "react";
import {
    requestJobDetails,
    requestMDLPCount,
    requestRejectJob,
    requestSuspendJob,
    requestTWCount,
    requestUIDGeneratedJob
} from "../../redux/jobs_reducer";
import {connect} from 'react-redux';
import JobDetails from "./JobDetails";
import {compose} from "redux";
import {getAllJobDetails, getJobStatus} from "../../redux/users_selectors";
import {MdlpAPI, reportsAPI} from "../../api/api";
import {saveAs} from 'file-saver';

class JobDetailsContainer extends React.Component <> {


    componentDidMount() {
        this.props.getJobDetail(this.props.match.params.jobid);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.jobstatus !== prevProps.jobstatus) {
            this.props.getJobDetail(this.props.match.params.jobid);
        }
    }

    render() {
            return <>
                <JobDetails request10311_10300={request10311_10300}
                            response10311_10300={response10311_10300}
                            mapReport={mapReport}
                            detailedJob={detailedJob}
                            jobdetails={this.props.jobdetails}
                            mdlpcount={this.props.mdlpcount}
                            twcount={this.props.twcount}
                            props={this.props}
                />
            </>
    }
}

let request10311_10300 = (docid) => {
    MdlpAPI.getRequest10311_10300(docid).then((response) => {
            saveAs(response.data, `${docid}_request.txt`);
        }
    )
}

let response10311_10300 = (docid) => {
    MdlpAPI.getResponse10311_10300(docid).then((response) => {
            saveAs(response.data, `${docid}_response.txt`);
        }
    )
}


let mapReport = (jobId) => {
    reportsAPI.getMapReport(jobId).then((response) => {
        saveAs(response.data, `MapReport-${jobId}.xlsx`);
    })
}

let detailedJob = (jobId) => {
    reportsAPI.getDetailedJob(jobId).then((response) => {
        saveAs(response.data, `DetailedJob-${jobId}.xlsx`);
    })
}

let mapStateToProps = (state) => {
    return {
        jobdetails: getAllJobDetails(state),
        mdlpcount: state.usersPage.mdlpcount,
        twcount: state.usersPage.twcount,
        jobstatus: getJobStatus(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getCountMDLP: requestMDLPCount,
            getCountTW: requestTWCount,
            getJobDetail: requestJobDetails,
            getUIDGeneratedJob: requestUIDGeneratedJob,
            getRejectJob: requestRejectJob,
            getSuspendJob: requestSuspendJob,


        })
)(JobDetailsContainer);

