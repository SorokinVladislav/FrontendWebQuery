import React from "react";
import {requestJobDetails, requestJobs} from "../../redux/jobs_reducer";
import {connect} from 'react-redux';
import JobDetails from "./JobDetails";
import {compose} from "redux";
import {getAllJobDetails} from "../../redux/users_selectors";


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
            <JobDetails jobdetails={this.props.jobdetails} props={this.props}/>
        </>
    }
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

