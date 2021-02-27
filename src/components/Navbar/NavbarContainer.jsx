import React, {useState} from "react";
import {requestJobs} from "../../redux/jobs_reducer";
import {connect} from 'react-redux';
import {compose} from "redux";
import {getAllJobs} from "../../redux/users_selectors";
import Navbarr from "./Navbarr";


class NavbarContainer extends React.Component <>{

    render() {
        return <>
            <Navbarr />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
    }
}



export default compose(
    connect(mapStateToProps,
        {
            })
)(NavbarContainer);

