import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';

class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props);

        this.styles= { 
            parentDiv: {
                border: '1px solid red',
                margin: '10px',
                padding: '10px'
            }
        }

        this.state = {
            name: "Mayank Gupta",
            counter: 0,
            employeeList: [{    
                name: "a",
                age: 10,
                designation: "D",
            }, {
                name: "b",
                age: 11,
                designation: "D1"
            }, {
                name: "c",
                age: 12,
                designation: "D2"
            }]  
        }

        this.addEmployee = this.addEmployee.bind(this);
    }

    addEmployee() {

        this.setState({
            counter: this.state.counter + 1
        });
        
        this.setState({
            globalData: "New Data",
            name: "Anshul Gupta",
            employeeList: this.state.employeeList.concat({
                name: "a",
                age: 10,
                designation: "D",
                counter: this.state.counter
            })
        })
    }

    render() {

        
        if(this.state.employeeList.length > 0) {

            return (
                
                this.state.employeeList.map((employee, index) => {

                    return (
                        <div key={employee.name}>
                            <div style={this.styles.parentDiv}>
                                <div>
                                    <b>Name: Employee Id {index}</b>
                                </div>
                                <div>
                                    <b>Name: {employee.name}</b>
                                </div>
                                <div>
                                    <b>Age: {employee.age}</b>
                                </div>
                                <div>
                                    <b>Designation: {employee.designation}</b>
                                </div>
                                <input type="button" value="Click To Add Employee" onClick={this.addEmployee} />
                            </div>
                        
                        </div>
                    )
                })
                
            )

        } else {

            return (
                <div>
                    <b>{this.state.name}</b><br></br><br></br>
                    <b>{this.state.globalData}</b><br></br><br></br>
                    <input type="button" value="Click To Add Employee" onClick={this.addEmployee} />
                </div>
            )

        }
    }
}

ReactDOM.render((
    <div>
        <EmployeeDetails />
    </div>
), document.getElementById("root"));