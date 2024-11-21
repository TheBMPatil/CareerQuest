import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactUs.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import Navbar from '../Home/Navbar/Navbar';

const ContactUs = () => {
    const [state, handleSubmit] = useForm("mrbgljba");  // Replace with your Formspree form ID
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        // Submit the form using Formspree's handleSubmit
        const response = await handleSubmit(event);

        // Checking if the form submission was successful
        if (state.succeeded) {
            setResult("Thanks for contacting us! We will get back to you soon.");
            event.target.reset();
        } else {
            // Handle errors, if any
            setResult("There was an error submitting your form. Please try again.");
            // event.target.reset();
        }
    };

    return (
        <>
            <Navbar />
            <div className="main-container">
                <div className="contact-us-container">
                    <div className="contact-col">
                        <h3>Send us a message <img src={msg_icon} alt="Message Icon" /></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos exercitationem laboriosam libero veniam in odio ipsum sed expedita, voluptatum qui eos non natus sunt id!</p>

                        <ul>
                            <li><img src={mail_icon} alt="Mail Icon" /> contact@thebmpatil.dev</li>
                            <li><img src={phone_icon} alt="Phone Icon" /> +91 84089-21072</li>
                            <li><img src={location_icon} alt="Location Icon" /> Lorem ipsum dolor sit amet <br /> consectetur adipisicing.</li>
                        </ul>
                    </div>

                    {/* Form Section */}
                    <div className="contact-col">
                        <form onSubmit={onSubmit} className="contact-form">
                            <div className="input-field">
                                <label>Your Name</label>
                                <input type="text" name="name" placeholder="Enter your name" required />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>
                            <div className="input-field">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" placeholder="Enter your mobile number" required />
                                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                            </div>
                            <div className="input-field">
                                <label>Write your message here</label>
                                <textarea name="message" rows={6} placeholder="Enter your message" required></textarea>
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            <button type="submit" className="submit-button" disabled={state.submitting}>Submit now <img src={white_arrow} alt="Arrow" /></button>
                        </form>
                        {/* Display the result message */}
                        <span>{result}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
