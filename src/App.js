import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./containers/Home";
import Quiz from "./containers/Quiz";
import Result from "./containers/Result";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="container app mb-4">
        <div className="row">
          <div className="col-12 center">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/result" component={Result} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
