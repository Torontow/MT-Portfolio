import React from "react";
import iris from "../../images/iris.jpg"

function Header() {
  return (
    <div className="container-fluid m-4 shadow" id="header">
      <div className="row">
        <div className="col-11">
          <h1>Michael Torontow</h1>
        </div>
        <div className="col-1 m-auto justCenter">
          <a href="http://www.michaeltorontow.com" target="_blank">
            <img src={iris} class="img-fluid border-rounded border-" alt="Iris" id="iris"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
