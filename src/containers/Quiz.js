import React, { useState } from "react";
import question from "../images/question.png";
import { Redirect } from "react-router-dom";

const Quiz = () => {
  const [answer, setAnswer] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer) {
      setRedirect(true);
    } else {
      alert("Type something. Don't be affraid! :)");
    }
  };

  return (
    <>
      <div className="card">
        <img
          className="card-img-top m-auto"
          src={question}
          alt="Birthday cake"
          style={{ maxWidth: "500px" }}
        />
        <div className="card-body">
          <h5 className="card-title mt-4">How much is factorial(4)?</h5>
          <p className="card-text mb-4">You know I am a nerd...</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            {redirect && (
              <Redirect
                to={{
                  pathname: "/result",
                  state: { answer },
                }}
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Quiz;
