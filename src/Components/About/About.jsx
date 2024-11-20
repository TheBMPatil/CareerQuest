import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
// import './About.css'
import team1 from '../../assets/team1.png'
import team2 from '../../assets/team2.png'
import team3 from '../../assets/team3.png'
import team4 from '../../assets/team4.png'
function About() {
    return (
        <>
            <Navbar />
            <div className="about">


                {/* Hero Section */}
                <section className="about-hero">
                    <div className="container">
                        <h1>About Career Quest</h1>
                        <p>Your gateway to finding dream jobs and career opportunities. Let's build a better future together!</p>
                    </div>
                </section>

                {/* About Us Section */}
                <section className="about-us">
                    <div className="container">
                        <h2>Who We Are</h2>
                        <p>
                            At Career Quest, we are passionate about connecting job seekers with top-notch career opportunities.
                            Our platform is built on the belief that finding the right job should be simple, accessible, and
                            empowering for everyone.
                        </p>

                        <h2>Our Mission</h2>
                        <p>
                            We strive to be the leading platform that helps individuals discover career paths, while supporting
                            companies to find top talent efficiently. We are driven by innovation and commitment to creating
                            better job search experiences.
                        </p>

                        <h2>Our Vision</h2>
                        <p>
                            Our vision is to revolutionize the way people and organizations find, apply for, and secure jobs,
                            by leveraging cutting-edge technology and human-centric design.
                        </p>

                        <h2>Our Values</h2>
                        <ul>
                            <li>
                                <strong>Innovation:</strong> Continuously improving and adapting to the evolving needs of the job market.
                            </li>
                            <li>
                                <strong>Integrity:</strong> Upholding the highest standards of honesty and ethics in all our dealings.
                            </li>
                            <li>
                                <strong>Empowerment:</strong> Helping job seekers and employers make informed decisions with confidence.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Team Section */}
                <section className="our-team">
                    <div className="container">
                        <h2>Meet Our Team</h2>
                        <div className="team-members">
                            <div className="team-member">
                                <img src={team1} alt="Team Member 1" />
                                <h3>John Doe</h3>
                                <p>CEO & Founder</p>
                            </div>
                            <div className="team-member">
                                <img src={team2} alt="Team Member 2" />
                                <h3>Jane Smith</h3>
                                <p>Chief Marketing Officer</p>
                            </div>
                            <div className="team-member">
                                <img src={team3} alt="Team Member 3" />
                                <h3>Sam Lee</h3>
                                <p>Head of Product Development</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="cta">
                    <div className="container">
                        <h2>Want to Learn More?</h2>
                        <p>Explore our platform, or get in touch with us to discover how Career Quest can help you achieve your career goals!</p>
                        <a href="/contact-us" className="cta-btn">Contact Us</a>
                    </div>
                </section>
            </div>
        </>
    );
}

export default About;
