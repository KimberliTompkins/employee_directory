import React, { useState } from "react"; // importing 'useState' to give us the hooks functionality
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
// import SearchForm from "./components/SearchForm"
import employeeList from "./employees.json";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState(employeeList);
  
  const [searchState, setSearchState] = useState("");
  const { searchTerm } = searchState;
  
  const handleInputChange = e => {
    const { name, value} = e.target;
    setSearchState({...searchState, [name]: value});
    
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    const findEmployee = employees.filter(employee => employee.name === searchTerm);
    setEmployees(findEmployee);
  };
  return (
    <Wrapper>
      <h1 className="title">Employee Directory</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            value={searchTerm}
            name="searchTerm"
            type="text"
            className="form-control"
            placeholder="Search for employee by name"
            id="search"
            onChange={handleInputChange}
          />
          <button
            className="btn btn-primary mt-3"
          >
            Search
          </button>
        </div>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {employees.map((employee) => (
          <EmployeeTable
            key={employee.id}
            name={employee.name}
            phone={employee.phone}
            email={employee.email}
          />
        ))}
      </table>
    </Wrapper>
  );
};

export default App;
