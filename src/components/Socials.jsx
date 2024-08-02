import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faLinkedin,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = () => {
  return (
    <>
      <div className="flex justify-center items-center font-bold text-4xl text-center text-white mt-4">
        <h1>Drop Your Valuable Feedback</h1>
      </div>
      <div className="flex justify-center items-center gap-3 mt-4">
        <div className="flex justify-center items-center my-3">
          <a
            href="https://www.linkedin.com/in/-savyagupta"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            className="text-3xl bg-white p-2 rounded-md"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="flex justify-center items-center my-3">
          <a
            href="https://github.com/savyagupta-2004"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            className="text-3xl bg-white p-2 rounded-md"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="flex justify-center items-center my-3">
          <a
            href="mailto:guptasavya667@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
            className="text-3xl bg-white p-2 rounded-md"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
