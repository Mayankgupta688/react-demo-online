import React from "react";
import ReactDOM from 'react-dom';
import axios from "axios";

class EmployeeList extends React.Component {
    constructor() {
        super();

        this.state = {
            employeeDetailList: [],
            newName: "Dummy Name",
            newCreatedAt: "Dummy Date"
        }

        this.styles = {
            employeeDetails: {
                padding: '10px',
                margin: '10px',
                border: '1px solid red'
            }, addEmployee: {
                padding: '10px',
                margin: '10px',
                border: '1px solid red'
            }
        }

    }

    componentDidMount() {
        axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            this.setState({
                employeeDetailList: response.data
            })
        })
    }

    deleteEmployee = (employeeId) => {
        alert("Employee Id to be deleted: " + employeeId);

        var newEmployeeList = this.state.employeeDetailList.filter((employee) => {
            if(employee.id === employeeId) {
                return false;
            } else {
                return true;
            }
        })

        this.setState({
            employeeDetailList: newEmployeeList
        });

    }

    addEmployee = () => {
        this.setState({
            employeeDetailList: [...this.state.employeeDetailList, {
                id: this.state.employeeDetailList.length + 1,
                name: this.state.newName,
                createdAt: this.state.newCreatedAt
            }], 
            newName: "",
            newCreatedAt: ""
        })
    }

    iterateEmployees() {

        var outputJSX = this.state.employeeDetailList.map((employee) => {
            return (
                <div style={this.styles.employeeDetails} key={employee.id}>
                    <div>Id: {employee.id}</div>
                    <div>Name: {employee.name}</div>
                    <div>Created At: {employee.createdAt}</div><br></br>
                    <input type="button" value="Delete" onClick={(e) => this.deleteEmployee(employee.id)} />
                </div>
            )
        })

        return outputJSX;
    }

    handleInput(event) {
        this.setState({
            [event.target.attributes["data-property"].value]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div style={this.styles.addEmployee}>
                    <div>
                        Add Name: <input type="text" data-property="newName" value={this.state.newName} onChange={(e) => this.handleInput(e)}></input>
                    </div><br></br>
                    <div>
                        Add CreatedAt: <input type="text" data-property="newCreatedAt" className="user_created_by" value={this.state.newCreatedAt} onChange={(e) => this.handleInput(e)}></input>
                    </div><br></br>
                    <div>
                        <input type="button" value="Add Employee" onClick={this.addEmployee} />
                    </div>
                </div>
                <div>{this.iterateEmployees()}</div>
            </div>
        )
    }
}

ReactDOM.render(<EmployeeList />, document.getElementById("root"))