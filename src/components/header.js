import React from "react";
import SearchBar from "./searchbar";

import { Link } from "react-router-dom";
function header() {
  return (
    <nav className="header">
      <Link to="/">
        <h1>Elisa logo</h1>
      </Link>
      <SearchBar />
      <ul>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/favorites">favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default header;
