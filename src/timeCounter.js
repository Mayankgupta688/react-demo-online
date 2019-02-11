import React from "react";
import ReactDOM from 'react-dom';

import './app.css';

setInterval(() => {
    refreshTime();
}, 1000);

function getTime() {
    return new Date().toLocaleTimeString();
}

function refreshTime() {

    var currentTime = getTime();

    ReactDOM.render(<ParentDiv currentTime={currentTime}/>, document.getElementById("root"));
}

function ParentDiv(props) {

    return (
        <div className="app-logo">
            <div>Get Current Time Counter</div>
            <header></header>
            <content>
                <aside></aside>
            </content><br></br>

            <TimeCounter time={props.currentTime} age="10" /><br></br>

            <footer>
                <div>
                    <a style={{ marginRight: "15px" }} href="google.com">Google</a>
                    <a style={{ marginRight: "15px" }} href="gmail.com">Gmail</a>
                    <a href="google.com">Others</a>
                </div>
            </footer>
        </div>
    )
}

function TimeCounter(data) {
    return <div style={{ marginRight: "15px" }} >Current Time Counter: {data.time}</div>
}
