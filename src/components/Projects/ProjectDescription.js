import React from 'react';
import { Slide } from 'react-reveal';

import { useParams } from 'react-router-dom';
const ProjectDescription = () => {
    const {id} =useParams();
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
          img3: 'https://i.ibb.co/n8GpJgL/Screenshot-159.png',
          tools_used: ['ReactJS','ExpressJS','NodeJS', 'Firebase','MongoDB','React-Toast','Stripe'],
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
          tools_used: ['ReactJS','ExpressJS','NodeJS', 'Firebase','React-Toast'],
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
          tools_used: ['ReactJS','ExpressJS','NodeJS', 'Firebase','MongoDB','React-Toast'],
        },
      ];
      const project = projects.find(project=>project.id>=id);
    return (
        
        <div className="hero min-h-screen bg-base-200 container lg:mx-auto my-6 py-6 rounded">
  <div className="grid lg:grid-cols-2">
  <div className="carousel w-full lg:m-3 rounded-xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={project.img1} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={project.img2} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={project.img3} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      
    </div>
  </div> 
</div>
    <div className='lg:px-5'>
      <h1 className="text-5xl font-bold">{project.name}</h1>
    
      <p className="py-6">{project.description}</p>
      <h1 className="text-3xl text-center font-bold mb-7">Tools I've used</h1>
      <Slide left cascade>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
              {project.tools_used.map((tool) => (
                <div className="btn btn-outline  hover:shadow-lg hover:shadow-green-700">{tool}</div>
              ))}
              
            </div>
            </Slide>
    </div>
  </div>
</div>
    );
};

export default ProjectDescription;