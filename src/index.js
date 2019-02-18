import React from "react";
import ReactDOM from "react-dom";

class MyLifeCycle extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }
    }

    render() {
        return <div>My Name: {this.state.name}</div>
    }

    componentWillMount() {
        alert("My Component is going to be Mounted")
    }

    componentDidMount() {
        alert("This Component got Mounted");

        setTimeout(() => {
            alert("Changing Data")
            this.setState({
                name: 'Anshul'
            })
        }, 5000)
    }

    componentWillUpdate() {
        alert("This Component Chnged the State")
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidUpdate() {
        alert("Component is Updated..")
    }

    componentWillUnmount() {
        
    }

    

    
}

ReactDOM.render(<MyLifeCycle />, document.getElementById("root"))