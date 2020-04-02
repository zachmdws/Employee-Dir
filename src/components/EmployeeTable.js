import React from "react";



function EmployeeTable(props) { 
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope ="col">Image</th>
                    <th scope ="col">Name</th>
                    <th scope ="col">Phone</th>
                    <th scope ="col">Email</th>
                    <th scope ="col">DOB</th>
                </tr>
            </thead>
            <tbody>
            {props.results.map(result => (
                <tr>
                 <td><img src= {result.picture.medium}/></td>
                 <td>{result.name.first} {result.name.last}</td>
                 <td>{result.cell}</td>
                 <td>{result.email}</td>
                 <td>{(result.dob.date).slice(0, 10)}</td>
                </tr>
                    ))}
                
            </tbody>
        </table>
    )
}


export default EmployeeTable;