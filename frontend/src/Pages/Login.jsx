import React from "react";
import { Link } from "react-router-dom";  // <-- import Link here
import "./Login.css";

export default function Login() {
  return (
    <div id="sign" className="sign-container">
      <div className="sign-box">
        <h2 className="sign-title">Sign In</h2>
        <form className="sign-form">
          <input
            type="email"
            placeholder="Email"
            required
            className="sign-input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="sign-input"
          />
          <button type="submit" className="sign-button">
            Sign In
          </button>
          <p className="sign-footer">
            Don't have an account?{" "}
            <Link to="/signup" className="sign-link">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
