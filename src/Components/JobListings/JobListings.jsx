import React, { useState } from "react";
import "./JobListings.css"; // Add your CSS for styling
import Navbar from "../Home/Navbar/Navbar";

const JobListings = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("all");

    // Sample job data
    const jobs = [
        { title: "Software Engineer", company: "TechCorp", location: "Remote", salary: "$70,000/year", category: "tech" },
        { title: "Data Entry Clerk", company: "AdminWorks", location: "Remote", salary: "$40,000/year", category: "data entry" },
        { title: "Nurse Practitioner", company: "HealthPlus", location: "New York", salary: "$60,000/year", category: "health" },
        { title: "UI/UX Designer", company: "DesignPro", location: "San Francisco", salary: "$80,000/year", category: "design" },
        // Add more jobs
    ];

    // Extract unique categories from the jobs array
    const categories = ["all", ...new Set(jobs.map((job) => job.category))];

    // Filter jobs based on search term and category
    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === "all" || job.category === category;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="job-listings-page">
            <Navbar />
            {/* Title */}
            <div className="title">
                <h1>Recommended Jobs for You</h1>
            </div>

            {/* Search and Filter Section */}
            <section className="search-filter">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    className="search-bar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="filter-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {categories.map((cat, index) => (
                        <option value={cat} key={index}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                    ))}
                </select>
                <button className="filter-button">Filter</button>
            </section>

            {/* Job Cards Section */}
            <section className="job-cards">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                        <div className="job-card" key={index}>
                            <h3>{job.title}</h3>
                            <p>Company: {job.company}</p>
                            <p>Location: {job.location}</p>
                            <p>Salary: {job.salary}</p>
                            <button className="apply-button">Apply Now</button>
                        </div>
                    ))
                ) : (
                    <p>No jobs found. Try adjusting your search or filters.</p>
                )}
            </section>
        </div>
    );
};

export default JobListings;
