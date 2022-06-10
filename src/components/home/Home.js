import React from 'react';
import About from './About';
import Intro from './Intro';
import ProjectShort from './ProjectShort';
import Services from './Services';

const Home = () => {
    return (
        <div className=''>
            <Intro></Intro>
            <About></About>
            <Services></Services>
            <ProjectShort></ProjectShort>
        </div>
    );
};

export default Home;