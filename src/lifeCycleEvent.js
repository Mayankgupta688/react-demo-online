import React from "react";
import ReactDOM from "react-dom";

export default class LifeCycleEvents extends React.Component {

    componentWillMount() {
        alert("Component Will Render");
    }


    componentDidMount() {
        alert("Component Did Render");
    }

    render() {
        alert("Rendered");
        return <div>Hello All</div>
    }
}