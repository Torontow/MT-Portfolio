import React from "react";

function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <a href="https://github.com/Torontow" target="_blank">
        <img
          src="images/GitHub.png"
          class="img-fluid cont"
          alt="Responsive image"
          id="github-logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/michael-torontow-67345125/"
        target="_blank"
      >
        <img src="images/LI-In-Bug.png" class="img-fluid cont" />
      </a>
      <h4>Phone: 647-929-2341</h4>
      <h4>
        Email: <a href="mailto:mtorontow0@gmail.com">mtorontow0@gmail.com</a>
      </h4>
      <h2>Spy the Resume...</h2>
      <a href="MT-Web-Resume.pdf" download="MT-Web-Resume.pdf">
        <img
          src="images/iris.jpg"
          class="img-fluid"
          alt="Responsive image"
          id="iris"
        />
      </a>
    </>
  );
}

export default Contact;
