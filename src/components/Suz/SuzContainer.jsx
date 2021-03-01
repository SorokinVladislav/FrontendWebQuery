import React from "react";
import {requestSuz} from "../../redux/jobs_reducer";
import {connect} from 'react-redux';
import Suz from "./Suz";
import {compose} from "redux";
import {getSuz} from "../../redux/users_selectors";


class SuzContainer extends React.Component <>{

    componentDidMount() {
       this.props.getSuz();
    }

    render() {
        return <>
            <Suz suz={this.props.suz} props={this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        suz: getSuz(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getSuz: requestSuz})
)(SuzContainer);

