import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="nav flex-columnn justify-content-end">
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/greatesthits"
          style={{ color: "darkslategray", textShadow: "1px 1px black" }}
        >
          Greatest Hits
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="contact"
          style={{ color: "darkslategray", textShadow: "1px 1px black" }}
        >
          Reach Out
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/"
          style={{ color: "darkslategray", textShadow: "1px 1px black" }}
        >
          Bring Me Home
        </Link>
      </li>
    </nav>
  );
}

export default Navbar;
