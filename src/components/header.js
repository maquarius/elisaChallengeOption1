import React from "react";
import SearchBar from "./searchbar";

import { Link } from "react-router-dom";
function header() {
  return (
    <nav className="header">
      <Link style={{ textDecoration: "none", color: "blue" }} to="/">
        <h1>Elisa logo</h1>
      </Link>
      <ul className="listContainer">
        <li>
          <Link style={{ textDecoration: "none", color: "blue" }} to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "blue" }}
            to="/schedule"
          >
            Schedule
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "blue" }}
            to="/favorites"
          >
            favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default header;
