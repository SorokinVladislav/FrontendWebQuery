import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery"
import {NavLink} from "react-router-dom";


let JobDetails = ({jobdetails, twcount, mdlpcount, ...props}) => {
    debugger
    if (jobdetails.length === 4) {
        return <div>

            <div className="alert">
                <div className="row textsize">

                    <div className="col-sm">
                        <p><b className="text-warning">Наименование:</b> <span className="text-white bg-dark">
                            {props.props.jobdetails[3][0].product_name}
                        </span></p>
                    </div>

                    <div className="col-sm">
                        <p><b className="text-warning">JobName:</b> <span className="text-white bg-dark">
                                            {props.props.jobdetails[3][0].jobname}
                        </span></p>
                    </div>

                    <div className="col-sm">
                        <p><b className="text-warning">Статус работы:</b> <span className="text-white bg-dark">
                                            {props.props.jobdetails[3][0].jobstatus}
                        </span></p>
                    </div>

                </div>

            </div>


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


            {jobdetails.length > 0 && jobdetails[0].map(m =>
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
                            <span> {m.updateddate}    </span>
                        </div>

                        <div className="col-sm-2 itemsalign" align="center">
                            <NavLink to={`/reportdetails/` + m.jobid + "/" + m.xmltype}
                                     className="btn btn-warning shadowforbutton">
                                <b>Детальнее</b></NavLink>
                        </div>
                    </div>

                </div>
            )}

            <div className="row mt-5">
                <div className="col-sm-4">


                    <p><b className="text-white alert m-1 bg-dark">Отчёты по работе:</b></p>
                    <div className="row alert m-1 bg-dark">
                        <div className="col">
                            <div className="input-group">
                                <div className="input-group-append">
                                    <div className="col-sm" align="center">
                                        <button onClick={() => props.mapReport(props.props.jobdetails[3][0].jid)}
                                                className="btn btn-warning  btn-sm but2 shadowforbutton"
                                                type="submit"><b>Map Report</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="input-group">
                                <div className="input-group-append">
                                    <div className="col-sm" align="center">
                                        <button onClick={() => props.detailedJob(props.props.jobdetails[3][0].jid)}
                                                className="btn btn-warning  btn-sm but2 shadowforbutton"
                                                type="submit"><b>Detailed Job</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-5"><p><b className="text-white alert m-1">Запрос общего количества в
                        серии:</b></p>
                    </div>

                    <div className="row alert m-1 bg-dark ">
                        <div className="col">


                            <div className="input-group">
                                <div className="input-group-append">
                                    <div className="col-sm" align="center">
                                        <button
                                            onClick={() => props.props.getCountMDLP(props.props.jobdetails[3][0].jid)}
                                            className="btn btn-warning  btn-sm but2 shadowforbutton"
                                        ><b>В МДЛП</b>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-sm-9 mt-3">
                                    <span className="form-control shadowforbutton" type="but2">
                                        <b> {mdlpcount}</b>
                                    </span>
                                </div>
                            </div>


                        </div>

                        <div className="col">


                            <div className="input-group">
                                <div className="input-group-append">
                                    <div className="col-sm" align="center">
                                        <button onClick={() => props.props.getCountTW(props.props.jobdetails[3][0].jid)}
                                                className="btn btn-warning  btn-sm but2 shadowforbutton"
                                        ><b>В TraceWay</b>
                                        </button>
                                    </div>

                                </div>
                                <div className="col-sm-9 mt-3">
                                    <span className="form-control shadowforbutton">
                                        <b> {twcount}</b>
                                    </span>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>

                <div className="col-sm-2">
                </div>


                <div className="col-sm-4">


                    <p><b className="text-white alert m-1 bg-dark">Изменение статуса работы:</b></p>
                    <div className="row alert m-1 bg-dark">
                        <div className="col">
                            <div className="input-group blocktext">
                                <div className="input-group-append">
                                    <div className="col-sm" align="center">
                                        <button
                                            onClick={() => props.props.getRejectJob(props.props.jobdetails[3][0].jid)}
                                            className="btn btn-warning btn-sm but2 shadowforbutton" id="elem1">
                                            <b>
                                                Reject </b>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col">

                            <div className="input-group blocktext">
                                <div className="input-group-append">
                                    <div className="col-sm" align="center">
                                        <button
                                            onClick={() => {
                                                if (props.props.jobdetails[0][0]) {
                                                    if (props.props.jobdetails[0][0].transactionstatus === "7 – Успешно получена квитанция") {
                                                        props.props.getUIDGeneratedJob(props.props.jobdetails[3][0].jid);
                                                    }
                                                } else {
                                                    alert("Коды еще не получены!");
                                                }
                                            }
                                            }
                                            className="btn btn-warning btn-sm but2 shadowforbutton" id="elem2">
                                            <b>UIDGenerated</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col ">

                            <div className="input-group blocktext">
                                <div className="input-group-append">
                                    <div className="col-sm" align="center">
                                        <button
                                            onClick={() => props.props.getSuspendJob(props.props.jobdetails[3][0].jid)}
                                            className="btn btn-warning btn-sm but2 shadowforbutton" id="elem3">
                                            <b>Suspend</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ;
                    </div>

                    {jobdetails[2] != null > 0 && (<div className="mt-5 mb-3"><p><b
                            className="text-white alert m-1 bg-dark">Завершение
                            упаковки (отчёт
                            10311):</b></p></div>
                    )
                    }

                    <div className="bg-dark">

                        {jobdetails.length > 0 && jobdetails[2].map(m =>
                            <div className="row ml-1">

                                <div className="col-sm">
                                    <span name="document_id" className="text-white bg-dark">{m.reportid} </span>

                                    <div className="m-2">
                                        <button onClick={() => props.request10311_10300(m.reportid)}
                                                className="ml-2 btn btn-warning btn-sm button shadowforbutton">
                                            <b> Скачать
                                                отчёт</b></button>

                                        <button onClick={() => props.response10311_10300(m.reportid)}
                                                className="ml-2 btn btn-warning btn-sm button shadowforbutton">
                                            <b> Скачать
                                                ответ</b></button>
                                    </div>
                                </div>

                            </div>
                        )}

                    </div>


                    {jobdetails[1] != null > 0 && (<div className="mt-5 mb-3"><p><b
                        className="text-white alert m-1 bg-dark">Эмиссия кодов маркировки (отчёт
                        10300):</b></p></div>)
                    }
                    {jobdetails.length > 0 && jobdetails[1].map(m =>
                        <div className="row ml-1 bg-dark">

                            <div className="col-sm">
                                <span name="document_id" className="text-white bg-dark"> {m.orderid}</span>

                                <div className="m-2">
                                    <button onClick={() => props.request10311_10300(m.orderid)}
                                            className="ml-2 btn btn-warning btn-sm button shadowforbutton"><b> Скачать
                                        отчёт</b></button>

                                    <button onClick={() => props.response10311_10300(m.orderid)}
                                            className="ml-2 btn btn-warning btn-sm button shadowforbutton"><b> Скачать
                                        ответ</b></button>
                                </div>
                            </div>

                        </div>
                    )

                    }

                </div>

            </div>

        </div>
    } else return <div>
        Загрузка
    </div>
}


export default JobDetails;
