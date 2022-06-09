import React from 'react';
import About from './About';
import Intro from './Intro';
import ProjectShort from './ProjectShort';

const Home = () => {
    return (
        <div className=' min-h-screen'>
            <Intro></Intro>
            <About></About>
            <ProjectShort></ProjectShort>
        </div>
    );
};

export default Home;