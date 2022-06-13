import React from 'react';
import Typewriter from 'typewriter-effect';
const Intro = () => {
    return (
    <div className=" justify-start text-left pt-6 pl-4 flex flex-col lg:flex-row lg:my-20">
      <div className='lg:mt-10'>
      <h1 className="text-5xl font-bold">Hello, I'm Fakhrul Islam Fuad.</h1>
      <h1 className="text-4xl font-extrabold text-blue-600 font-mono">
      <Typewriter
  options={{
    strings: ['Front-End developer','Full-Stack developer','React developer','MERN-Stack developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="py-6 text-xl">I'm a self enthusiastic and passionate programmer. I'm a quick learner and love to learn about new technologies. Currently, I'm focused on getting my first job as a web developer.</p>
      </div>
      <img className=' rounded-2xl' src="https://cdn.dribbble.com/users/1040798/screenshots/15685874/media/aa9588469e19517c2b94b1addd15d11d.gif" alt="" srcset="" />
    </div>
    );
};

export default Intro;