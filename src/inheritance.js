import React from "react";
import ReactDOM from "react-dom";

export default class Employee extends React.Component {
    constructor() {
        super();
        this.randomData = "RandomData";
        this.state = {
            responsibilityList: [],
            employeeName: "Mayank",
            employeeAge: 1
        };
    }

    showEmployeeDetailsHeader() {
        return (
            <h1>This is Employee Data:</h1>
        )
    }

    render() {
        return (
            <div>
                <div>{this.randomData}</div>
                {this.showEmployeeDetailsHeader()}
                <div>Employee Name: {this.state.employeeName}</div>
                
            </div>

        )
    }
}


class Manager extends Employee {

    showEmployeeDetailsHeader() {
        return (
            <div>{super.showEmployeeDetailsHeader()}</div>
        )
    }

    render() {
        debugger;
        return (
            <div>
                {this.showEmployeeDetailsHeader()}
                <h2>This is Manager Data AGe: {this.state.employeeAge}, Name : {this.state.employeeName}</h2>
            </div>
        )
    }
}

ReactDOM.render(<Manager />, document.getElementById("root"))