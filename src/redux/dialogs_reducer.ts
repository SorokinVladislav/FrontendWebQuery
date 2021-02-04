const SEND_MESSAGE = 'SEND_MESSAGE';


type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Ok'},
        {id: 4, message: 'Sasha'},
        {id: 5, message: 'Dimych'},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Anrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Dimych'},
    ] as Array<DialogType>
}

export type InitialStateType = typeof initialState;


const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }

}

type SendMessageCreatorType = {
    type:typeof SEND_MESSAGE, newMessageBody: string}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorType => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;