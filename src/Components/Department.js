import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export class Department extends Component {

    // Declare the Constructor
    constructor(props) {
        super(props);
        this.state = { deps: [] }
    }
    //Life Cycle Method
    componentDidMount() {
        this.refreshList();
    }
    //Add Damy Values
    refreshList() {
        this.setState({
            deps: [{ "DepartmentId": 1, "DepartmentName": "Finance" },
            { "DepartmentId": 2, "DepartmentName": "IT" }]
        })
    }

    render() {
        //Declare
        const { deps } = this.state;
        return (
            /*           <div className="mt-5 d-flex justify-content-left">
                            <h3>Welcome to Department Page.</h3>
                        </div> */
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>DepartmentId</th>
                        <th>DepartmentName</th>
                    </tr>
                </thead>
                <tbody>
                    {deps.map(dep =>
                        <tr>
                            <td>{dep.DepartmentId}</td>
                            <td>{dep.DepartmentName}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        )
    }
}