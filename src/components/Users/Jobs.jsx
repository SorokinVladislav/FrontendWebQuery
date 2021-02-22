import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import {JobType, UserType} from "../../types/types";
import {Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./jobs.module.css"


let Jobs = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, jobs, ...props}) => {
    return <div>
        {jobs.map(m =>

            <div className={s.mainContainers}>
                <div className="row textsize border-secondary rounded mt-2 mb-3">

                    <div className="col-sm-1">
                        <b>JobID:</b><br/>
                        <span>   {m.jid}</span>
                    </div>

                    <div className="col-sm">
                        <b>JobName:</b><br/>
                        <span> {m.jobname}</span>
                    </div>

                    <div className="col-sm-2">
                        <b>Наименование: </b><br/>
                        <span>  {m.product_name}</span>
                    </div>

                    <div className="col-sm">
                        <b>GTIN: </b><br/>
                        <span> {m.gtin}</span>
                    </div>

                    <div className="col-sm">
                        <b>Количество:</b><br/>
                        <span>  {m.quantity}</span>
                    </div>

                    <div className="col-sm">
                        <b>Время:</b><br/>
                        <span>  {m.lastupdateddate}</span>
                    </div>

                    <div className="col-sm-1">
                        <b>Серия:</b><br/>
                        <span>  {m.batchno}</span>
                    </div>

                    <div className="col-sm">
                        <b>Линия: </b><br/>
                        <span> {m.line_name}</span>
                    </div>

                    <div className="col-sm">
                        <b>Передача в TW:</b><br/>
                        <span>   {m.datatransferstage}</span>
                    </div>

                    <div className="col-sm">
                        <b>Статус работы:</b><br/>
                        <span>  {m.jobstatus}</span>
                    </div>

                </div>
            </div>
        )
        }
    </div>
}


export default Jobs;
