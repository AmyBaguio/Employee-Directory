//import logo from './logo.svg';
import React from "react";
import Navbar from "../src/components/Nav";
import Header from "../src/components/Header";
import SearchBox from "../src/components/SearchBox";
import Main from "../src/components/Main";


function App() {
  return (
    <div>
      <Navbar />
      <Header/>
      <SearchBox/>
      <Main/>
    </div>
  );
}

export default App;
