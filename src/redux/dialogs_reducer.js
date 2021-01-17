const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


const dialogsReducer = (state, action) => {
    debugger;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }

}


export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default dialogsReducer;