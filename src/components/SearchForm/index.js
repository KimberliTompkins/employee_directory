import React, { Component } from "react";
import "./style.css";
import { render } from "@testing-library/react";

class SearchForm extends Component {
  state = {
    search: ""
  };

handleFormSubmit = event => {
  event.preventDefault();
  alert(event.target.value);
  //console.log(event)
  //const findEmployee = employees.filter(employee => employee.name !== event.search);
  //setEmployees(findEmployee);
};
  render() {
      return (
        <form>
          <div className="form-group">
      
            <input
              value={this.state.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for employee by name"
              id="search"
            />
            <button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
              Search
            </button>
          </div>
        </form>
      );
  
  };
};
export default SearchForm;
