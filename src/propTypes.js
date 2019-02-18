import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

export default class WorkingWithProps extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Mayank",
            userAge: "hdagjfsd",
            userDesignation: "Data"
        }
    }

    render() {
        return (
            <User {...this.state}></User>
        )
    }
}

class User extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.userName}</div>
                <div>{this.props.userAge}</div>
                <div>{this.props.userDesignation}</div>
            </div>
        )
    }
}

User.propTypes = {
    userName: PropTypes.string,
    userDesignation: PropTypes.boolean,
    userAge: PropTypes.boolean
}

ReactDOM.render(<WorkingWithProps />, document.getElementById("root"))