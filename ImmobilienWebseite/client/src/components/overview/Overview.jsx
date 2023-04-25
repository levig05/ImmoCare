import React from "react";
import "./overview.css";
import testimmo from "../assets/testimmo.jpeg";

function Overview() {
  return (
    <div className="overview">
      <div class="card">
        <img src={testimmo} alt="Immobilie" width="100%"></img>
        <div class="container">
          <h4>
            <b>Wohnhaus 1</b>
          </h4>
          <p>Beispieladresse 123</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
