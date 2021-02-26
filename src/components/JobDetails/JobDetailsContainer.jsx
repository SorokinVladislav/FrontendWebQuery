import React from "react";
import {requestJobDetails, requestJobs} from "../../redux/jobs_reducer";
import {connect} from 'react-redux';
import JobDetails from "./JobDetails";
import {compose} from "redux";
import {getAllJobDetails} from "../../redux/users_selectors";
import {MdlpAPI, reportsAPI} from "../../api/api";
import {Link} from "react-router-dom";


class JobDetailsContainer extends React.Component <> {


    componentDidMount() {
        this.props.getJobDetail(this.props.match.params.jobid);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.jobid !== prevProps.match.params.jobid) {
            this.props.getJobDetail(this.props.match.params.jobid);
        }
    }


    render() {
        return <>
            <JobDetails request10311_10300={request10311_10300}
                        response10311_10300={response10311_10300}
                        mapReport={mapReport}
                        jobdetails={this.props.jobdetails} props={this.props}/>
        </>
    }
}


let request10311_10300 = (docid) => {
    MdlpAPI.getRequest10311_10300(docid).then((response) => {
            downloadFile(response, "request");
        }
    )
}

let response10311_10300 = (docid) => {
    MdlpAPI.getResponse10311_10300(docid).then((response) => {
            downloadFile(response, "response");
        }
    )
}

let mapReport = (jobId) => {
    reportsAPI.getMapReport(jobId).then((response) => {
        debugger
            downloadFile(response, `Map_Report_JobID-${jobId}.xlsx`);

        }
    )
}


let downloadFile = (response, name) => {
    let blob = new Blob([response.data], {type: ('Content-Type')});
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${name}`;
    link.click();
}


let mapStateToProps = (state) => {
    return {
        // jobid: state.usersPage.jobid,
        jobdetails: getAllJobDetails(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getJobDetail: requestJobDetails
        })
)(JobDetailsContainer);

