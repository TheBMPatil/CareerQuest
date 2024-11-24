import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <Link to="./">Home</Link>
                <Link to="/JobListings">Job Listings</Link>
                <Link to="/company-profiles">Company Profiles</Link>
                <Link to="/About">About Us</Link>
                <Link to="/ContactUs">Contact Us</Link>
                <Link to="/PrivacyPolicy">Privacy Policy</Link>
                <Link to="/TermsOfService">Terms of Service</Link>
            </div>
            <div className="footer-contact">
                <p>Email: contact@careerquest.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Main Street, Anytown, USA</p>
            </div>
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/thebmpatil/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/bhagvat_mutthe_/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://x.com/BhagvatMutthe" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>

            </div>
        </footer>
    );
}

export default Footer;
