import React, { useState } from "react";
import bday from "../images/bday.png";
import Explanation from "../components/Explanation";

const Home = () => {
  const state = [
    "Alexandar",
    "Apostol",
    "Maria",
    "Jose",
    "Magdalena",
    "Mihaela",
  ];
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (name) {
      state.includes(name)
        ? setAuth(true)
        : setError("No such first name found! :)");
    } else {
      setError("Please enter your first name! :)");
    }
  };

  return (
    <>
      <div className="card">
        <img
          className="card-img-top m-auto"
          src={bday}
          alt="Birthday cake"
          style={{ maxWidth: "500px" }}
        />
        <div className="card-body">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label className="mb-2" htmlFor="name">
                Please enter your first name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <small className="text-danger">{error}</small>

          {auth && <Explanation name={name} />}
        </div>
      </div>
    </>
  );
};

export default Home;
