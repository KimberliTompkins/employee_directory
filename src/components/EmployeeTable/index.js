import React from "react";
import "./style.css";

function EmployeeTable(props) {
    
    return (
  
  <tbody>
    <tr>
      <th scope="row">{props.name}</th>
      <td>{props.phone}</td>
      <td>{props.email}</td>
    </tr>
  </tbody>

    );
}
export default EmployeeTable;