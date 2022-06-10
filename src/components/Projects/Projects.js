import React from "react";
import { useNavigate } from 'react-router-dom';
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Daisy Computers",
      website: "https://manufacturer-c9f9e.web.app/",
      clientgit:'https://github.com/foadtkf/DaisyComputer-client',
      servergit:'https://github.com/foadtkf/DaisyComputer-server',
      description:
        "Daisy Computer is a good example of how a good eCommerce store should look, as its user-friendly website design instantly makes it easy for customers to find what they need. To speed up shopping experienc, visitor can see all the tools and other user reviews. To purchase a tool he need to login or sign up first. A user can also review the website. The website also have admin role implemented. An admin can add and manage tools. He can manage users and orders too. He can deliver a product only if a customer completes his payment. The client site is deployed on Firebase and the server site on Heroku. Moreover, this website is mobile responsive too.",
      img1: "https://i.ibb.co/JzBqQJx/Screenshot-139.png",
      img2:'https://i.ibb.co/Z1MFJrC/Screenshot-151.png',
      img3: 'https://i.ibb.co/2FbY0Fr/Screenshot-152.png',
    },
    {
      id: 2,
      name: "MrPhotoMan",
      website: "https://mr-photoman.web.app/",
      clientgit:'https://github.com/foadtkf/Mr-PhotoMan',
      servergit:'',
      description:
        "A personal website of a professional photographer. All his services will be shown in the website. A visitor can see what services do the photographer provides. But to purchase a service, he need to do login or signup. To let the user know either his login or signup is successful or not, I used toast. This website is deployed on Firebase. I've made this website responsive for mobile phones.",
      img1: "https://i.ibb.co/rdWkB3k/Screenshot-138.png",
      img2: 'https://i.ibb.co/4PPjKKs/Screenshot-154.png',
      img3: 'https://i.ibb.co/H7D0bKt/Screenshot-153.png',
    },
    {
      id: 3,
      name: "LTHouse",
      website: "https://laptop-dokan.web.app/",
      clientgit:'https://github.com/foadtkf/WareHouse-Client',
      servergit:'https://github.com/foadtkf/WareHouse-server',
      description:
        "A complete warehouse management website of laptops. A visitor can see the list of all the laptops. To add and manage laptops, user need to login or signup. Else he cannot update laptops. User can reduce the quantity of laptops by pressing the delivered button located on the updateproduct page. The website is also responsive for mobile devices",
      img1: "https://i.ibb.co/QYmZ5k1/Screenshot-141.png",
      img2: 'https://i.ibb.co/pds09KL/Screenshot-156.png',
      img3: 'https://i.ibb.co/X23NJLk/Screenshot-155.png',
    },
  ];
  const navigate = useNavigate();


  const navigateToUpdate = id =>{
      navigate(`/projectdescription/${id}`);
  }
  return (
    <div className="my-5 mx-5">
      <h1 className="text-3xl font-serif font-bold text-center my-2">
        Some of my projects
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            projects.map(project=>
            <div class="card  bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-800">
          <figure>
            <img
              src={project.img1}
              alt={project.name}
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{project.name}</h2>
            <div class="card-actions">
              <a href={project.website} class="btn btn-primary w-full">Visit {project.name}</a>
              <a href={project.clientgit} class="btn btn-primary w-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>GitHub client</a>
              {project.servergit&&<a href={project.servergit} class="btn btn-primary w-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> GitHub server</a>}
              <button onClick={() => navigateToUpdate(project.id)}  class="btn btn-primary w-full">Show more</button>
              {/* <Link to="/projectdescription" class="btn btn-secondary">Show more</Link> */}
            </div>
          </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default Projects;
