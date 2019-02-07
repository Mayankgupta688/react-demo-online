import React from "react";
import ReactDOM from 'react-dom';

setInterval(() => {
    refreshTime();
}, 1000);

function refreshTime() {
    ReactDOM.render(<ParentDiv name="Mayank" age="10" />, document.getElementById("root"));
}

function ParentDiv(props) {

    var currentTime = new Date().toLocaleTimeString();

    return (
        <div>
            <div style={{ 'backgroundColor': '#44014C', 'width': '300px', 'minHeight': '200px'}}>Hello World All</div>
            <header></header>
            <content>
                <aside>{props.name}</aside>
            </content>

            <TimeCounter time={currentTime} /><br></br>
            <TimeCounter time={currentTime} /><br></br>

            <footer>
                <div>
                    <a style={{ backgroundColor: "#44014C" }} href="google.com">Home</a>
                    <a style={{ backgroundColor: "#44014C" }} href="gmail.com">Home</a>
                    <a style={{ backgroundColor: "#44014C" }} href="google.com">Home</a>
                </div>
            </footer>
        </div>
    )
}

function TimeCounter(props) {
    props.time = "Mayank";
    return <div>Current Time Counter: {props.time}</div>
}
