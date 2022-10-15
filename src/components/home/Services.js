import React from "react";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";

const Services = () => {
  const projects = [
    {
      id: 1,
      name: "HTML, CSS and Vanilla Javascript websites",
      description:
        "I can develop a website with only HTML, CSS and raw Javascript. I've built a few websites using only HTML, CSS or HTML, CSS and Javascript",
    },
    {
      id: 2,
      name: "React websites",
      description:
        "I can develop a website using React router, Firebase Authentication, etc tools. I've built a few websites using ReactJS, Firebase, React Hook Forms, etc.",
    },
    {
      id: 3,
      name: "MERN websites",
      description:
        "I can develop a full-stack e-commerce website using MongoDB, ExpressJS, ReactJS, NodeJS, Stripe, etc tools. I've built a few websites using MERN stack.",
    },
  ];
  return (
    <Fade left cascade>
      <div className="my-5 mx-5 text-black">
        <h1 className="text-5xl font-serif font-bold text-center my-2">
          Services
        </h1>
        <h1 className="lg:text-4xl text-xl font-extrabold text-blue-600 font-mono ml-5 my-5">
          <Typewriter
            options={{
              strings: ["What I can do..."],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card sm:w-full bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-800  image-full">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
                alt="serviceImage"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-3xl text-white font-bold ">
                {projects[0].name}
              </h2>
              <h1 className="text-xl text-white">{projects[0].description}</h1>
            </div>
          </div>
          <div className="card sm:w-full bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-800  image-full">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
                alt="serviceImage"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-3xl text-white font-bold">
                {projects[1].name}
              </h2>
              <h1 className="text-xl text-white">{projects[1].description}</h1>
            </div>
          </div>
          <div className="card sm:w-full bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-800  image-full">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
                alt="serviceImage"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-3xl text-white font-bold">
                {projects[2].name}
              </h2>
              <h1 className="text-xl text-white">{projects[2].description}</h1>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Services;
