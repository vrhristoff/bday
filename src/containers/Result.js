import React from "react";
import success from "../images/success.png";

const Result = () => {
  return (
    <>
      <div className="card">
        <img
          className="card-img-top m-auto"
          src={success}
          alt="Success"
          style={{ maxWidth: "500px" }}
        />
        <div className="card-body">
          <h5 className="card-title mt-4">
            Look...you are a <strong>Winner</strong>!
          </h5>
          <p className="card-text mb-4">
            It doesn't matter if you guessed the answer or not (it is 24 by the
            way), here is all the necessary information for the event:
            <br />
          </p>
          <ul style={{ listStyle: "none" }} className="center no-pl">
            <li>
              <p>
                <strong>Sat 06/03/2021</strong>
              </p>
            </li>
            <li>
              <p>
                <strong>Happy House</strong>
              </p>
            </li>
            <li>
              <p>
                <strong>19:15</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Result;
