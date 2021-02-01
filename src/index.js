import './index.css';
import store from "./redux/redux_store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import SamuraiJSApp from "./App";


    ReactDOM.render(<SamuraiJSApp />, document.getElementById('root')
    )


