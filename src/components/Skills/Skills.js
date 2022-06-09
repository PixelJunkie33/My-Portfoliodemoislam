import React from "react";
const Portfolio = () => {
  const frameworks = [
    "Bootstrap5",
    "Tailwind CSS",
    "ReactJS",
    "NodeJS",
    "Swing",
  ];
  const others=[
      "DaisyUI",
      "React Reveal",
      "Stripe",
  ]
  const languages = ["C/C++", "Java", "Python", "Javascript", "HTML5", "CSS3"];
  const tools = ["Firebase", "Git", "Heeroku", "Netlify"];
  const db = ["MongoDB", "MySQL"];
  return (
    <div>
            <h1 className='text-3xl font-serif font-bold text-center'>Skills & Technologies</h1>
        <div className="collapse rounded-lg my-5 mx-3  shadow-lg hover:shadow-teal-200">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-gradient-to-r from-violet-900 to-white  text-secondary-content peer-checked:bg-gradient-to-r from-cyan-500 to-blue-500 peer-checked:text-secondary-content text-xl font-bold">
            Languages
          </div>
          <div className="peer-checked:pt-2 collapse-content bg-transparent text-primary-content peer-checked:bg-gradient-to-r from-cyan-500 to-white peer-checked:text-secondary-content">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
              {languages.map((skill) => (
                <div className="btn">{skill}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="collapse rounded-lg my-5 mx-3  shadow-lg hover:shadow-teal-200">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-gradient-to-r from-violet-900 to-white  text-secondary-content peer-checked:bg-gradient-to-r from-cyan-500 to-blue-500 peer-checked:text-secondary-content text-xl font-bold">
            Frameworks & Libraries
          </div>
          <div className="peer-checked:pt-2 collapse-content bg-transparent text-primary-content peer-checked:bg-gradient-to-r from-cyan-500 to-white peer-checked:text-secondary-content">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
              {frameworks.map((skill) => (
                <div className="btn">{skill}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="collapse rounded-lg my-5 mx-3  shadow-lg hover:shadow-teal-200">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-gradient-to-r from-violet-900 to-white  text-secondary-content peer-checked:bg-gradient-to-r from-cyan-500 to-blue-500 peer-checked:text-secondary-content text-xl font-bold">
            Tools
          </div>
          <div className="peer-checked:pt-2 collapse-content bg-transparent text-primary-content peer-checked:bg-gradient-to-r from-cyan-500 to-white peer-checked:text-secondary-content">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
              {tools.map((skill) => (
                <div className="btn">{skill}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="collapse rounded-lg my-5 mx-3  shadow-lg hover:shadow-teal-200">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-gradient-to-r from-violet-900 to-white  text-secondary-content peer-checked:bg-gradient-to-r from-cyan-500 to-blue-500 peer-checked:text-secondary-content text-xl font-bold">
            Database
          </div>
          <div className="peer-checked:pt-2 collapse-content bg-transparent text-primary-content peer-checked:bg-gradient-to-r from-cyan-500 to-white peer-checked:text-secondary-content">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
              {db.map((skill) => (
                <div className="btn">{skill}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="collapse rounded-lg my-5 mx-3  shadow-lg hover:shadow-teal-200">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-gradient-to-r from-violet-900 to-white  text-secondary-content peer-checked:bg-gradient-to-r from-cyan-500 to-blue-500 peer-checked:text-secondary-content text-xl font-bold">
            Others
          </div>
          <div className="peer-checked:pt-2 collapse-content bg-transparent text-primary-content peer-checked:bg-gradient-to-r from-cyan-500 to-white peer-checked:text-secondary-content">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
              {others.map((skill) => (
                <div className="btn">{skill}</div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Portfolio;