import './App.css';
import React from 'react'
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import AllJobsContainer from "./components/Users/AllJobsContainer";
import MistakesContainer from "./components/Mistakes/MistakesContainer";

import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import store from "./redux/redux_store";
import {withSuspense} from "./hoc/withSuspense";
import Navbarr from "./components/Navbar/Navbarr";
import "./style.css"
import Preloader from "./components/common/preloader/Preloader";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const JobDetailsContainer = React.lazy(() => import('./components/JobDetails/JobDetailsContainer'))
const ReportDetailsContainer = React.lazy(() => import('./components/ReportDetails/ReportDetailsContainer'))


class App extends React.Component {

    catchAllUnhandledError = (reason, promise) => {
        alert("Some error");
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledError);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledError);
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (<div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-md-8 col-lg-2 navbar-container">


                        <Navbarr/>
                    </div>
                    <div className="col-md-8 col-lg-10 content-container">

                        <Route exact path="/"
                               render={withSuspense(ProfileContainer)}/>

                        <Route path="/dialogs"
                               render={withSuspense(DialogsContainer)}/>

                        <Route exact path="/jobs"
                               render={() => <AllJobsContainer filter="allJobs"/>}/>

                        <Route path="/closed"
                               render={() => <AllJobsContainer filter="closedJobs"/>}/>

                        <Route path="/suspend"
                               render={() => <AllJobsContainer filter="suspendJobs"/>}/>

                        <Route path="/mistakes"
                               render={() => <MistakesContainer filter="mistakes"/>}/>


                        <Route exact path="/jobdetails/:jobid?"
                               render={withSuspense(JobDetailsContainer)}/>

                        <Route exact path="/reportdetails/:jobid?/:xmltype?"
                               render={withSuspense(ReportDetailsContainer)}/>

                        <Route exact path="/getrequestfrom10311/:reportid?"
                               />



                        <Route path="/login"
                               render={() => <Login/>}/>

                    </div>

                </div>

            </div>

        );

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let WebQuery = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default WebQuery;
