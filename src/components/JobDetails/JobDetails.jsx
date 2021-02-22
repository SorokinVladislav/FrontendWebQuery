import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import {JobType, UserType} from "../../types/types";
import {Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./jobDetails.module.css"
import $ from "jquery"
import {NavLink} from "react-router-dom";


let JobDetails = ({jobdetails, ...props}) => {
    return <div>

{/*            <div th:if="${product_name}" className="alert">
                <div className="row textsize">

                    <div className="col-sm">
                        <p><b className="text-warning">Наименование:</b> <span th:text="${product_name}"
                                                                               className="text-white bg-dark"/></p>
                    </div>

                    <div className="col-sm">
                        <p><b className="text-warning">JobName:</b> <span th:text="${jobname}"
                                                                          className="text-white bg-dark"/></p>
                    </div>

                    <div className="col-sm">
                        <p><b className="text-warning">Статус работы:</b> <span th:text="${jobstatus} "
                                                                                className="text-white bg-dark"/></p>
                    </div>

                </div>

            </div>*/}



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



        {jobdetails.map(m =>
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
                        <NavLink to={`/jobdetails/`+m.jid+`/`+m.xmltype}  className="btn btn-warning shadowforbutton">
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

                                <form action="'/jobs/' + ${jid} + '/mapreport'" method="get">
                                    <div className="input-group">
                                        <div className="input-group-append">
                                            <div className="col-sm" align="center">
                                                <button className="btn btn-warning  btn-sm but2 shadowforbutton"
                                                        type="submit"><b>Map Report</b>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col">

                                <form action="'/jobs/' + ${jid} + '/detailedjob'" method="get">
                                    <div className="input-group">
                                        <div className="input-group-append">
                                            <div className="col-sm" align="center">
                                                <button className="btn btn-warning btn-sm but2 shadowforbutton"
                                                        id="detailed" type="submit"><b>Detailed
                                                    Job</b>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>


                        <div className="mt-5"><p><b className="text-white alert m-1">Запрос общего количества в
                            серии:</b></p>
                        </div>

                        <div className="row alert m-1 bg-dark ">
                            <div className="col">

                                <form action="'/jobs/' + ${jid} + '/mdlpcount'" method="get">
                                    <div className="input-group">
                                        <div className="input-group-append">
                                            <div className="col-sm" align="center">
                                                <button className="btn btn-warning  btn-sm but2 shadowforbutton"
                                                        type="submit"><b>В МДЛП</b>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-9 mt-3">
                                            <input className="form-control shadowforbutton" type="number but2"
                                                   value="${count}"></input>
                                        </div>
                                    </div>
                                </form>


                            </div>

                            <div className="col">

                                <form action="'/jobs/' + ${jid} + '/tracewaycount'" method="get">
                                    <div className="input-group">
                                        <div className="input-group-append">
                                            <div className="col-sm" align="center">
                                                <button className="btn btn-warning btn-sm but2 shadowforbutton"
                                                        type="submit"><b>В
                                                    TraceWay</b>
                                                </button>
                                            </div>

                                        </div>
                                        <div className="col-sm-9 mt-3">
                                            <input className="form-control shadowforbutton" type="number"
                                                   value="${countTW}"></input>
                                        </div>
                                    </div>
                                </form>

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
                                            <button className="btn btn-warning btn-sm but2 shadowforbutton" id="elem1">
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
                                            <button className="btn btn-warning btn-sm but2 shadowforbutton" id="elem2">
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
                                            <button className="btn btn-warning btn-sm but2 shadowforbutton" id="elem3">
                                                <b>Suspend</b>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-5 mb-3"><p><b
                            className="text-white alert m-1 bg-dark">Завершение
                            упаковки (отчёт
                            10311):</b></p></div>

                        <div  className="bg-dark">

                            <div className="row ml-1">

                                <div className="col-sm">
                                    <span text="${ele.reportid}" name="document_id" className="text-white bg-dark"/>

                                        <div className="m-2">
                                            <a href="'/getrequestfrom10311/' + ${ele.reportid}"
                                               type="button"
                                               className="ml-2 btn btn-warning btn-sm button shadowforbutton"><b> Скачать
                                                отчёт</b></a>

                                            <a href="'/getresponsefrom10311/' + ${ele.reportid}"
                                               type="button"
                                               className="ml-2 btn btn-warning btn-sm button shadowforbutton"><b> Скачать
                                                ответ</b></a>
                                        </div>
                                </div>

                            </div>

                        </div>


                        <div  className="mt-5 mb-3"><p><b
                            className="text-white alert m-1 bg-dark">Эмиссия кодов маркировки (отчёт
                            10300):</b></p></div>

                        <div  className="bg-dark">

                            <div className="row ml-1">

                                <div className="col-sm">
                                    <span text="${ele.orderid}" name="document_id" className="text-white bg-dark"/>

                                        <div className="m-2">
                                            <a href="'/getrequestfrom10311/' + ${ele.orderid}"
                                               type="button"
                                               className="ml-2 btn btn-warning btn-sm button shadowforbutton"><b> Скачать
                                                отчёт</b></a>

                                            <a href="'/getresponsefrom10311/' + ${ele.orderid}"
                                               type="button"
                                               className="ml-2 btn btn-warning btn-sm button shadowforbutton"><b> Скачать
                                                ответ</b></a>
                                        </div>
                                </div>

                            </div>

                        </div>


                    </div>


                </div>


  {/*              <div className="modal fade" id="myModal1" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Предупреждение</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Закрыть">
                                    <span aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Поменять статус работы на Reject?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть
                                </button>

                                <a href="'/jobs/' + ${jid} + '/reject'" type="button"
                                   className="btn btn-primary">Подтвердить</a>

                            </div>
                        </div>
                    </div>
                </div>*/}

{/*                <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Предупреждение</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Закрыть">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Поменять статус работы на UIDGenerated?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть
                                </button>

                                <a href="'/jobs/' + ${jid} + '/uidgenerated'" type="button"
                                   className="btn btn-primary">Подтвердить</a>

                            </div>
                        </div>
                    </div>
                </div>*/}

{/*

                <div className="modal fade" id="myModal3" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Предупреждение</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Закрыть">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Поменять статус работы на Suspend?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть
                                </button>

                                <a href="'/jobs/' + ${jid} + '/suspend'" type="button"
                                   className="btn btn-primary">Подтвердить</a>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="myModal4" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Предупреждение</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Закрыть">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Перевод в данный статус невозможен, коды еще не получены.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="myModal5" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Предупреждение</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Закрыть">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Не хватает прав для данного действия.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

*/}


                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                        crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
                        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                        crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
                        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
                        crossOrigin="anonymous"></script>

                <div text="${empty}" id="empty" className="text-white bg-dark" hidden></div>
                <div text="${noaccess}" id="noaccess" className="text-white bg-dark" hidden></div>

                <script>
                    elem1.onclick = function () {
                    $('#myModal1').modal()
                }
                    elem2.onclick = function () {
                    $('#myModal2').modal()
                }
                    elem3.onclick = function () {
                    $('#myModal3').modal()
                }
                </script>



    </div>
}


export default JobDetails;
