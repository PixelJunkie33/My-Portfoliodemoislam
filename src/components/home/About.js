import React from 'react';
import fuadimg from './fuadimg.jpg'

const About = () => {
    return (
        <div className="hero py-10 mb-10" id='about'>
        <div className="hero-content flex-col lg:flex-row">
          <img className='w-[400px] rounded-2xl ' src={fuadimg} alt='' />
          <div>
          <h1 className="text-5xl font-bold text-black">About me</h1>
            <p className="py-6 text-xl text-black">I'm from Feni, Bangladesh. I'm a 4th year student and pursuing my Bachelors in Computer Science from BAUST. I'm learning full-stack web development, love to build more and more new projects and upgrade them. I play video games and watch movies on the weekends :)</p>
            <a href='https://drive.google.com/file/d/1LFxWAJsjI626p0uD9vGiddqNd-1gzFD7/view?usp=sharing'><button className="btn">My Resume</button></a>
          </div>
        </div>
      </div>
    );
};

export default About;