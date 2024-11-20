import React from 'react';
// import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">

        <div className="hero-text">
          <h1>Find Your Dream Job</h1>
          <p>Explore thousands of job listings from top companies.</p>
        </div>
        <div className="hero-search">
          <input
            type="text"
            className="form-control"
            placeholder="Job title, keywords, or company"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Location"
          />
          <button className="btn-search">Search Jobs</button>
          <button className="btn-post-job">Post a Job</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
