import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './About.css';

import bhagvat from './team/bhagvat.jpg'
import ajay from './team/ajay.png'
import ankush from './team/ankush.jpg'
import pravin from './team/pravin.jpg'
import amol from './team/amol.jpg'


function About() {
    return (
        <>
            <Navbar />
            <div className="about">

                {/* Hero Section */}
                <section className="about-hero">
                    <div className="container">
                        <h1>About Career Quest</h1>
                        <p>Your gateway to finding your dream job and discovering exciting career opportunities. Let's build a brighter future together!</p>
                    </div>
                </section>

                {/* About Us Section */}
                <section className="about-us">
                    <div className="container">
                        <h2>Who We Are</h2>
                        <p>
                            At Career Quest, we are passionate about connecting job seekers with exceptional career opportunities. 
                            Our platform is designed with the belief that finding the right job should be intuitive, accessible, 
                            and empowering for everyone. We are committed to providing a seamless experience that bridges the gap 
                            between talent and opportunity.
                        </p>

                        <h2>Our Mission</h2>
                        <p>
                            We aim to be the leading platform for individuals to explore diverse career paths while supporting 
                            organizations in efficiently sourcing and hiring top talent. Our mission is fueled by innovation, 
                            as we continue to redefine the job search experience with technology and human-centric design.
                        </p>

                        <h2>Our Vision</h2>
                        <p>
                            Our vision is to revolutionize how job seekers and organizations connect, apply, and secure employment 
                            through cutting-edge technology, personalized job matching, and a user-friendly experience that puts 
                            people first.
                        </p>

                        <h2>Our Values</h2>
                        <ul>
                            <li><strong>Innovation:</strong> We are dedicated to continuously evolving to meet the changing needs of the job market.</li>
                            <li><strong>Integrity:</strong> We maintain the highest ethical standards in all our interactions and transactions.</li>
                            <li><strong>Empowerment:</strong> We empower job seekers and employers by providing the tools and insights needed for informed decision-making.</li>
                        </ul>
                    </div>
                </section>

                {/* Team Section */}
                <section className="our-team">
                    <div className="container">
                        <h2>Meet Our Team</h2>
                        <div className="team-members">
                            <div className="team-member">
                                <img src={bhagvat} alt="Team Member 1" />
                                <h3>Bhagvat Mutthe</h3>
                                <p>CEO & Founder</p>
                                <p>John is the visionary behind Career Quest, with over 15 years of experience in the tech and recruitment industries. His dedication to creating innovative solutions has driven the platform's success, making it a go-to resource for job seekers and employers alike.</p>
                            </div>
                            <div className="team-member">
                                <img src={ankush} alt="Team Member 2" />
                                <h3>Ankush Pawar</h3>
                                <p>Chief Marketing Officer</p>
                                <p>Jane brings a wealth of experience in digital marketing and brand development. She leads the marketing team at Career Quest, ensuring the platform's mission and values are communicated clearly to the global audience.</p>
                            </div>
                            <div className="team-member">
                                <img src={ajay} alt="Team Member 3" />
                                <h3>Ajay Plahal</h3>
                                <p>Head of Product Development</p>
                                <p>Sam is responsible for overseeing the product development lifecycle. With a strong background in software engineering and user experience design, Sam ensures that Career Quest's platform remains cutting-edge, user-friendly, and efficient.</p>
                            </div>
                            <div className="team-member">
                                <img src={pravin} alt="Team Member 4" />
                                <h3>Pravin Kale</h3>
                                <p>Lead Data Scientist</p>
                                <p>Amy leads the data science team, using advanced algorithms to enhance the platform's job matching capabilities. Her work ensures that job seekers receive personalized job recommendations tailored to their skills and preferences.</p>
                            </div>
                            <div className="team-member">
                                <img src={amol} alt="Team Member 4" />
                                <h3>Amol Pawar</h3>
                                <p>Lead Data Scientist</p>
                                <p>Amy leads the data science team, using advanced algorithms to enhance the platform's job matching capabilities. Her work ensures that job seekers receive personalized job recommendations tailored to their skills and preferences.</p>
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
