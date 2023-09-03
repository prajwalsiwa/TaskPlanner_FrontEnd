import React from "react";
import "./index.css";

const Register = () => {
  return (
    <div className="register-container">
      <form className="register-form">
        <input type="email" className="email" placeholder="Email" />
        <input type="text" className="r-usernma" placeholder="Username" />
        <input
          type="password"
          className="r-password"
          placeholder="Enter password"
        />
        <input
          type="password"
          className="c-password"
          placeholder="Confirm password"
        />
        <input type="text" name="" placeholder="Organization " />
        <input type="text" placeholder="Sort Organization"/>
        <button className="sign-up">Sign up</button>
      </form>
    </div>
  );
};

export default Register;
