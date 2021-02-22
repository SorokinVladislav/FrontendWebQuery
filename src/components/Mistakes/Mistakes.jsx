import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import {JobType, UserType} from "../../types/types";
import {Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./mistakes.module.css"
import $ from "jquery"


let Mistakes = ({mistakes, ...props}) => {

    return <div>

            <div className="alert mt-1 bg-dark">
                <div className="row itemsalign text-warning">

                    <div className="col-sm-1">
                        <p><b>JobID:</b></p>
                    </div>

                    <div className="col-sm">
                        <p><b>XMLType:</b></p>
                    </div>

                    <div className="col-sm">
                        <p><b>Статус:</b></p>
                    </div>

                    <div className="col-sm">
                        <p><b>Ответ:</b></p>
                    </div>

                    <div className="col-sm">
                        <p><b>Идентификатор:</b></p>
                    </div>

                    <div className="col-sm">
                        <p><b>Время:</b></p>
                    </div>

                    <div className="col-sm-2">

                    </div>

                </div>
            </div>



        {mistakes.map(m =>
            <div className="mainContainers border border-secondary rounded mt-2 mb-3" key={m.document_id}>

                <div className="row text-white itemsalign">

                    <div className="col-sm-1 itemsalign">
                        <span> {m.jobid}</span>
                    </div>

                    <div className="col-sm itemsalign">
                        <span> {m.xmltype}</span>
                    </div>

                    <div className="col-sm itemsalign">
                        <span> {m.transactionstatus}</span>
                    </div>

                    <div className="col-sm itemsalign">
                        <span> {m.document_receipt}</span>
                    </div>

                    <div className="col-sm itemsalign">
                        <span> {m.document_id}</span>
                    </div>

                    <div className="col-sm itemsalign">
                        <span> {m.updateddate}</span>
                    </div>

                    <div className="col-sm-2 itemsalign" align="center">
                        <a href="'/jobs/' + ${ele.jobid}+'/'+ ${ele.xmltype}"
                           className="btn btn-warning shadowforbutton"><b>Детальнее</b></a>
                    </div>
                </div>

            </div>
        )}

    </div>
}


export default Mistakes;
