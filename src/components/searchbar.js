import React, { useState, useEffect } from "react";

function SearchBar(props) {
  return (
    <div className="searchContainer">
      <input type="text" className="searchBar" placeholder="Search.." />
    </div>
  );
}

export default SearchBar;
