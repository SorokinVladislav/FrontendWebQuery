import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import {JobType, UserType} from "../../types/types";
import {Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./administration.module.css"
import $ from "jquery"


let Administration = ({reportdetails, ...props}) => {

    return <div>

        <div className="col-md-8 col-lg-10 content-container">

            <div>


                <div className="row">

                    <div className="col-sm-4">

                        <div className="ml-3">
                            <a href="/suz">
                                <button type="submit"
                                        className="m-2 btn btn-warning shadowforbutton"
                                        data-dismiss="modal">
                                    <b>СУЗ</b>
                                </button>
                            </a>

                            <a href="/codeswaiting">
                                <button type="submit"
                                        className="m-2 btn btn-warning shadowforbutton"
                                        data-dismiss="modal">
                                    <b>В ожидании кодов</b>
                                </button>
                            </a>
                        </div>


                        <form method="post" action="@{/json}">

                            <div className="form-label-group mt-3 ml-3 ">
                                <label className="text-light">Работа с SSCC: </label>
                                <input type="text" name="SSCC" className="form-control shadowforbutton"
                                       placeholder="SSCC: " required=""
                                       autoFocus="" value="${sscc}"/>

                            </div>

                            <div className="mt-3 ml-3">
                                <button formaction="@{/json}" formMethod="post" type="submit"
                                        className="m-2 btn btn-warning shadowforbutton" data-dismiss="modal"><b>Создать
                                    JSON</b>
                                </button>
                                <button formaction="@{/mdlp}" formMethod="post" type="submit"
                                        className="m-2 btn btn-warning shadowforbutton" data-dismiss="modal"><b>Запрос в
                                    МДЛП</b>
                                </button>
                                <button formaction="@{/tw}" formMethod="post" type="submit"
                                        className="m-2 btn btn-warning shadowforbutton" data-dismiss="modal"><b>Запрос в
                                    TW</b></button>
                            </div>


                           {/* <div if="${jid}" className="mt-3 ml-3">
                                <a href="'/jobs/' + ${jid}" type="submit"
                                   className="m-2 btn btn-warning shadowforbutton" data-dismiss="modal" text=${jid}
                                   style="font-weight:bold"></a>
                            </div>*/}

                        </form>


                        <div className="mt-3 ml-3">
                            <div>
                                <span text="${code}" className="text-white bg-dark"/> <br/>
                                <span text="${grpcnt}" className="text-white bg-dark"/>
                                <span text="${indcnt}" className="text-white bg-dark"/>

                            </div>
                            <div each="el : ${array}">
                                <span text="${el}" className="text-white bg-dark"/><br/>
                            </div>

                        </div>


                    </div>


                    <div className="col-sm-6">
                        <form action="@{/sendjson}" method="post">
                            <div className="form-group">
                                <label htmlFor="textarea"><h2 className="text-light">Результат:</h2></label>
                                <textarea id="textarea" name="textarea" text="${json}"
                                          className="form-control shadowforbutton"
                                          rows="20">
                                </textarea>
                            </div>
                            <div className="mt-3 mb-2">
                                <button type="submit" className="btn btn-warning shadowforbutton" data-dismiss="modal">
                                    <b>Отправить в
                                        TraceWay</b>
                                </button>
                            </div>

                        </form>

                        <label htmlFor="textarea"><h2 className="text-light ">Ответ TraceWay:</h2></label>
                        <textarea id="twresponse" text="${twresponse}" className="form-control shadowforbutton"
                                  rows="10">
                                </textarea>


                    </div>


                </div>


            </div>


    </div>

    </div>
}


export default Administration;
