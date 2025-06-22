import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="relative w-full bg-slate-400 overflow-hidden">
        <div className="container mx-auto p-8 rounded-xl">
          <div className="flex justify-center">
            <h1 className="py-9 font-bold text-4xl text-black">My Projects</h1>
          </div>

          <div
            className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-lg mb-8"
            data-aos="fade-left"
          >
            <div className="md:w-1/2 rounded-r-md">
              <img
                className="rounded-lg w-full"
                src="Icons/textcraft.png"
                alt="textcraft"
              />
            </div>
            <div className="md:w-1/2 p-4 md:pl-8">
              <h2 className="font-bold text-3xl mb-4">
                <div className="flex flex-wrap justify-start items-center gap-2 my-2">
                  <h2>TextCraft</h2>

                  <div className="rounded-3xl border border-red-900 bg-slate-500 w-24 text-center font-bold text-white text-sm md:text-xl">
                    React.js
                  </div>
                  <div className="rounded-xl border border-red-900 bg-slate-500 w-36 text-center font-bold text-white text-sm md:text-xl">
                    Tailwind CSS
                  </div>
                  <div className="rounded-3xl border border-red-900 bg-slate-500 w-28 text-center font-bold text-white text-sm md:text-xl">
                    BootStrap
                  </div>
                  <a
                    href="https://textcraftt.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="border border-red-900 bg-slate-500 w-28 text-center font-bold text-white text-sm md:text-xl">
                      Click Here
                    </div>
                  </a>
                </div>
              </h2>
              <p className="font-bold md:text-lg sm:text-xs text-wrap text-[10px]">
                I developed a versatile text manipulation application using
                React, featuring a range of functionalities to enhance user
                experience. Core features include converting text to uppercase
                and lowercase, as well as clearing the text. Additionally, I
                integrated a "Fun with Words" component, which offers a scenario
                generator, a palindrome checker, and an anagram generator.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-lg mb-9"
            data-aos="fade-right"
          >
            <div className="md:w-1/2 rounded-r-md">
              <img
                className="rounded-lg w-full"
                src="Icons/passop.png"
                alt="passop"
              />
            </div>
            <div className="md:w-1/2 p-4 md:pl-8">
              <h2 className="font-bold text-3xl mb-4">
                <div className="flex flex-wrap justify-start items-center gap-2 my-2">
                  <h2>PassOP</h2>

                  <div className="rounded-3xl border border-red-900 bg-slate-500 w-36 text-center font-bold text-white text-sm md:text-xl">
                    vite+React.js
                  </div>
                  <div className="rounded-xl border border-red-900 bg-slate-500 w-36 text-center font-bold text-white text-sm md:text-xl">
                    Tailwind CSS
                  </div>
                  <a
                    href="https://oppassword.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="border border-red-900 bg-slate-500 w-28 text-center font-bold text-white text-sm md:text-xl">
                      Click Here
                    </div>
                  </a>
                </div>
              </h2>
              <p className="font-bold md:text-lg sm:text-xs text-wrap text-[10px]">
                I have designed and implemented a sophisticated password manager
                application using Vite and React, enhanced with Tailwind CSS for
                styling. This application provides users with a secure and
                efficient way to manage their passwords locally. Key features
                include the ability to save new passwords, edit existing ones,
                and delete passwords as needed, all within a user-friendly
                interface that ensures data privacy and ease of use.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-lg mb-9"
            data-aos="fade-right"
          >
            <div className="md:w-1/2 rounded-r-md">
              <img
                className="rounded-lg w-full"
                src="Icons/dear.png"
                alt="Dear Diary"
              />
            </div>
            <div className="md:w-1/2 p-4 md:pl-8">
              <h2 className="font-bold text-3xl mb-4">
                <div className="flex flex-wrap justify-start items-center sm:gap-2 sm:my-2 md:gap-2 md:my-2 lg:gap-2 lg:my-2 gap-[2px] text-xl my-1 sm:text-2xl md:text-2xl lg:text-2xl">
                  <h2 className="my-1">Dear Diary</h2>

                  <div className="rounded-3xl border border-red-900 bg-slate-500 w-20 text-center font-bold text-white text-sm md:text-xl">
                    React
                  </div>
                  <div className="rounded-3xl border border-red-900 bg-slate-500 w-28 text-center font-bold text-white text-sm md:text-xl">
                    MongoDB
                  </div>
                  <div className="rounded-3xl border border-red-900 bg-slate-500 w-24 text-center font-bold text-white text-sm md:text-xl">
                    Node.js
                  </div>
                  <div className="rounded-3xl border border-red-900 bg-slate-500 w-32 text-center font-bold text-white text-sm md:text-xl">
                    Tailwind CSS
                  </div>
                  <a
                    href="https://ddiary.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="border border-red-900 bg-slate-500 w-28 text-center font-bold text-white text-sm md:text-xl">
                      Click Here
                    </div>
                  </a>
                </div>
              </h2>
              <p className="font-bold md:text-lg sm:text-xs text-wrap text-[10px]">
                I have implemented an diary on the cloud application where the
                user can login/signup and put up their daily experiences on the
                cloud.They can access their diaries from anywhere in the world
                and from any device. it also allows the user to add and delete
                an diary.
              </p>
            </div>
          </div>

          {/* <div className="text-black flex justify-center items-center font-bold text-4xl my-4"> */}

          <p className="text-black flex justify-center items-center font-bold text-4xl">
            <ReactTyped
              className="text-xl text-white font-bold"
              strings={["Stay Tuned for more!"]}
              typeSpeed={100}
              backSpeed={20}
              loop
            />
          </p>
        </div>
      </div>
      <section
        className="  rounded-2xl p-8 mb-12 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-center text-4xl font-extrabold mt-10 text-white mb-4">
          My Resume
        </h2>

        <p className="text-center text-white text-lg mb-8">
          Scroll through the preview below or click to view/download the full
          resume.
        </p>

        {/* Scrollable Resume Preview Box */}
        <div className="flex justify-center mb-8">
          <a
            href="/SavyaGupta-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-4xl h-[500px] overflow-y-scroll border border-gray-300 rounded-xl shadow-xl p-4 bg-gray-50 hover:shadow-2xl transition-shadow"
          >
            <img
              src="Icons/resume.jpg"
              alt="Resume Preview"
              className="w-full rounded-md"
            />
          </a>
        </div>

        {/* View / Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/SavyaGupta-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition-colors text-center shadow-md"
          >
            View Resume
          </a>

          <a
            href="/SavyaGupta-Resume.pdf"
            download
            className="bg-white border border-indigo-600 text-indigo-700 hover:bg-indigo-50 font-semibold py-3 px-6 rounded-full transition-colors text-center shadow-md"
          >
            Download Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
