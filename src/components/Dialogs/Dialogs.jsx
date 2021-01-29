import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} ava={d.ava}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let newMessageBody = state.newMessageText;


    let onSendMessageClick = () => {
      props.onSendMessageClick();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
      props.onNewMessageChange(body);
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'>
                    </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;