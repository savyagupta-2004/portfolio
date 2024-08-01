import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

const Socials = () => {
  return (
    <>
      <div className="flex justify-center items-center font-bold text-4xl">
        <h1> Drop Your Valuable Feedback</h1>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div className="flex justify-center items-center my-3">
          <a
            href="https://www.linkedin.com/in/-savyagupta"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
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
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
