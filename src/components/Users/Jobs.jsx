import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import {JobType, UserType} from "../../types/types";
import {Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./jobs.module.css"
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Post/Post";


let Jobs = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, jobs, ...props}) => {
    return <div>
        {jobs.map(m =>
            <div className={s.mainContainers}  key={m.jid}>
                <div className="row textsize border-secondary rounded mt-2 mb-3">

                    <div className="col-sm-1">
                        <b>JobID:</b><br/>
                        <NavLink to={`/jobdetails/`+m.jid}><span>{m.jid}</span></NavLink>
                    </div>

                    <div className="col-sm">
                        <b>JobName:</b><br/>
                        <NavLink to={`/jobdetails/`+m.jid}> <span> {m.jobname}</span></NavLink>
                    </div>

                    <div className="col-sm">
                        <b>Наименование: </b><br/>
                        <NavLink to={`/jobdetails/`+m.jid}><span>  {m.product_name}</span></NavLink>
                    </div>

                    <div className="col-sm-1">
                        <b>GTIN: </b><br/>
                        <NavLink to={`/jobdetails/`+m.jid}> <span> {m.gtin}</span></NavLink>
                    </div>

                    <div className="col-sm-1">
                        <b>Количество:</b><br/>
                        <NavLink to={`/jobdetails/`+m.jid}><span>  {m.quantity}</span></NavLink>
                    </div>

                    <div className="col-sm">
                        <b>Время:</b><br/>
                        <NavLink to={`/jobdetails/`+m.jid}><span>  {m.lastupdateddate}</span></NavLink>
                    </div>

                    <div className="col-sm-1">
                        <b>Серия:</b><br/>
                        <NavLink to={`/jobdetails/`+m.jid}><span>  {m.batchno}</span></NavLink>
                    </div>

                    <div className="col-sm-1">
                        <b>Линия: </b><br/>
                        <NavLink to={`/jobdetails/`+m.jid}> <span> {m.line_name}</span></NavLink>
                    </div>

                    <div className="col-sm">
                        <b>Передача в TW:</b><br/>
                        <NavLink to={`/jobdetails/`+m.jid}> <span>   {m.datatransferstage}</span></NavLink>
                    </div>

                    <div className="col-sm">
                        <b>Статус работы:</b><br/>
                        <NavLink to={`/jobdetails/`+m.jid}> <span>  {m.jobstatus}</span></NavLink>
                    </div>

                </div>
            </div>
        )
        }
    </div>
}


export default Jobs;
