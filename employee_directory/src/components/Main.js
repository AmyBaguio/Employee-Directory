import React, { Component } from "react";
import SearchBox from "./SearchBox";
import DataArea from "./DataArea";
//import DataBody from "./DataBody";
//import DataTable from "./DataTable";
import API from "../utils/API";
import "../styles/Main.css";

class Main extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Random User API to render random employees
  componentDidMount() {
    this.searchEmployee("employees");
  }

  searchEmployee = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Random Users API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchBox
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <DataArea results={this.state.results} />
      </div>
    );
  }
}

export default Main;
