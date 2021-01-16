import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (<BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.state.profilePage.friends}/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/profile"
                           render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path="/news" component={Profile}/>
                    <Route path="/music" component={Profile}/>
                    <Route path="/settings" component={Profile}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;