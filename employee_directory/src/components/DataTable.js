import React from "react";
import "../styles/DataTable.css";
import Table from 'react-bootstrap/Table'

const styles = {
  dataTableStyle: {
    backgroundColor: "white"
     
  }
};

// function ResultList(props) {
//   return (
//     <ul className="list-group">

//     </ul>
//   );
// }

function DataTable(props) {
  // if(props.results){
  // console.log(props.results.map(i=> i.name.last))}
  console.log(props.results);
  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Phone</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
  </thead>
  <tbody>
  {props.results.map(result => (
    <tr key ={result.name.last}>
    <td>{result.name.first}</td>
    <td>{result.name.last}</td>
    <td>{result.cell}</td>
    <td>{result.email}</td>
    <td>{result.dob.age}</td> 
  </tr>    
      ))}
    
  </tbody>
</Table>
  );
}

export default DataTable;