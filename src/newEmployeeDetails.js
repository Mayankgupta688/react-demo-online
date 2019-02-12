import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';

class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeList: [], 
            newEmployeeName: "",
            newEmployeeAge: 0,
            newEmployeeDesignation: ""
        }

        this.styles= { 
            parentDiv: {
                border: '1px solid red',
                margin: '10px',
                padding: '10px'
            }, newEmployee: {
                border: '1px solid red',
                margin: '10px',
                padding: '10px'
            }   
        }

        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount() {
        axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }

    deleteEmployee(empId) {
        alert(`Deleting Employee with Id ${empId}`);

        var employeeList = this.state.employeeList;

        var newEmpList = employeeList.filter((employee) => {
            if(employee.id !== empId) {
                return true;
            } else return false;
        })
        this.setState({
            employeeList: newEmpList
        })
    }

    getEmployeeList() {
        return this.state.employeeList.map((employee, index) => {
            return (
                <div key={employee.name}>
                    <div style={this.styles.parentDiv}>
                        <div>
                            <b>Id: {employee.id}</b>
                        </div>
                        <div>
                            <b>Name: {employee.name}</b>
                        </div>
                        <div>
                            <b>Age: {employee.age}</b>
                        </div>
                        <div>
                            <b>Designation: {employee.designation}</b>
                        </div><br></br>
                        <input type="button" value="Delete Employee" onClick={() => this.deleteEmployee(employee.id)} />
                    </div>
                
                </div>
            )
        })
    }

    addEmployee() {
        this.setState({
            employeeList: this.state.employeeList.concat({
                id: this.state.employeeList.length + 1,
                name: this.state.newEmployeeName,
                age: this.state.newEmployeeAge,
                designation: this.state.newEmployeeDesignation
            }),
            newEmployeeName: '',
            newEmployeeAge: '',
            newEmployeeDesignation: ''
        })
    }

    handleInput(event) {
        if(event.target.classList.contains("emp-age")) {
            this.setState({
                newEmployeeAge: event.target.value
            })
        } else if(event.target.classList.contains("emp-name")) {
            this.setState({
                newEmployeeName: event.target.value
            })
        } else {
            this.setState({
                newEmployeeDesignation: event.target.value
            })
        }
    }

    render() {
        if(this.state.employeeList.length > 0) {
            return (
                <div>
                    <div style={this.styles.newEmployee}>
                        <b>Add New Employee</b>
                        <div>
                            <p>Enter Name: <input type="text" className="emp-name" value={this.state.newEmployeeName} onChange={(e) => this.handleInput(e)} /></p>
                        </div>
                        <div>
                            <p>Enter Age: <input type="text" className="emp-age" value={this.state.newEmployeeAge} onChange={(e) => this.handleInput(e)} /></p>
                        </div>
                        <div>
                            <p>Enter Designation: <input type="text" className="emp-designation" value={this.state.newEmployeeDesignation} onChange={(e) => this.handleInput(e)} /></p>
                        </div>

                        <input type="button" value="Click To Add" onClick={this.addEmployee} />
                    </div><br></br>
                    {this.getEmployeeList()}
                </div>
            )

        } else {
            return (
                <div>Rendering User Data.....</div>
            )

        }
    }
}

ReactDOM.render((
    <div>
        <EmployeeDetails />
    </div>
), document.getElementById("root"));