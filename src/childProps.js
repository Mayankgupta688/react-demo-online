import React from "react";
import ReactDOM from "react-dom";

function EmployeeDetails(props) {
    return (
        <div>
            <div>Hello World, I am Mayank Gupta {props.name}</div>
            <div>{props.children}</div>
        </div>
    )
}


class ParentContainer extends React.Component {
    render() {
        return (
            <div>
                <EmployeeDetails name="Mayank">
                    <p>This is Demo Paragraph {this.props.name}</p>
                    <p>This is React Session</p>
                    <p>Hello Sandeep and Tanya</p>
                </EmployeeDetails><hr></hr>

                <EmployeeDetails name="Anshul">
                    <p>This is Second Session {this.props.name}</p>
                </EmployeeDetails>
            </div>
        )
    }
}

ReactDOM.render(<ParentContainer name="Meha" />, document.getElementById("root"))