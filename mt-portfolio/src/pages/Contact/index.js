import React from "react";
import Row from "../../components/Row";
import Col from "../../components/Col";
import gitHubLogo from "../../images/gitHubLogo.png";
import linkedinLogo from "../../images/linkedinLogo.png";
import "./style.css";

function Contact() {
  return (
    <div className="mt-2">
      <h2>Contact</h2>
      <Row>
        <Col size="2">
          <a
            href="https://github.com/Torontow"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHubLogo} className="img-fluid logo" alt="Git Hub Logo" />
          </a>
        </Col>
        <a
          href="https://www.linkedin.com/in/michael-torontow-67345125/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinLogo} className="img-fluid logo" alt="LinkedIn Logo" />
        </a>
      </Row>
        <h4>Phone: <span className="contact">647-929-2341</span></h4>
        <h4>
          Email: <a href="mailto:mtorontow0@gmail.com" className="contact">mtorontow0@gmail.com</a>
        </h4>
    </div>
  );
}

export default Contact;
