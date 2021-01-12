//import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from "../src/components/Nav";
import Header from "../src/components/Header";
import SearchBox from "../src/components/SearchBox";
import Main from "../src/components/Main";
import Wrapper from "../src/components/Wrapper";

function App() {
  return (
    <div>
      <Navbar />
      <Header/>
      <Wrapper>
      <SearchBox/>
     
      </Wrapper>
    </div>
  );
}

export default App;
