import React from "react";
import {requestJobs} from "../../redux/jobs_reducer";
import {connect} from 'react-redux';
import Jobs from "./Jobs";
import {compose} from "redux";
import {getAllJobs} from "../../redux/users_selectors";


class AllJobsContainer extends React.Component <>{

    componentDidMount() {
       this.props.getJobs(this.props.filter);
    }

    render() {
        return <>
            <Jobs jobs={this.props.jobs}  />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        jobs: getAllJobs(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
             getJobs: requestJobs})
)(AllJobsContainer);

