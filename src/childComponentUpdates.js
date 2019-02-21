import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        setTimeout(() => {
            console.log("5 Seconds Over, State is set")
            this.setState({
                name: "Anshul"
            })
        }, 5000);
    }
    render() {
        return (
            <ChildComponent name={this.state.name} />
        )
    }
}

class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                name: "Anshul"
            })
        }, 3000);
    }

    componentWillReceiveProps(props) {
        this.setState({
            name: "Anshul"
        })
    }

    render() {
        return <div>My Name is: {this.state.name}  My Props: {this.props.name}</div>
    }
}

ReactDOM.render(<Parent />, document.getElementById("root"))

