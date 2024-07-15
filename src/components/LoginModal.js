import React from "react";
import "./LoginModal.scss";
import image from "../assets/images/Logo Shape.png";
import Input from "./Input";
import { MdOutlineMail } from "react-icons/md";
import { IconContext } from "react-icons";
import { MdLockOutline } from "react-icons/md";
import { SlSocialGoogle } from "react-icons/sl";

function LoginModal(props) {
  var placeholder1 = "Email Address";
  var placeholder2 = "Password";

  return (
    <div className="modal-container">
      <div className="modal-logo">
        <img src={image} alt="logo"></img>
        <div>
          <h1 className="modal-title">ZWOOK</h1>
        </div>
      </div>
      <div className="modal-welcome">
        <h2>Welcome Back</h2>
        <p>
          Don't have an account yet? <a href="localhost300">Sign Up</a>
        </p>
      </div>
      <div className="modal-form">
        <IconContext.Provider value={{ color: "#9aa3b2", size: "25px" }}>
          <div className="form-logo">
            <MdOutlineMail />
          </div>
        </IconContext.Provider>
        <Input placeholder={placeholder1} />
      </div>
      <div className="modal-form">
        <IconContext.Provider value={{ color: "#9aa3b2", size: "25px" }}>
          <div className="form-logo">
            <MdLockOutline />
          </div>
        </IconContext.Provider>
        <Input placeholder={placeholder2} />
      </div>
      <div className="modal-button-login">
        <button>Login</button>
      </div>
      <div className="modal-separator">
        <div className="modal-barrier"></div>
        <div className="modal-or">
          <p>or</p>
        </div>
        <div className="modal-barrier"></div>
      </div>
      <div className="modal-button-auth">
        <IconContext.Provider value={{className:"google-button", color: "#9aa3b2", size: "22px"}}>
          <div>
          <SlSocialGoogle />
          </div>
        </IconContext.Provider>
        <button>Authorize with Google</button>
      </div>
    </div>
  );
}

export default LoginModal;
