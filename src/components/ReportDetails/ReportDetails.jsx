import React from 'react';
import $ from "jquery"


let ReportDetails = ({reportdetails, ...props}) => {

    if (reportdetails.length > 0) {
        return <div>
            <div className="col-md-8 col-lg-10 content-container mt-2">

                <div>
                    <div className="row textsize">

                        <div className="col-sm-1">
                            <p><b className="text-warning">JobID:</b></p>
                        </div>

                        <div className="col-sm">
                            <p><b className="text-warning">XMLType:</b></p>
                        </div>

                        <div className="col-sm">
                            <p><b className="text-warning">Статус:</b></p>
                        </div>

                        <div className="col-sm">
                            <p><b className="text-warning">Ответ:</b></p>
                        </div>

                        <div className="col-sm">
                            <p><b className="text-warning">Идентификатор:</b></p>
                        </div>

                        <div className="col-sm">
                            <p><b className="text-warning">Время:</b></p>
                        </div>

                        <div className="col-sm">
                            <p><b className="text-warning">Request:</b></p>
                        </div>

                        <div className="col-sm">
                            <p><b className="text-warning">Response:</b></p>
                        </div>


                    </div>
                </div>

                {reportdetails.map(m =>
                    <div className="mainContainers border border-secondary rounded mt-2 mb-3" key={m.document_id}>


                        <div className="row text-white">

                            <div className="col-sm-1 itemsalign ">
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

                            <div className="col-sm itemsalign">
                                <button onClick={() => props.reportRequest(m.document_id)}
                                        className="ml-3 btn btn-warning btn-sm shadowforbutton"><b> Скачать отчёт</b>
                                </button>
                            </div>

                            <div className="col-sm itemsalign">
                                <button onClick={() => props.reportResponse(m.document_id)}
                                        className="ml-2 btn btn-warning btn-sm shadowforbutton"><b> Скачать ответ</b>
                                </button>
                            </div>
                        </div>

                    </div>
                )}


                <div className="row">


                    <div className="col-sm-6">

                        <p><b className="text-white alert m-1 bg-dark">Действия с отчётом:</b></p>

                        {reportdetails.map(m =>
                            <div className="row alert m-1 bg-dark">
                                <div className="ml-2">


                                    <div className="input-group">
                                        <div className="input-group-append">
                                            <div className="col-sm" align="center">
                                                <button onClick={() =>
                                                    props.resendReport(m.jobid, m.id)
                                                }
                                                        className="btn btn-warning btn-sm shadowforbutton" id="elem1">
                                                    <b>Переотправить</b>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="ml-2">

                                    <div className="input-group">
                                        <div className="input-group-append">
                                            <div className="col-sm" align="center">
                                                <button onClick={() =>
                                                    props.setReportStatus7(m.jobid, m.id)
                                                }
                                                        className="btn btn-warning btn-sm shadowforbutton" id="elem2">
                                                    <b>Статус
                                                        - успешно</b>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="ml-2">

                                    <div className="input-group">
                                        <div className="input-group-append">
                                            <div className="col-sm" align="center">
                                                <button onClick={() => {
                                                        props.resendReport9151(m.jobid, m.document_id);
                                                }}
                                                        className="btn btn-warning btn-sm shadowforbutton" id="elem3">
                                                    <b>Переотправить
                                                        9151</b>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        )}

                        <div>


                        </div>

                    </div>


                    {(reportdetails[0].transactionstatus !== "7 – Успешно получена квитанция") &&
                    <div className="col-sm-6">

                        <p><b className="text-white alert m-1 bg-dark">Отправка письма в МДЛП:</b></p>

                        {reportdetails.map(m =>
                            <div className="row alert m-1 bg-dark">
                                <div className="ml-2">


                                    <div className="input-group">
                                        <div className="input-group-append">
                                            <div className="col-sm" align="center">
                                                <button
                                                    onClick={() => props.sendMessageToMDLP(m.document_id, m.document_receipt)}
                                                    className="btn btn-warning btn-sm shadowforbutton">
                                                    <b>Отправить</b>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                    }

                </div>

            </div>
        </div>
    } else return <div>
        Загрузка
    </div>
}


export default ReportDetails;
