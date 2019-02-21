import React from 'react';
import ReactDOM from 'react-dom';

class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "Mayank",
            user: {
                firstName: "Mayank",
                lastName: "Gupta"
            }
        }
    }

    componentWillMount() {
        setInterval(() =>{
            this.setState({
                user: {
                    firstName: "Anshul",
                    lastName: "Gupta"
                }
            })
        }, 1000);
    }

    render() {
        return(
            <div>
                <b>This is Regular Component</b>
                <RegularComponent name={this.state.user.firstName} />

                <b>This is Pure Component</b>
                <PureComponentData name={this.state.user.firstName} />
            </div>
        )
    }
}

class RegularComponent extends React.Component {
    render() {
        console.log("Regular Component Rendered");
        return (
            <h1>Name: {this.props.name}</h1>
        )
    }
}


class PureComponentData extends React.PureComponent {
    render() {
        console.log("Pure Component Rendered");
        return (
            <h1>Name: {this.props.name}</h1>
        )
    }
}

ReactDOM.render(<ParentComponent />, document.getElementById("root"))