import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { HashLink } from "react-router-hash-link";
import './Navbar.css'
const Navbar = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="navbar daddynav lg:bg-slate-600 lg:text-white sm:text-black" >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <HashLink smooth to="#about">
                About
              </HashLink>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <button onClick={refreshPage} className="btn btn-ghost normal-case lg:text-xl font-serif">
          <Typewriter
            options={{
              strings: ["Fakhrul Islam Fuad"],
              autoStart: true,
              loop: true,
            }}
          />
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul>
          <li>
            <Link to="/contactme" className="btn btn-secondary">
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
