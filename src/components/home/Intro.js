import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div className="hero min-h-screen py-10 mb-10">
        <div className="hero-content flex-col lg:flex-row">
          <img className='w-[700px] rounded-2xl opacity-80' src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='' />
          <div>
            <h1 className="text-6xl font-bold text-black">Hello there 👋</h1>
            <p className="py-6 text-xl text-black">I'm Fakhrul Islam Fuad. Currently I'm pursuing my Bachelors in Computer Science from BAUST. I'm learning full-stack web development, love to build more and more new projects and upgrade them. I play video games and watch movies on the weekends :)</p>
            <a href='https://drive.google.com/file/d/1LFxWAJsjI626p0uD9vGiddqNd-1gzFD7/view?usp=sharing'><button className="btn">My Resume</button></a>
          </div>
        </div>
      </div>
    );
};

export default Intro;