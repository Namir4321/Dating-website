import React, { useState } from "react";
import Sahil1 from '../noida_com/images/Sahil1.jpeg'
import Button from "react-bootstrap/Button";
import './Sahil.css'
export default function (props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div
        style={{
          marginTop: "-38px",
          backgroundSize: "20%",
          height: "470px",
          backgroundImage: `url(${Sahil1})`,
        }}
        className="Auth-form-container"
      >
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">
              Welcome Back, <br></br>Sign In
            </h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label></label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Username or Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label></label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-center mt-2">
              <a href="#">Forgot Password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: "-38px",
        backgroundSize: "20%",
        height: "470px",
        backgroundImage: `url(${Sahil1})`,
      }}
      className="Auth-form-container"
    >
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label></label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Full Name"
            />
          </div>

          <div className="form-group mt-3">
            <label></label>
            <input
              type="Username or email"
              className="form-control mt-1"
              placeholder="Username or Email"
            />
          </div>
          <div className="form-group mt-3">
            <label></label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>

          <>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Button variant="primary" size="sm">
                Female
              </Button>{" "}
              <Button variant="primary" size="sm">
                Male
              </Button>
            </div>
          </>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p className="text-center mt-2">
            <a href="#forget password"></a>
          </p>
        </div>
      </form>
    </div>
  );
}