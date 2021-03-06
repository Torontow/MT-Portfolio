import React from "react";

function GreatestHits() {
  return (
    <div className="container">
      <h2>Greatest Hits</h2>
      <p>Click the title to view the project repository.</p>
      <p>Click the image to navigate to the project site.</p>
      <div class="container mb-4">
        <a
          href="https://github.com/keithyyy/WindowShoppin"
          alt="Window Shoppin Repo"
          target="_blank"
        >
          <h4>{} Window Shoppin'</h4>
        </a>
        <div class="project-img">
          <a href="https://window-shoppin.herokuapp.com" target="_blank">
            <img src="images/window-shoppin-img.gif" class="img-fluid" />
          </a>
        </div>
      </div>
      <div class="container mb-4">
        <a Href="https://github.com/Torontow/MT-Burger" target="_blank">
          <h4>{} Eat-Da-Burger!</h4>
        </a>
        <div class="project-img">
          <a
            href="https://aqueous-reaches-61188.herokuapp.com/"
            target="_blank"
          >
            <img src="images/burger.png" class="img-fluid" />
          </a>
        </div>
      </div>
      <div class="container mb-4">
        <a
          href="https://github.com/Torontow/MT-Password_Generator"
          target="_blank"
        >
          <h4>{} Password Generator</h4>
        </a>
        <div>
          <a
            href="https://torontow.github.io/MT-Password_Generator/"
            target="_blank"
          >
            <img src="images/pass-gen-ss.png" class="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default GreatestHits;
