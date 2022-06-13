import React from 'react';
import { Fade } from 'react-reveal';
import Flash from 'react-reveal/Flash';
import fuadimg from './fuadimg.jpg'

const About = () => {
    return (
        <div className="hero py-10 mb-10" id='about'>
        <div className="hero-content flex-col lg:flex-row">
        <Flash>
          <img className='w-[400px] rounded-2xl ' src={fuadimg} alt='' /></Flash>
          <Fade right cascade>
          <div>
          <h1 className="text-5xl font-bold text-black">About me</h1>
            <p className="py-6 text-xl text-black">I'm from Feni, Bangladesh. I'm a 4th year student and pursuing my Bachelors in Computer Science from BAUST. I'm learning full-stack web development, love to build more and more new projects and upgrade them. I play video games and watch movies on the weekends :)</p>
            <a href='https://drive.google.com/file/d/1LFxWAJsjI626p0uD9vGiddqNd-1gzFD7/view?usp=sharing'><button className="btn btn-secondary">My Resume</button></a>
          </div></Fade>
        </div>
      </div>
    );
};

export default About;