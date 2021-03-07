import React from "react";
import iris from "../../images/iris.jpg"
import "./style.css"

function Header() {
  return (
    <div className="container-fluid mt-2" id="header">
      <div className="row">
        <div className="col-10">
          <h1>Michael Torontow</h1>
        </div>
        <div className="col-2 m-auto">
          <a href="http://www.michaeltorontow.com" target="_blank" rel="noreferrer">
            <img src={iris} class="img-fluid rounded-circle" alt="Iris" id="iris"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
