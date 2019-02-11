import React from "react";
import ReactDOM from 'react-dom';

import './app.css';

function getTime() {
    return new Date().toLocaleTimeString();
}


class ParentDiv extends React.Component {

    constructor() {
        super();

        this.state = {
            time: (new Date().toLocaleTimeString())
        }

        this.handleClick = function() {
            alert(this.state.time);
        }.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: (new Date().toLocaleTimeString())
            });
        }, 1000)
    }

    render() {
        return (
            <div className="app-logo">
                <div>Get Current Time Counter</div>
                <header></header>
                <content>
                    <aside>{this.state.time}</aside>
                </content><br></br>

                <TimeCounter time={this.state.time} age="10" /><br></br>

                <input type="button" onClick={this.handleClick} value="Click" /><br></br><br></br>

                <button onClick={this.activateLasers}>
                    Activate Lasers
                </button>

                <footer>
                    <div>
                        <a style={{ marginRight: "15px" }} href="google.com">Google</a>
                        <a style={{ marginRight: "15px" }} href="gmail.com">Gmail</a>
                        <a href="google.com">Others</a>
                    </div>
                </footer>
            </div>
        );
    }
}

function TimeCounter(props) {
    return <div style={{ marginRight: "15px" }} >Current Time Counter: {props.time}</div>
}

ReactDOM.render(<ParentDiv />, document.getElementById("root"));



