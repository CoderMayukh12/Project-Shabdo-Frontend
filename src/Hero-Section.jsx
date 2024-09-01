import React from "react";
import "./index.css"; // Import the CSS for the typewriter effect
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFileCode,
  faHandBackFist,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen w-full">
      <div
        id="hero-container"
        className="relative max-w-4xl mx-auto px-6 pt-2 pb-16 flex flex-col sm:items-center sm:text-center sm:pt-12 sm:max-w-2xl"
      >
        {/* Version Text */}
        <div
          id="version-text"
          className="flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group"
        >
          <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
          <p className="font-display font-medium text-yellow-600">
            v0.21.1: <span className="text-yellow-800">Speak with Signs</span>
          </p>
          <span className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300">
            <FontAwesomeIcon
              icon={faArrowRight}
              beatFade
              style={{ color: "#f3b712" }}
            />
          </span>
        </div>

        {/* Hero Features */}
        <div id="hero-features" className="hidden sm:flex gap-8 my-6">
          <div className="flex justify-center gap-2 items-center text-gray-500">
            <FontAwesomeIcon icon={faFileCode} className="text-sm" />
            <p>Easy to Use</p>
          </div>
          <div className="flex justify-center gap-2 items-center text-gray-500">
            <FontAwesomeIcon icon={faHandBackFist} className="text-sm" />
            <p>Sign Language</p>
          </div>
          <div className="flex justify-center gap-2 items-center text-gray-500">
            <FontAwesomeIcon icon={faLaptop} className="text-sm" />

            <p>Mobile,Laptop,Desktop</p>
          </div>
        </div>

        {/* Wrapper around h1 */}
        <div className="w-full h-full mb-4 overflow-hidden max-w-full">
          <h1 className="relative text-4xl sm:text-5xl font-semibold leading-snug mt-4 sm:leading-normal bg-blue-200 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 typewriter">
            Introducing Shabdh
          </h1>
        </div>

        <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">
          Transforms sign language into text for seamless and inclusive
          communication..
        </p>

        {/* Buttons */}
        <div
          id="buttons-container"
          className="mt-12 flex gap-4 flex-col sm:flex-row"
        >
          <button className="px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90">
            Create Account
          </button>
          <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
