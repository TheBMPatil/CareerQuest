// JobCard.jsx
import React from 'react';
import './JobCard.css'; // Import separate CSS for job card styling

function JobCard({ title, company, location, description }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p className="company-name">{company}</p>
      <p className="location">{location}</p>
      <p className="job-description">{description}</p>
      <button className="btn-apply">Apply Now</button>
    </div>
  );
}

export default JobCard;
