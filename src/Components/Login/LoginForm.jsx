// LoginForm.js
import React from 'react';
import "./LoginForm.css"
const LoginForm = ({ userType }) => {
  return (
    <div className="form-container">
      <h2>{userType === 'jobseeker' ? 'Job Seeker Login' : 'Employer Login'}</h2>
      <div className="input-field">
        <input type="text" placeholder="User ID" required />
      </div>
      <div className="input-field">
        <input type="password" placeholder="Password" required />
      </div>
      <button className="button btn-login">Login</button>
      <div className="form-links">
        <a href="./forgotPassword.html">Forgot Password?</a> |
        <a href="./register.html">Register New User</a>
      </div>
    </div>
  );
};

export default LoginForm;
