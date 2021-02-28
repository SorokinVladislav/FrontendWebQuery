import React from "react";
import {requestReportDetails} from "../../redux/jobs_reducer";
import {connect} from 'react-redux';
import ReportDetails from "./ReportDetails";
import {compose} from "redux";
import {getAllReportDetails} from "../../redux/users_selectors";
import {jobsAPI, MdlpAPI, reportsAPI} from "../../api/api";
import {saveAs} from 'file-saver';
import {render} from "react-dom";
import {Redirect} from "react-router-dom";


class ReportDetailsContainer extends React.Component <> {

    componentDidMount() {
        this.props.getReportDetail(this.props.match.params.jobid, this.props.match.params.xmltype);
    }

    handleBack(jobid) {
        this.props.history.push('/jobdetails/'+jobid);
    }

    resendReport = (jid, id) => {
        let bool = window.confirm("Вы уверены?")
        if (bool) {
            jobsAPI.resendReportAPI(jid, id).then((response) => {
                this.handleBack(jid);
                alert("Успешно");
            })
        }
    }

    resendReport9151 = (jid, docid) => {
        let bool = window.confirm("Вы уверены?")
        if (bool) {
            jobsAPI.resendReport9151API(jid, docid).then((response) => {
                this.handleBack(jid);
                alert("Успешно");
            })
        }
    }

    setReportStatus7 = (jid, id) => {
        let bool = window.confirm("Вы уверены?")
        if (bool) {
            jobsAPI.setReportStatus7API(jid, id).then((response) => {
                this.handleBack(jid);
                alert("Успешно");
            })
        }
    }

    render() {
        return <>
            <ReportDetails reportdetails={this.props.reportdetails}
                           reportResponse={reportResponse}
                           reportRequest={reportRequest}
                           resendReport={this.resendReport}
                           resendReport9151={this.resendReport9151}
                           setReportStatus7={this.setReportStatus7}
                           sendMessageToMDLP={sendMessageToMDLP}
                           handleBack={this.handleBack}
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

let sendMessageToMDLP = (document_id, document_receipt) => {
    let bool = window.confirm("Вы уверены?")
    if (bool) {
        reportsAPI.sendMessageToMDLPAPI(document_id, document_receipt).then((response) => {
            alert("Успешно");
        })
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
            getReportDetail: requestReportDetails,
        })
)(ReportDetailsContainer);

