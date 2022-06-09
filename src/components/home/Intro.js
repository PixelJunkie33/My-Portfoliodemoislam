import React from 'react';
import Typewriter from 'typewriter-effect';
const Intro = () => {
    return (
    <div class=" justify-start text-left pt-6 pl-4 flex flex-col lg:flex-row">
      <div className='lg:mt-10'>
      <h1 class="text-5xl font-bold">Hello, I'm Fakhrul Islam Fuad.</h1>
      <h1 class="text-4xl font-extrabold text-blue-600 font-mono">
      <Typewriter
  options={{
    strings: ['Front-End developer','Full-Stack developer','React developer','MERN-Stack developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p class="py-6 text-xl">I'm a self enthusiastic and passionate programmer. I'm a quick learner and love to learn about new technologies. Currently, I'm focused on getting my first job as a web developer.</p>
      </div>
      <img className=' rounded-2xl' src="https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?t=st=1654780507~exp=1654781107~hmac=3685517914f8be3cc913087d6622c7a6dad2a46535c2152615cebf8fa7ea016c&w=740" alt="" srcset="" />
    </div>
    );
};

export default Intro;