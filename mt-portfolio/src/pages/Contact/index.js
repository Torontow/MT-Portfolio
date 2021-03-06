import React from "react";
import gitHubLogo from "../../images/gitHubLogo.png";
import linkedinLogo from "../../images/linkedinLogo.png";

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <a href="https://github.com/Torontow" target="_blank" rel="noreferrer">
        <img
          src={gitHubLogo}
          className="img-fluid rounded-circle"
          alt="Git Hub Logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/michael-torontow-67345125/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={linkedinLogo}
          className="img-fluid rounded-circle"
          alt="LinkedIn Logo"
        />
      </a>
      <h4>Phone: 647-929-2341</h4>
      <h4>
        Email: <a href="mailto:mtorontow0@gmail.com">mtorontow0@gmail.com</a>
      </h4>
    </div>
  );
}

export default Contact;
