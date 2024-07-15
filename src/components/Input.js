import React from "react";
import "./Input.scss";

function Input(props) { 

  return (
    <div>
    <div className="input-container">
      <input type="text" placeholder={props.placeholder} className="input-form"></input>
    </div>
    </div>
  );
}

export default Input;
