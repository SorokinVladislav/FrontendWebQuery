import './index.css';
import store from "./redux/redux_store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import WebQuery from "./App";


    ReactDOM.render(<WebQuery />, document.getElementById('root')
    )


