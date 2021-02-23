import React from "react";
import {requestJobDetails, requestJobs, requestReportDetails} from "../../redux/jobs_reducer";
import {connect} from 'react-redux';
import ReportDetails from "./ReportDetails";
import {compose} from "redux";
import {getAllJobDetails, getAllJobs, getAllReportDetails} from "../../redux/users_selectors";


class ReportDetailsContainer extends React.Component <> {

    componentDidMount() {
            this.props.getReportDetail(this.props.match.params.jobid, this.props.match.params.xmltype);
    }

   /* componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.xmltype !== prevProps.match.params.xmltype) {
            this.props.getReportDetail(this.props.match.params.jobid, this.props.match.params.xmltype);
        }
    }
*/
    render() {
        return <>
            <ReportDetails reportdetails={this.props.reportdetails}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        reportdetails: getAllReportDetails(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getReportDetail: requestReportDetails
        })
)(ReportDetailsContainer);

