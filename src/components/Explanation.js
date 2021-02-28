import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ name }) => {
  return (
    <>
      <h5 className="card-title mt-4">
        Hi <strong>{name}</strong>!
      </h5>
      <p className="card-text">
        Vasil has a <strong>Birthday</strong> soon and he would like{" "}
        <strong>you</strong> to be part of it.
        <br />
        Prove him that you are a worthy guest by answering a simple question.
      </p>
      <p className="mt-5">
        <strong>If your answer is:</strong>
      </p>
      <ul style={{ listStyle: "none" }} className="left">
        <li>
          <p>
            <span style={{ color: "green", textDecoration: "underline" }}>
              CORRECT
            </span>
            - Vasil will be happy and you will receive all the necessary
            information for the event.
          </p>
        </li>
        <li>
          <p>
            <span style={{ color: "red", textDecoration: "underline" }}>
              WRONG
            </span>
            - give Vasil a call and he will decide if he still want's you as a
            friend.
          </p>
        </li>
      </ul>

      <Link to="quiz/" className="btn btn-primary">
        Start
      </Link>
    </>
  );
};

export default Quiz;
