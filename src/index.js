import './index.css';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 store={store}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
};


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

