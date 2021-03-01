/*
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import WebQuery from "./App";


    ReactDOM.render(<App />, document.getElementById('root')
    )
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import AppContainer from "./App";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <AppContainer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


