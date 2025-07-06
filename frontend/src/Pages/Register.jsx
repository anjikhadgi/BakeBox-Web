// src/components/SignUp.jsx
import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create Account</h2>
        <form className="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="signup-input"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="signup-input"
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <p className="signup-footer">
            Already have an account?{" "}
            <a href="/login" className="signup-link">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
