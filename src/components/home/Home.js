import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import About from "./About";
import Intro from "./Intro";
import ProjectShort from "./ProjectShort";
import Services from "./Services";

const Home = () => {
  return (
    <div className="">
      <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        component={
          <FontAwesomeIcon
            className="p-4 rounded-full bg-black hover:shadow-xl hover:shadow-red-600"
            icon={faArrowUp}
            style={{ color: "white" }}
          />
        }
        style={{ background: "transparent" }}
      />
      <Intro></Intro>
      <About></About>
      <Services></Services>
      <ProjectShort></ProjectShort>
    </div>
  );
};

export default Home;
