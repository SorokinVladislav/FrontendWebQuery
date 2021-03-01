import './App.css';
import React from 'react'
import {BrowserRouter, Route, withRouter} from "react-router-dom";
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
import AdministrationContainer from "./components/Administration/AdministrationContainer";
import SuzContainer from "./components/Suz/SuzContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import dashboard from "./Dashboard";
import login from "./Login";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const JobDetailsContainer = React.lazy(() => import('./components/JobDetails/JobDetailsContainer'))
const ReportDetailsContainer = React.lazy(() => import('./components/ReportDetails/ReportDetailsContainer'))


class App extends React.Component {

    catchAllUnhandledError = (reason, promise) => {
        alert("Some error");
    }

    componentDidMount() {
       // this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledError);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledError);
    }


    render() {
/*        if (!this.props.initialized) {
            return <Preloader/>
        }*/

        return (<div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-sm col-lg-2 navbar-container ">
                        <NavbarContainer/>
                    </div>
                    <div className="col-sm-12 col-lg-10 content-container">

                        {/*<Route exact path="/" component={login} />*/}
                        <Route exact path="/dashboard" component={dashboard} />


                              <Route path="/login"
                               render={() => <Login/>}/>

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

                        <Route path="/administration"
                               render={() => <AdministrationContainer/>}/>

                        <Route path="/suz"
                               render={() => <SuzContainer/>}/>

                        <Route path="/codeswaiting"
                               render={() =>  <AllJobsContainer filter="codeswaiting"/>}/>

                        <Route exact path="/jobdetails/:jobid?"
                               render={withSuspense(JobDetailsContainer)}/>

                        <Route exact path="/reportdetails/:jobid?/:xmltype?"
                               render={withSuspense(ReportDetailsContainer)}/>

                        <Route exact path="/getrequestfrom10311/:reportid?"
                        />



                    </div>

                </div>

            </div>

        );

    }
}

const mapStateToProps = (state) => ({
   // initialized: state.app.initialized
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