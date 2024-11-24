import React from 'react';
import "./PrivacyPolicy.css"

import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
const PrivacyPolicy = () => {
    return (<>

        <Navbar />

        <div className="privacy-policy">

            <h1>Privacy Policy</h1>

            <section>
                <h2>1. Introduction</h2>
                <p>
                    At <strong>CareerQuest</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
                    use, and protect your personal information when you use our platform.
                </p>
            </section>

            <section>
                <h2>2. Information We Collect</h2>
                <ul>
                    <li>
                        <strong>Personal Information:</strong> When you create an account or submit job applications, we collect personal details
                        such as your name, email address, phone number, and resume information.
                    </li>
                    <li>
                        <strong>Usage Data:</strong> We may collect data regarding how you interact with our platform, including your IP address,
                        browser type, and device information.
                    </li>
                    <li>
                        <strong>Cookies:</strong> We use cookies to improve the user experience, track usage patterns, and personalize content.
                    </li>
                </ul>
            </section>

            <section>
                <h2>3. How We Use Your Information</h2>
                <ul>
                    <li>
                        <strong>Account Management:</strong> To create and maintain your CareerQuest account.
                    </li>
                    <li>
                        <strong>Job Matching:</strong> To match your profile with relevant job listings and provide personalized job recommendations.
                    </li>
                    <li>
                        <strong>Customer Support:</strong> To address your inquiries and provide assistance.
                    </li>
                    <li>
                        <strong>Marketing Communications:</strong> If you opt-in, we may send you marketing communications, job updates, or news about
                        CareerQuest.
                    </li>
                </ul>
            </section>

            <section>
                <h2>4. Data Sharing</h2>
                <p>
                    CareerQuest does not sell or rent your personal information. However, we may share your data in the following situations:
                </p>
                <ul>
                    <li>
                        <strong>With Employers:</strong> If you apply for a job through our platform, your information will be shared with the
                        respective employer.
                    </li>
                    <li>
                        <strong>With Service Providers:</strong> We may share data with trusted third-party service providers who assist in the
                        operation of our platform.
                    </li>
                    <li>
                        <strong>Legal Compliance:</strong> We may disclose your information if required by law or to protect our legal rights.
                    </li>
                </ul>
            </section>

            <section>
                <h2>5. Data Security</h2>
                <p>
                    We use reasonable security measures to protect your personal data from unauthorized access, alteration, or destruction.
                    However, no data transmission method over the Internet is completely secure.
                </p>
            </section>

            <section>
                <h2>6. Your Rights</h2>
                <p>
                    You have the right to:
                    <ul>
                        <li>
                            <strong>Access:</strong> Request a copy of the personal data we hold about you.
                        </li>
                        <li>
                            <strong>Rectification:</strong> Request correction of any inaccurate or incomplete information.
                        </li>
                        <li>
                            <strong>Deletion:</strong> Request deletion of your account or personal data, subject to certain conditions.
                        </li>
                        <li>
                            <strong>Opt-out:</strong> You can opt-out of receiving marketing emails by following the unsubscribe link in the email.
                        </li>
                    </ul>
                </p>
            </section>

            <section>
                <h2>7. Children’s Privacy</h2>
                <p>
                    CareerQuest does not knowingly collect information from individuals under the age of 13. If we learn that we have
                    inadvertently collected personal data from a child, we will take steps to delete that information.
                </p>
            </section>

            <section>
                <h2>8. Changes to Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy periodically. All changes will be posted on this page, and the "Last Updated" date will be
                    revised accordingly.
                </p>
            </section>

            <section>
                <div>

                    <h2>9. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at.</p>
                    <Link to="/ContactUs" className="cta-btn">Contact Us</Link>
                </div>


            </section>
        </div> </>
    );
};

export default PrivacyPolicy;
