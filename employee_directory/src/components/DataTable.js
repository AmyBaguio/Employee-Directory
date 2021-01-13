import React from "react";
import "../styles/DataTable.css";

const styles = {
  dataTableStyle: {
    backgroundColor: "white"
     
  }
};

function DataTable(props) {
  return (
    <table>
      <div style={styles.dataTableStyle} className="table">
        // Displays the heading/label at the top;
        Image - Name - Phone - Email(clickable) -DOB
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
        </tr>
        <tr>
        // Displays the results when the keyword is typed    
        </tr>
      </div>
    </table>
  );
}

export default DataTable;