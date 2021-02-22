import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import {JobType, UserType} from "../../types/types";
import {Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./reportDetails.module.css"
import $ from "jquery"


let ReportDetails = ({reportdetails, ...props}) => {

    return <div>
        <div className="col-md-8 col-lg-10 content-container">

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


                <div className="row">

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

                    <div className="col-sm itemsalign">
                        <a href="'/jobs/' + ${jid} + '/'+ ${xmltype}+ '/getrequest/' + ${ele.document_id}"
                           type="button"
                           className="ml-3 btn btn-warning btn-sm shadowforbutton"><b> Скачать отчёт</b></a>
                    </div>

                    <div className="col-sm itemsalign">
                        <a href="'/jobs/' + ${jid} + '/'+ ${xmltype}+ '/getresponse/'+ ${ele.document_id}"
                           type="button"
                           className="ml-2 btn btn-warning btn-sm shadowforbutton"><b> Скачать ответ</b></a>
                    </div>
                </div>

                </div>
            )}


                <div className="row">
                    <div className="col-sm-6">

                        <p><b className="text-white alert m-1 bg-dark">Действия с отчётом:</b></p>
                        <div className="row alert m-1 bg-dark">
                            <div className="ml-2">


                                <div className="input-group">
                                    <div className="input-group-append">
                                        <div className="col-sm" align="center">
                                            <button className="btn btn-warning btn-sm shadowforbutton" id="elem1">
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
                                            <button className="btn btn-warning btn-sm shadowforbutton" id="elem2"><b>Статус
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
                                            <button className="btn btn-warning btn-sm shadowforbutton" id="elem3"><b>Переотправить
                                                9151</b>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>


                        <div>


                        </div>

                    </div>


                    <div className="col-sm-6">

                            <p><b className="text-white alert m-1 bg-dark">Отправка письма в МДЛП:</b></p>
                            <div className="row alert m-1 bg-dark">
                                <div className="ml-2">


                                    <div className="input-group">
                                        <div className="input-group-append">
                                            <div className="col-sm" align="center">
                                                <button className="btn btn-warning btn-sm shadowforbutton" id="elem7">
                                                    <b>Отправить</b>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>


                </div>


           {/*     <div className="modal fade" id="myModal1" tabIndex="-1" role="dialog"
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
                                Подтвердите переотправку отчёта
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть
                                </button>

                                <a th:href="'/jobs/' + ${jid} + '/'+ ${xmltype}+ '/resend'" type="button"
                                   className="btn btn-primary">Подтвердить</a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog"
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
                                Установить статус отчёта "Успешное выполнение"?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть
                                </button>

                                <a th:href="'/jobs/' + ${jid} + '/'+ ${xmltype}+ '/status7'" type="button"
                                   className="btn btn-primary">Подтвердить</a>

                            </div>
                        </div>
                    </div>
                </div>

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
                                Переотправить отчёт "9151"?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть
                                </button>

                                <a th:href="'/jobs/' + ${jid} + '/'+ ${xmltype}+ '/resend9151'" type="button"
                                   className="btn btn-primary">Подтвердить</a>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="myModal7" tabIndex="-1" role="dialog"
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
                                Уверены, что хотите отправить письмо в МДЛП?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть
                                </button>


                                <form th:action="'/jobs/' + ${jid} + '/'+ ${xmltype}+ '/sendmessagetomdlp'"
                                      method="post">
                                    <button type="submit"
                                            className="btn btn-primary">Подтвердить
                                    </button>
                                    <input th:value="${postss[0].document_receipt}" hidden name="document_receipt"/>
                                    <input th:value="${jid}" hidden name="jid"/>
                                    <input th:value="${xmltype}" hidden name="xmltype"/>
                                    <input th:value="${postss[0].document_id}" hidden name="document_id"/>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
*/}

                <script>
                    elem1.onclick = function() {
                    $('#myModal1').modal()}

                    elem2.onclick = function() {
                    $('#myModal2').modal()}

                    elem3.onclick = function() {
                    $('#myModal3').modal()}

                    elem7.onclick = function() {
                    $('#myModal7').modal()}


                </script>


        </div>
    </div>
}


export default ReportDetails;
