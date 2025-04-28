import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  searchBar: {
    marginBottom: "20px",
    textAlign: "center"
  },
  input: {
    padding: "10px",
    width: "80%",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px"
  }
};

export default SearchBar;
