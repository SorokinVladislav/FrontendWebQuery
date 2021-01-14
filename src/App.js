import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Link, NavLink, Route} from "react-router-dom";


const App = () => {
    return (<BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path="/dialogs" component={Dialogs}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route path="/news" component={Profile}/>
                    <Route path="/music" component={Profile}/>
                    <Route path="/settings" component={Profile}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;