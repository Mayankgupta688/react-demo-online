import React from "react";
import ReactDOM from 'react-dom';

setInterval(() => {
    refreshTime();
}, 1000);

function refreshTime() {
    ReactDOM.render(<ParentDiv />, document.getElementById("root"));
}

function ParentDiv() {

    var currentTime = new Date().toLocaleTimeString();

    return (
        <div>
            <header></header>
            <content>
                <aside></aside>
                <div>Hello World</div>
            </content>

            <TimeCounter time={currentTime} /><br></br>

            <footer>
                <div>
                    <a href="google.com">Home</a>
                    <a href="gmail.com">Home</a>
                    <a href="google.com">Home</a>
                </div>
            </footer>
        </div>
    )
}

function TimeCounter(props) {
    return <div>Current Time Counter: {props.time}</div>
}
