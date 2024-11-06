import React from 'react'
const Hero = () => {
  return (
    // < !--Hero Section-- >
    <section class="hero">
      <div class="container">
        <div class="hero-text">
          <h1>Find Your Dream Job</h1>
          <p>Explore thousands of job listings from top companies.</p>
          <div class="hero-search">
            <input
              type="text"
              class="form-control"
              placeholder="Job title, keywords, or company"
            />
            <input type="text" class="form-control" placeholder="Location" />
            <button class="btn-search">Search Jobs</button>
            <button class="btn-post-job">Post a Job</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero