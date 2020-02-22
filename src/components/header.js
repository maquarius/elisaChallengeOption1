import React from "react";
import SearchBar from "./searchbar";
function header() {
  return (
    <div className="header">
      <h1>Elisa logo</h1>
      <SearchBar />
      <p className="tab">Live programs</p>
      <p className="tab">Schedules</p>
      <p className="tab">Your favorites</p>
    </div>
  );
}

export default header;
