import React from "react";
import burger from "../../images/burger.png";
import eTracker from "../../images/etDemo.gif";
import passGen from "../../images/passGen.png";
import workSched from "../../images/workSched.png";
import windowShoppin from "../../images/windowShoppin.gif";
import workoutTracker from "../../images/workoutTracker.gif";
import "./style.css";

function GreatestHits() {
  return (
    <div className="container-fluid mt-2">
      <h2>Greatest Hits</h2>
      <p>Click the title to view the project repository.</p>
      <p>Click the image to navigate to the project site.</p>
      <table className="table mt-2">
        {/* One */}
        <tr>
          <td>
            <div>
              <a
                href="https://github.com/keithyyy/WindowShoppin"
                alt="Window Shoppin Repo"
                target="_blank"
                rel="noreferrer"
              >
                <h3>{} Window Shoppin'</h3>
              </a>
              <div>
                <a
                  href="https://window-shoppin.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={windowShoppin}
                    className="img-fluid project"
                    alt="Window Shoppin GIF"
                  />
                </a>
              </div>
            </div>
          </td>
          <td>
            {/* Two */}
            <div>
              <a
                Href="https://github.com/Torontow/MT-Burger"
                target="_blank"
                rel="noreferrer"
              >
                <h3>{} Eat-Da-Burger!</h3>
              </a>
              <div className="img-fluid project">
                <a
                  href="https://aqueous-reaches-61188.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={burger}
                    className="img-fluid project"
                    alt="Eat Da Burger"
                  />
                </a>
              </div>
            </div>
          </td>
          <td>
            {/* Three */}
            <div>
              <a
                href="https://github.com/Torontow/MT-Password_Generator"
                target="_blank"
                rel="noreferrer"
              >
                <h3>{} Password Generator</h3>
              </a>
              <div>
                <a
                  href="https://torontow.github.io/MT-Password_Generator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={passGen}
                    className="img-fluid project"
                    alt="Password Generator Sample"
                  />
                </a>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            {/* Four */}
            <div>
              <a
                href="https://github.com/Torontow/MT-Password_Generator"
                target="_blank"
                rel="noreferrer"
              >
                <h3>{} Workout Tracker</h3>
              </a>
              <div>
                <a
                  href="https://github.com/Torontow/MT-Workout_Tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={workoutTracker}
                    className="img-fluid project"
                    alt="Workout Tracker GIF"
                  />
                </a>
              </div>
            </div>
          </td>
          <td>
            {/* Five */}
            <div>
              <a
                href="https://github.com/Torontow/MT-Password_Generator"
                target="_blank"
                rel="noreferrer"
              >
                <h3>{} Employee Tracker</h3>
              </a>
              <div>
                <a
                  href="https://github.com/Torontow/MT-Employee_Tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={eTracker}
                    className="img-fluid project"
                    alt="Password Generator Sample"
                  />
                </a>
              </div>
            </div>
          </td>
          <td>
            {/* Six */}
            <div>
              <a
                href="https://github.com/Torontow/MT-Password_Generator"
                target="_blank"
                rel="noreferrer"
              >
                <h3>{} Workday Scheduler</h3>
              </a>
              <div>
                <a
                  href="https://github.com/Torontow/MT-Work_Day_Scheduler"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={workSched}
                    className="img-fluid project"
                    alt="Password Generator Sample"
                  />
                </a>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default GreatestHits;
