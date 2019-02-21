import React from "react";
import ReactDOM from "react-dom";

class ForceUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank", age: 10
        }
    }

    componentDidMount() {

        setTimeout(() => {
            console.log("Timeout 5s")
            this.setState({
                age: "30"
            })
        }, 5000);

        setTimeout(() => {
            console.log("Timeout 5s")
            this.setState({
                name: "Anshul"
            })
        }, 5000);
    }



    updateData() {
        this.forceUpdate();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.name !== this.state.name) {
            return true
        }
        return false;
    }

    render() {
        debugger;
        return (
            <div>
                <b>My Name: {this.state.name}</b><br></br><br></br>
                <div>
                    <input type="button" value="Click To Update" onClick={this.updateData.bind(this)} />
                </div>
            </div>
        )
    }
}


ReactDOM.render(<ForceUpdate />, document.getElementById("root"))