import React from "react";
import ReactDOM from "react-dom";

export default class LifeCycleEvents extends React.Component {

    constructor() {

        super();
        this.state = {
            name: "Mayank"
        }

        setTimeout(() => {
            this.setState({
                name: "Anshul"
            });
        }, 3000)
    }

    componentWillMount() {
        console.log("Will Mount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        alert(this.state.name);
        alert(nextState.name);
        if(nextState.name === "XYZ") {
            return false;
        } else return true;
    }

    render() {
        return (
            <div id="myDiv">
                <ChildClass name={this.state.name} />
            </div>
        )
    }

    componentDidMount() {
        console.log("Mounted");
    }
}

function ChildData(props) {
    return <div>Update Child is: {props.name}</div>
}

class ChildClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    componentWillReceiveProps(nextProps) {
        alert("Props Recieved");
    }

    componentDidUpdate(prevProps, prevState) {

        alert("Previous Props Value: " + prevProps.name);
        if(this.props.name != prevProps.name) {
            this.setState({
                name: this.props.name
            })
        }
    }

    render() {
        return <div>State Name is: {this.state.name}.... Props Name is {this.props.name}</div>
    }
}

ReactDOM.render(<LifeCycleEvents />, document.getElementById("root"))