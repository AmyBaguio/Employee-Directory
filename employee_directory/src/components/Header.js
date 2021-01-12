import React from "react";
import "../styles/Header.css";

const styles = {
    headerStyle: {
        background: "teal",
        padding: "20px"
    },
    h1Style: {
        fontsize: 100,
    }
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Click on carrots to filter by heading or use te search box to narrow your results.</h1>
    </header>
  );
}

export default Header;
