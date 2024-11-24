import React from 'react';
import "./TermsOfService.css"
import Navbar from '../Home/Navbar/Navbar';

const TermsOfService = () => {
  return (
    <> <Navbar/>
    <div className="terms-of-service">
       
      <h1>Terms of Service</h1>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>CareerQuest</strong> ("we", "us", "our"). By accessing and using our platform (the "Service"),
          you agree to comply with these Terms of Service. Please read them carefully before using our platform.
        </p>
      </section>

      <section>
        <h2>2. Use of Service</h2>
        <ul>
          <li>
            <strong>Eligibility:</strong> To use CareerQuest, you must be at least 18 years of age or the legal age of majority
            in your jurisdiction. By using our platform, you represent that you are of legal age.
          </li>
          <li>
            <strong>Account:</strong> To access certain features of CareerQuest, you may be required to create an account. You
            agree to provide accurate and complete information when registering and to keep your account details up to date.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. User Responsibilities</h2>
        <ul>
          <li>
            <strong>Account Security:</strong> You are responsible for maintaining the security of your account. Do not share your login
            credentials with others.
          </li>
          <li>
            <strong>Prohibited Activities:</strong> You agree not to use CareerQuest for unlawful purposes or to post or share any content
            that violates any laws, regulations, or third-party rights.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Job Listings and Applications</h2>
        <p>
          Employers posting job listings must ensure the jobs are legal, accurate, and comply with relevant labor laws. Job seekers
          are responsible for ensuring the accuracy of their resumes and application materials submitted via CareerQuest.
        </p>
      </section>

      <section>
        <h2>5. Termination of Account</h2>
        <p>
          We reserve the right to suspend or terminate your account if you violate these Terms or engage in activities that may harm the
          platform or other users.
        </p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>
          CareerQuest is not responsible for any direct, indirect, or consequential damages arising from the use of our platform,
          including but not limited to loss of data, job opportunities, or any business transactions.
        </p>
      </section>

      <section>
        <h2>7. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Any changes will be posted on this page, and your continued use of the platform
          will signify your acceptance of the updated Terms.
        </p>
      </section>

     
    </div></>
    
  );
};

export default TermsOfService;
