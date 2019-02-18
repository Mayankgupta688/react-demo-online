import React from "react";
import ReactDOM from 'react-dom';
import axios from "axios";

class AddEmployee extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: "",
            newCreatedAt: ""
        }

        this.addEmployeeFromChild = this.addEmployeeFromChild.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({
            [event.target.attributes["data-property"].value]: event.target.value
        });
    }

    addEmployeeFromChild() {
        debugger;
        this.props.addEmployee(this.state.newUser, this.state.newCreatedAt);
    }

    render() {
        return (
            <div>
                <div>
                    Add Name: <input type="text" data-property="newUser" value={this.state.newUser} onChange={(e) => this.handleInput(e)}></input>
                </div><br></br>
                <div>
                    Add CreatedAt: <input type="text" data-property="newCreatedAt" className="user_created_by" value={this.state.newCreatedAt} onChange={(e) => this.handleInput(e)}></input>
                </div><br></br>
                <div>
                    <input type="button" value="Add Employee" onClick={this.addEmployeeFromChild} />
                </div>
            </div>
        )
    }
}


class EmployeeList extends React.Component {
    constructor() {
        super();

        this.state = {
            employeeDetailList: []
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
        });
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

    addEmployee = (name, createdAt) => {
        this.setState({
            employeeDetailList: [...this.state.employeeDetailList, {
                id: this.state.employeeDetailList.length + 1,
                name: name,
                createdAt: createdAt
            }]
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

    render() {
        return (
            <div>
                <div style={this.styles.addEmployee}>
                    <AddEmployee addEmployee={this.addEmployee} />
                </div>
                <div>{this.iterateEmployees()}</div>
            </div>
        )
    }
}



ReactDOM.render(<EmployeeList />, document.getElementById("root"))