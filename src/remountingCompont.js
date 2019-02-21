import React from 'react';
import ReactDOM from 'react-dom';


// Here is this program we can see that when the Parent/Top Component changes.. Then the Components are Unmounted and then Mounted again

// It says if the Top Element is different, then the Application should re-render the Parent Component..

class ChildComponent extends React.Component {
    render() {
        if(this.props.name === "Mayank") {
            return (
                <div>This is First Component: {this.props.name}</div>
            )
        } else {
            return (
                <span>This is the Second Component: {this.props.name}</span>
            )
        }
    }

    componentWillUnmount() {
        alert("Component Unmounted")
    }
}
export default class CallingUnmount extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                name: "Anshul"
            })
        }, 4000)
        
    }

    render() {

        if(this.state.name == "Mayank") {
            return (
                <div>
                    <div><ChildComponent name={this.state.name} /></div>
                </div>
            )
        } else {
            return (
                <p><ChildComponent name={this.state.name} /></p>
            )
        }
        
    }

    componentWillUnmount() {
        alert("Parent Component Unmounted")
    }
        
}

ReactDOM.render(<CallingUnmount />, document.getElementById("root"))

