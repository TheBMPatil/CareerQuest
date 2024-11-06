import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <Link to="./">Home</Link>
                <Link to="/job-listings">Job Listings</Link>
                <Link to="/company-profiles">Company Profiles</Link>
                <Link to="/About">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-of-service">Terms of Service</Link>
            </div>
            <div className="footer-contact">
                <p>Email: contact@careerquest.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Main Street, Anytown, USA</p>
            </div>
            <div className="footer-social">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
        </footer>
    );
}

export default Footer;
