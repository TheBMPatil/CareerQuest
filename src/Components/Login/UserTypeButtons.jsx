// UserTypeButtons.js
import React from 'react';
import "./UserTypeButtons.css"
const UserTypeButtons = ({ onUserTypeChange }) => {
  return (
    <div className="buttons">
      <button className="button" onClick={() => onUserTypeChange('jobseeker')}>
        Login as Job Seeker
      </button>
      <button className="button" onClick={() => onUserTypeChange('employer')}>
        Login as Employer
      </button>
    </div>
  );
};

export default UserTypeButtons;
