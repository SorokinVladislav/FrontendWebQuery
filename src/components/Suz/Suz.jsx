import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./suz.module.css"
import {NavLink} from "react-router-dom";


let Suz = ({suz}) => {
    if (suz.length>0) {
        return <div>
            {suz.map(m =>
                <div className={s.mainContainers} key={m.jid}>
                    <div className="row textsize border-secondary rounded mt-2 mb-3">

                        <div className="col-sm-1">
                            <b>JobID:</b><br/>
                            <NavLink to={`/jobdetails/` + m.jid}><span>{m.jid}</span></NavLink>
                        </div>

                        <div className="col-sm">
                            <b>JobName:</b><br/>
                            <NavLink to={`/jobdetails/` + m.jid}> <span> {m.jobname}</span></NavLink>
                        </div>

                        <div className="col-sm">
                            <b>Наименование: </b><br/>
                            <NavLink to={`/jobdetails/` + m.jid}><span>  {m.product_name}</span></NavLink>
                        </div>

                        <div className="col-sm-1">
                            <b>GTIN: </b><br/>
                            <NavLink to={`/jobdetails/` + m.jid}> <span> {m.gtin}</span></NavLink>
                        </div>

                        <div className="col-sm-1">
                            <b>Серия:</b><br/>
                            <NavLink to={`/jobdetails/` + m.jid}><span>  {m.batchno}</span></NavLink>
                        </div>

                        <div className="col-sm-1">
                            <b>Количество:</b><br/>
                            <NavLink to={`/jobdetails/` + m.jid}><span>  {m.quantity}</span></NavLink>
                        </div>

                        <div className="col-sm">
                            <b>Время:</b><br/>
                            <NavLink to={`/jobdetails/` + m.jid}><span>  {m.obreqdt}</span></NavLink>
                        </div>

                        <div className="col-sm">
                            <b>OrderID: </b><br/>
                            <NavLink to={`/jobdetails/` + m.jid}> <span> {m.orderid}</span></NavLink>
                        </div>

                    </div>
                </div>
            )
            }
        </div>
    }
    else return <div>
        Данные отсуствуют
    </div>
}


export default Suz;
