import React from "react";
import {requestJobDetails, requestJobs, requestMistakes} from "../../redux/jobs_reducer";
import {connect} from 'react-redux';
import Mistakes from "./Mistakes";
import {compose} from "redux";
import {getAllJobDetails, getAllJobs, getAllMistakesSelector} from "../../redux/users_selectors";


class MistakesContainer extends React.Component <> {

    componentDidMount() {
            this.props.getMistakes();
    }

    render() {
        return <>
            <Mistakes mistakes={this.props.mistakes} props={this.props}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
       mistakes: getAllMistakesSelector(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getMistakes: requestMistakes
        })
)(MistakesContainer);

