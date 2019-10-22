import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import "../css/App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/sample">SAMPLE</Link>
      </header>
    </div>
  );
};

export default App;
