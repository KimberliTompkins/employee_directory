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

  const [sortState, setSortState] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchState({ ...searchState, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const findEmployee = employees.filter(
      (employee) => employee.name === searchTerm
    );
    setEmployees(findEmployee);
  };

  const handleSort = (type) => {
    const types = {
      name: "name",
      phone: "phone",
      email: "email",
    };
    const sortProperty = types[type];
 
    alert(sortProperty);
    const sorted = [...employees].sort(
      (a, b) => a[sortProperty] > b[sortProperty] ? 1 : -1
    );
    console.log(sorted);
    setEmployees(sorted);
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
            placeholder="Search by full name"
            id="search"
            onChange={handleInputChange}
          />
          <button className="btn btn-primary mt-3">Search</button>
        </div>
      </form>
      <div>
        <h6> sort by:</h6>
        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="name">Name</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name </th>
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
