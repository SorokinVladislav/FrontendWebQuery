import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava}/>);

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;