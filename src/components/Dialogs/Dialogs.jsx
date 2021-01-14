import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>

                <DialogItem name="Dimych" id="1"/>

                <DialogItem name="Anrey" id="2"/>

                <DialogItem name="Sveta" id="3"/>

                <DialogItem name="Sasha" id="4"/>

                <DialogItem name="Dimych" id="5"/>


            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Ok"/>
            </div>
        </div>
    )
}

export default Dialogs;