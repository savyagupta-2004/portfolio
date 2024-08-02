import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="relative md:mx-20 md:gap-2">
        <div data-aos="flip-up">
          <h1 className="text-center font-bold text-4xl text-white">
            My Skills
          </h1>
        </div>
        <div className="flex flex-wrap justify-center mt-8 lg:mx-32">
          <div
            className="flex flex-wrap justify-center gap-4 lg:gap-2"
            data-aos="zoom-in-right"
          >
            <div
              className="card w-full sm:w-80 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-2xl rounded-lg overflow-hidden mb-11"
              data-aos="flip-left"
            >
              <img
                src="Icons/javareal.jpeg"
                className="card-img-top w-full h-48 object-cover"
                alt="Java"
              />
              <div className="card-body p-4">
                <h5 className="card-title font-bold text-xl sm:text-2xl text-white">
                  Java
                </h5>
                <p className="card-text text-sm sm:text-base text-white">
                  I have acquired foundational knowledge in Spring Boot and
                  Java.
                </p>
              </div>
            </div>

            <div
              className="card w-full sm:w-80 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 shadow-2xl rounded-lg overflow-hidden mb-11"
              data-aos="flip-right"
            >
              <img
                src="Icons/webdev.jpeg"
                className="card-img-top w-full h-48 object-cover"
                alt="Web Development"
              />
              <div className="card-body p-4">
                <h5 className="card-title font-bold text-xl sm:text-2xl text-white">
                  Html/CSS/JavaScript
                </h5>
                <p className="card-text text-sm sm:text-base text-white">
                  Made many small-scale projects such as To-do list, Dummy data
                  generator, OTP generator, text-utility, and many more.
                </p>
              </div>
            </div>

            <div
              className="card w-full sm:w-80 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 shadow-2xl rounded-lg overflow-hidden mb-11"
              data-aos="flip-left"
            >
              <img
                src="Icons/python.jpeg"
                className="card-img-top w-full h-48 object-cover"
                alt="Python"
              />
              <div className="card-body p-4">
                <h5 className="card-title font-bold text-xl sm:text-2xl text-white">
                  Python
                </h5>
                <p className="card-text text-sm sm:text-base text-white">
                  Learned basics and fundamentals in Python, exploring various
                  concepts and practicing through projects and exercises to
                  solidify my understanding.
                </p>
              </div>
            </div>

            <div
              className="card w-full sm:w-80 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 shadow-2xl rounded-lg overflow-hidden mb-11"
              data-aos="flip-right"
            >
              <img
                src="Icons/dsa.png"
                className="card-img-top w-full h-48 object-cover"
                alt="DSA"
              />
              <div className="card-body p-4">
                <h5 className="card-title font-bold text-xl sm:text-2xl text-white">
                  DSA
                </h5>
                <p className="card-text text-sm sm:text-base text-white">
                  I have acquired knowledge in Data Structures and Algorithms
                  (DSA) and have practiced solving problems on LeetCode,
                  tackling a variety of algorithmic challenges to enhance my
                  problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-8 lg:mx-32">
          <div
            className="flex flex-wrap justify-center gap-4 lg:gap-2"
            data-aos="zoom-in-left"
          >
            <div
              className="card w-full sm:w-80 bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 shadow-2xl rounded-lg overflow-hidden mb-11"
              data-aos="flip-left"
            >
              <img
                src="Icons/github.jpeg"
                className="card-img-top w-full h-48 object-cover"
                alt="Git & GitHub"
              />
              <div className="card-body p-4">
                <h5 className="card-title font-bold text-xl sm:text-2xl text-white">
                  Git & GitHub
                </h5>
                <p className="card-text text-sm sm:text-base text-white">
                  I have made use of GitHub pages to host all my projects,
                  enabling easy access and showcasing my work to potential
                  employers and collaborators.
                </p>
              </div>
            </div>

            <div
              className="card w-full sm:w-80 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-2xl rounded-lg overflow-hidden mb-11"
              data-aos="flip-left"
            >
              <img
                src="Icons/oopsreal.png"
                className="card-img-top w-full h-48 object-cover"
                alt="C/C++"
              />
              <div className="card-body p-4">
                <h5 className="card-title font-bold text-xl sm:text-2xl text-white">
                  C/C++
                </h5>
                <p className="card-text text-sm sm:text-base text-white">
                  I have gained a solid understanding of object-oriented
                  programming (OOP) principles in C/C++, applying these concepts
                  in various projects and coding exercises to build efficient
                  and maintainable code.
                </p>
              </div>
            </div>

            <div
              className="card w-full sm:w-80 bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 shadow-2xl rounded-lg overflow-hidden mb-11"
              data-aos="flip-left"
            >
              <img
                src="Icons/mern.jpeg"
                className="card-img-top w-full h-48 object-cover"
                alt="MERN"
              />
              <div className="card-body p-4">
                <h5 className="card-title font-bold text-xl sm:text-2xl text-white">
                  MERN
                </h5>
                <p className="card-text text-sm sm:text-base text-white">
                  I have acquired comprehensive expertise in the MERN stack,
                  encompassing MongoDB, Express.js, React.js, and Node.js,
                  allowing me to build robust, full-stack web applications.
                </p>
              </div>
            </div>

            <div
              className="card w-full sm:w-80 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-2xl rounded-lg overflow-hidden mb-11"
              data-aos="flip-left"
            >
              <img
                src="Icons/next.png"
                className="card-img-top w-full h-48 object-cover"
                alt="Next.js"
              />
              <div className="card-body p-4 mb-8">
                <h5 className="card-title font-bold text-xl sm:text-2xl text-white">
                  Next.js
                </h5>
                <p className="card-text text-sm sm:text-base text-white">
                  I have learned Next.js and understood its key features, such
                  as server-side rendering, static site generation, and dynamic
                  routing. This knowledge allows me to build efficient and
                  dynamic web applications, enhancing the user experience and
                  performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
