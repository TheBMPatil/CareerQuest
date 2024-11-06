import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';
import './Home.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedJobs />
        </>
    );
}

export default Home;
