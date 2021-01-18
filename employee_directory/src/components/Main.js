import React, { Component } from "react";
import SearchBox from "./SearchBox";
import DataTable from "./DataTable";
import API from "../utils/API";
import "../styles/Main.css";


class Main extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Random User API to render random employees
  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = () => {
    API.getUsers()
  
      .then(res => this.setState({ results: res.data.results }))
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
        
         <DataTable results={this.state.results} /> 
        
      </div>
    );
  }
}

export default Main;
