import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';
import './Home.css';

const Home = () => {
    return (
        <>
        <div className="home" >

            <Navbar />
            <Hero />
           
            <FeaturedJobs />
            <FeaturedJobs />
            <FeaturedJobs />
            <FeaturedJobs />
            <FeaturedJobs />
            <FeaturedJobs />
        </div>
        </>
    );
}

export default Home;
