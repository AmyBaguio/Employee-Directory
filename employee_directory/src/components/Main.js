import React, { Component } from "react";
import SearchBox from "./SearchBox";
//import ResultList from "./ResultList";
import API from "../utils/API";

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
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default Main;
