import React from "react";
import "./Playbar.scss";

function Playbar(props) { 

  return (
    <div className="playbar-main">
    <div className="playbar-container">
      <input type="text" placeholder={props.placeholder} className="input-form"></input>
    </div>
    </div>
  );
}

export default Playbar;
