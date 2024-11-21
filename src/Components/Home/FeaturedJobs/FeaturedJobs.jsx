// FeaturedJobs.jsx
import React from 'react';
import JobCard from './JobCard';  // Import the JobCard component
import './FeaturedJobs.css';  // Import the CSS for styling

function FeaturedJobs() {
  return (
    <section className="featured-jobs section">
      <div className="container">
        <h2>Featured Jobs</h2>
        <div className="job-cards">
          {/* Use JobCard component for each job listing */}
          <JobCard 
            title="Software Engineer"
            company="Company XYZ"
            location="San Francisco, CA"
            description="Short description of the job."
          />
          <JobCard 
            title="Product Manager"
            company="Company ABC"
            location="New York, NY"
            description="Short description of the job."
          />
          {/* Add more JobCard components as needed */}
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;
