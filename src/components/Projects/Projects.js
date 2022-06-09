import React from "react";
import img1 from "../home/projects/daisycomputer.png";
import img2 from "../home/projects/mrphotoman.png";
import img3 from "../home/projects/lthouse.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Daisy Computers",
      website: "https://manufacturer-c9f9e.web.app/",
      clientgit:'https://github.com/foadtkf/DaisyComputer-client',
      servergit:'https://github.com/foadtkf/DaisyComputer-server',
      description:
        "A full-stack e-commerce website with admin role implemented. Also implemented payment gateway using Stripe",
      img: "https://i.ibb.co/JzBqQJx/Screenshot-139.png",
    },
    {
      id: 2,
      name: "MrPhotoMan",
      website: "https://mr-photoman.web.app/",
      clientgit:'https://github.com/foadtkf/Mr-PhotoMan',
      servergit:'',
      description:
        "A personal website of a professional photographer. All his services will be shown in this website.",
      img: "https://i.ibb.co/rdWkB3k/Screenshot-138.png",
    },
    {
      id: 3,
      name: "LTHouse",
      website: "https://laptop-dokan.web.app/",
      clientgit:'https://github.com/foadtkf/WareHouse-Client',
      servergit:'https://github.com/foadtkf/WareHouse-server',
      description:
        "A complete warehouse management website of laptops. Products can be managed through this website",
      img: "https://i.ibb.co/QYmZ5k1/Screenshot-141.png",
    },
  ];
  return (
    <div className="my-5 mx-5">
      <h1 className="text-3xl font-serif font-bold text-center my-2">
        Some of my projects
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            projects.map(project=><div class="card  bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-800">
          <figure>
            <img
              src={project.img}
              alt={project.name}
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{project.name}</h2>
            <p>{project.description}</p>
            <div class="card-actions">
              <a href={project.website} class="btn btn-primary w-full">Visit {project.name}</a>
              <a href={project.clientgit} class="btn btn-primary w-full">GitHub client</a>
              {project.servergit&&<a href={project.servergit} class="btn btn-primary w-full">GitHub server</a>}
            </div>
          </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default Projects;
