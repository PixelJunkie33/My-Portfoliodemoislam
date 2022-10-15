import React from "react";
import { Fade } from "react-reveal";

const Education = () => {
  return (
    <Fade left cascade>
      <div>
        <h1 className="text-6xl text-red-600 font-bold my-5 text-center">
          Education History:
        </h1>
        <div className="my-2 mx-2 hover:my-3 text-black">
          <div className="border-2 border-black rounded-xl p-3 hover:shadow-2xl hover:shadow-red-500 hover:border-4">
            <h1 className="lg:text-5xl text-xl font-bold">
              Bangladesh Army University of Science & Technology, Saidpur
            </h1>
            <p className="lg:text-xl">
              Bachelor of Science in{" "}
              <span className="font-bold"> Computer Science & Engineering</span>
            </p>
            <p>January-2019 to present</p>
          </div>
        </div>
        <div className="my-2 mx-2 hover:my-3 text-black">
          <div className="border-2 border-black rounded-xl p-3 hover:shadow-2xl hover:shadow-red-500 hover:border-4">
            <h1 className="lg:text-5xl text-xl font-bold">
              Joynal Hazari College, Feni
            </h1>
            <p className="lg:text-xl">
              HSC from <span className="font-bold">Science group</span>
            </p>
            <p>April 2015 to February 2017</p>
          </div>
        </div>
        <div className="my-2 mx-2 hover:my-3 text-black">
          <div className="border-2 border-black rounded-xl p-3 hover:shadow-2xl hover:shadow-red-500 hover:border-4">
            <h1 className="lg:text-5xl text-xl font-bold">
              Feni Govt Pilot High School
            </h1>
            <p className="lg:text-xl">
              SSC from <span className="font-bold">Science group</span>
            </p>
            <p>February 2013 to January 2015</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Education;
