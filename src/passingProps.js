import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App name="Mayank Gupta" age="10" />, document.getElementById('root'));

function App(props) {

    var description = "Employee";

    function showData() {
        return props.name + " " + props.age;
    }

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h3>Description: {description}</h3>
            <h4>User Details: {showData()}</h4>
        </div>
    )
}
