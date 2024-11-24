import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import menuBtn from '../../../assets/menu-icon.png';  
import './Navbar.css';

export const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="header">
            {/* Main Navbar (visible on desktop screens) */}
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">CareerQuest</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleSidebar}  // Toggle sidebar visibility
                    aria-controls="navbarNav"
                    aria-expanded={isSidebarOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <img src={menuBtn} alt="Menu" height="24px" width="24px" />
                    </span>
                </button>

                {/* Navbar links for larger screens */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/JobListings">Job Listings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/company-profiles">Company Profiles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user-profile">User Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn-login" to="/Login">Login/Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Sidebar (visible on small screens) */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/JobListings">Job Listings</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/company-profiles">Company Profiles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user-profile">User Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn-login" to="/Login">Login/Register</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
