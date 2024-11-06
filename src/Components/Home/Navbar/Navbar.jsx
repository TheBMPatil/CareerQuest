import React from 'react';
import { Link } from 'react-router-dom'; // Ensure React Router is installed and configured
import menuBtn from '../../../assets/menu-icon.png';  // Ensure this path is correct
import './Navbar.css'    

export const Navbar = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">CareerQuest</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <img src={menuBtn} alt="Menu" height="24px" width="24px" />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/job-listings">Job Listings</Link>
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
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn-login" to="/Login">Login/Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
