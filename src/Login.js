import React, { Component } from "react";
import axios from "axios";

class login extends Component {
    constructor() {
        super();

        this.state = {
            username: "admin",
            password: "admin"
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = event => {
        event.preventDefault();

        const endpoint = "http://localhost:8080/authenticate";

        const username = this.state.username;
        const password = this.state.password;

        const user_object = {
            username: username,
            password: password
        };

        axios.post(endpoint, user_object).then(res => {
            localStorage.setItem("authorization", res.data.token);
            return this.handleDashboard();
        });
    };

    handleDashboard() {
        axios.get("http://localhost:8080/jobs").then(res => {
            debugger
            if (res.status === 200) {
                this.props.history.push("/jobs");
            } else {
                alert("Authentication failure");
            }
        });
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <form className="form-signin" onSubmit={this.handleFormSubmit}>
                        <h2 className="form-signin-heading">Please login</h2>
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   placeholder="User name"
                                   value="admin"
                            />
                        </div>
                        <div className="form-group">
                            <input type="password"
                                   className="form-control"
                                   placeholder="password"
                                   value="admin"
                            />
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default login;