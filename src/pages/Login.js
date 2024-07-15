import React from "react";
import "./Login.scss";
import LoginModal from "../components/LoginModal";

function Login() {
  return (
    <div className="container">
      <div className="main-left">
        <LoginModal />
      </div>
      <div className="main-right"></div>
    </div>
  );
}

export default Login;
