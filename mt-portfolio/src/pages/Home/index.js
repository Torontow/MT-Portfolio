import React from "react";
import Row from "../../components/Row";
import "./style.css";

function Quote() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <blockquote className="blockquote text-right">
            <h5>
              “The Hero is the human being who dares descend into the darkest
              depths of the unconscious—the very source of our creative
              power—and there confronts the monsters thrown up by the
              fright-stricken infant psyche.”
            </h5>

            <footer className="blockquote-footer">
              Joseph Campbell{" "}
              <cite title="The Hero with 1000 Faces">
                The Hero With 1000 Faces
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
      <Row>
        <div className="col-12 mt-5 text-center title">
          <h1>Web Developer</h1>
        </div>
      </Row>
    </div>
  );
}

export default Quote;
