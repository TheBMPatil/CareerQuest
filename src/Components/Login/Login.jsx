
import React, { useState } from 'react';
import UserTypeButtons from './UserTypeButtons.jsx';
import LoginForm from './LoginForm';
import './Login.css';
import Navbar from '../Home/Navbar/Navbar.jsx';

const Login = () => {
  const [userType, setUserType] = useState('jobseeker'); // State to manage user type

  const showForm = (type) => {
    setUserType(type);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="login-container">

          <h1>Login</h1>

          {/* User Type Buttons */}
          <UserTypeButtons onUserTypeChange={showForm} />

          {/* Login Form */}
          <LoginForm userType={userType} />
        </div>
      </div>
    </>
  );
};

export default Login;
