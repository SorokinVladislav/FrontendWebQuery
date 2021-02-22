import React from "react";
import "./Navbar.module.css"

import "bootstrap"
import "react-bootstrap"
import {NavLink} from "react-router-dom";

const Navbarr = (props) => {

    return (<nav className="navbar navbar-expand-md navbar-light">


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <nav className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav">


                    <li className="nav-item">
                        <div className="col-sm ">
                            <img width="100%" align="center"
                                 className="mainContainers navBarImage"
                                 src="https://sun9-39.userapi.com/impg/zrwxEd3CkM2MyycRLnx5KLMFpluNOqlZSSdPnA/lc4Re0xnQP8.jpg?size=301x173&quality=96&proxy=1&sign=1188d0b87fed7d931018d06e4c9d3844&type=album"/>
                        </div>
                    </li>


                    <li className="nav-link">
                        <div className="col-sm" align="center">

                            <NavLink to="/jobs" className="btn btn-secondary btn-block mainContainers">Все
                                работы</NavLink>
                        </div>
                    </li>
                    <li className="nav-link">
                        <div className="col-sm" align="center">
                            <NavLink to="/closed" className="btn btn-secondary btn-block mainContainers">Закрытые работы</NavLink>
                        </div>
                    </li>
                    <li className="nav-link">
                        <div className="col-sm" align="center">
                            <NavLink to="/suspend" className="btn btn-secondary btn-block mainContainers">Остановленные
                                работы</NavLink>
                        </div>
                    </li>
                    <li className="nav-link">
                        <div className="col-sm" align="center">
                            <NavLink to="/mistakes" className="btn btn-secondary  btn-block mainContainers">Работы с
                                ошибками</NavLink>
                        </div>
                    </li>

                    <li className="nav-link">
                        <div className="col-sm" align="center">
                            <NavLink to="/json" className="btn btn-secondary btn-block mainContainers">Администрирование</NavLink>
                        </div>
                    </li><br/>


                    <form action="@{/batch}" method="get">
                        <div className="input-group mb-3 mainContainers ">
                            <input type="text" className="form-control" name="batch"
    placeholder="Введите номер серии"
    aria-label="Введите номер серии" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn bg-secondary text-white" type="submit">Поиск</button>
                            </div>
                        </div>

                    </form>

                    <form action="@{/jobid}" method="get">
                        <div className="input-group mb-3 mainContainers">
                            <input type="text" className="form-control h6" name="jobid" placeholder="Введите JobID"
    aria-label="Введите JobID" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn bg-secondary text-white" type="submit">Поиск</button>
                            </div>
                        </div>
                    </form>

                    <form action="@{/jobname}" method="get">
                        <div className="input-group mb-3 mainContainers">
                            <input type="text" className="form-control" name="jobname" placeholder="Введите JobName"
    aria-label="Введите JobName" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn bg-secondary text-white" type="submit">Поиск</button>
                            </div>
                        </div>
                    </form>

                    <form action="@{/gtin}" method="get">
                        <div className="input-group mb-3 mainContainers">
                            <input type="text" className="form-control" name="gtin" placeholder="Введите GTIN"
    aria-label="Введите GTIN" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn bg-secondary text-white" type="submit">Поиск</button>
                            </div>
                        </div>
                    </form>

                </ul>
            </nav>
        </nav>
    )

};
export default Navbarr;



