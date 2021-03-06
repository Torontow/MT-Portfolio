import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <ul className="nav justify-content-center">
        {/* <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/greatesthits">
            Greatest Hits
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
