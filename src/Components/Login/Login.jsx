import React, { useState } from 'react';
// import './Login.css';

const Login = () => {
  const [userType, setUserType] = useState('jobseeker'); // State to manage user type

  const showForm = (type) => {
    setUserType(type);
  };

  return (
    <div className="container login-container">
      <h1>Login</h1>

      {/* User Type Buttons */}
      <div className="buttons">
        <button className="button" onClick={() => showForm('jobseeker')}>
          Login as Job Seeker
        </button>
        <button className="button" onClick={() => showForm('employer')}>
          Login as Employer
        </button>
      </div>

      {/* Job Seeker Login Form */}
      {userType === 'jobseeker' && (
        <div id="jobseeker-form" className="form-container active">
          <h2>Job Seeker Login</h2>
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
      )}

      {/* Employer Login Form */}
      {userType === 'employer' && (
        <div id="employer-form" className="form-container">
          <h2>Employer Login</h2>
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
      )}
    </div>
  );
};

export default Login;
