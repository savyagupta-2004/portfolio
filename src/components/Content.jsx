import React from "react";
import { ReactTyped } from "react-typed";
import Aos from "aos";
// import { IconButton } from "@material-tailwind/react";
import "aos/dist/aos.css";

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 md:px-4 md:overflow-x-hidden sm:overflow-y-hidden overflow-x-hidden ">
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-6 md:gap-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
          Hi! I'm Savya Gupta
        </h1>
        <ReactTyped
          className="text-lg md:text-xl lg:text-2xl font-semibold text-white"
          strings={["Welcome To My Portfolio Website"]}
          typeSpeed={100}
          backSpeed={20}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-16">
        {/* Uncomment these if needed */}
        {/* <button className="hover:opacity-100 bg-opacity-90 duration-300">
          <img
            className=""
            src="Icons/likedin.png"
            alt="likedin"
            width={30}
          ></img>
        </button>
        <button>
          <img
            className="rounded-full"
            src="Icons/github.jpeg"
            alt="github"
            width={50}
          ></img>
        </button>
        <button>
          <img
            className="rounded-full"
            src="Icons/mail.jpeg"
            alt="mail"
            width={30}
          ></img>
        </button> */}
      </div>
    </div>
  );
};

export default Content;
