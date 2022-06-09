import React from 'react';
import About from './About';
import Intro from './Intro';

const Home = () => {
    return (
        <div className=' min-h-screen'>
            <Intro></Intro>
            <About></About>
        </div>
    );
};

export default Home;