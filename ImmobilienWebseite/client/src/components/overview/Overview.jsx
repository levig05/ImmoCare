import React from "react";
import "./overview.css";
import testimmo from "../assets/testimmo.jpeg";
import { useNavigate } from "react-router-dom";

function Overview() {
  const navigate = useNavigate();
  const Bearbeiten = () => {
    navigate("/Reac");
  };

  return (
    <div className="overview">
      <div class="card">
        <img src={testimmo} alt="Immobilie" width="100%"></img>
        <div class="container">
          <h4>
            <b>Wohnhaus 1</b>
          </h4>
          <p>Beispieladresse 123</p>
          <button onClick={Bearbeiten}>Bearbeiten</button>
        </div>
      </div>
    </div>
  );
}

export default Overview;
