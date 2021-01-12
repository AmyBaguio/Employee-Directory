import React from "react";
import "../styles/SearchBox.css";

const styles = {
  searchBoxStyle: {
  
    
  }
};

function SearchBox(props) {
  return (
    <form>
      <div style={styles.searchBoxStyle} className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchBox;