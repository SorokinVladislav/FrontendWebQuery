import React from "react";
import {requestReportDetails} from "../../redux/jobs_reducer";
import {connect} from 'react-redux';
import ReportDetails from "./ReportDetails";
import {compose} from "redux";
import {getAllReportDetails} from "../../redux/users_selectors";
import {jobsAPI, MdlpAPI, reportsAPI} from "../../api/api";
import {saveAs} from 'file-saver';


class ReportDetailsContainer extends React.Component <> {

    componentDidMount() {
        this.props.getReportDetail(this.props.match.params.jobid, this.props.match.params.xmltype);
    }

    render() {
        return <>
            <ReportDetails reportdetails={this.props.reportdetails}
                           reportResponse={reportResponse}
                           reportRequest={reportRequest}
                           resendReport={resendReport}
                           resendReport9151={resendReport9151}
                           setReportStatus7={setReportStatus7}
                           sendMessageToMDLP={sendMessageToMDLP}
                           props={this.props}/>
        </>
    }
}


let reportResponse = (docid) => {
    MdlpAPI.getReportResponse(docid).then((response) => {
            saveAs(response.data, `${docid}_response.txt`);
        }
    )
}

let reportRequest = (docid) => {
    MdlpAPI.getReportRequest(docid).then((response) => {
        saveAs(response.data, `${docid}_response.txt`);
    })
}

let resendReport = (jid, xmltype) => {
    jobsAPI.resendReportAPI(jid, xmltype).then((response) => {
        alert("Успешно");
    })
}

let resendReport9151 = (jid, xmltype) => {
    jobsAPI.resendReport9151API(jid, xmltype).then((response) => {
        alert("Успешно");
    })
}

let setReportStatus7 = (jid, xmltype) => {
    jobsAPI.setReportStatus7API(jid, xmltype).then((response) => {
        alert("Успешно");
    })
}

let sendMessageToMDLP = (document_id, document_receipt) => {
    reportsAPI.sendMessageToMDLPAPI(document_id, document_receipt).then((response) => {
        alert("Успешно");
    })
}







let mapStateToProps = (state) => {
    return {
        reportdetails: getAllReportDetails(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getReportDetail: requestReportDetails,
        })
)(ReportDetailsContainer);

