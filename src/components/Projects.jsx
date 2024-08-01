import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative w-full bg-slate-400 overflow-hidden">
      <div className="container mx-auto p-8 rounded-xl">
        <div className="flex justify-center">
          <h1 className="py-9 font-bold text-4xl text-black">My Projects</h1>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-lg mb-8"
          data-aos="fade-right"
        >
          <div className="md:w-1/2 rounded-r-md">
            <img
              className="rounded-lg w-full"
              src="Icons/flexhub.png"
              alt="flexhub"
            />
          </div>
          <div className="md:w-1/2 p-4 md:pl-8">
            <h2 className="font-bold text-3xl mb-4">
              <div className="flex flex-wrap justify-start items-center gap-2 my-2">
                <h2>FlexHub</h2>

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
                  href="https://savyagupta-2004.github.io/FlexHub-react/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="border border-red-900 bg-slate-500 w-28 text-center font-bold text-white text-sm md:text-xl">
                    Click Here
                  </div>
                </a>
              </div>
            </h2>

            <p className="text-base md:text-lg">
              I developed a comprehensive cricket web application using React,
              featuring a range of functionalities for an engaging user
              experience. Users can select the type of match, such as 2-over or
              5-over games, and choose their batsmen and bowlers. The game
              includes two innings, with a detailed display of the winner and
              the Man of the Match at the end. The application accurately
              simulates all cricket scenarios, including wide balls, no balls,
              and various types of dismissals.
            </p>
          </div>
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
            <p className="text-base md:text-lg">
              I developed a versatile text manipulation application using React,
              featuring a range of functionalities to enhance user experience.
              Core features include converting text to uppercase and lowercase,
              as well as clearing the text. Additionally, I integrated a "Fun
              with Words" component, which offers a scenario generator, a
              palindrome checker, and an anagram generator.
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
            <p className="text-base md:text-lg">
              I have designed and implemented a sophisticated password manager
              application using Vite and React, enhanced with Tailwind CSS for
              styling. This application provides users with a secure and
              efficient way to manage their passwords locally. Key features
              include the ability to save new passwords, edit existing ones, and
              delete passwords as needed, all within a user-friendly interface
              that ensures data privacy and ease of use.
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
              <div className="flex flex-wrap justify-start items-center gap-2 my-2">
                <h2>Dear Diary</h2>

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
            <p className="text-base md:text-lg">
              I have designed and implemented a sophisticated password manager
              application using Vite and React, enhanced with Tailwind CSS for
              styling. This application provides users with a secure and
              efficient way to manage their passwords locally. Key features
              include the ability to save new passwords, edit existing ones, and
              delete passwords as needed, all within a user-friendly interface
              that ensures data privacy and ease of use.
            </p>
          </div>
        </div>

        {/* <div className="text-black flex justify-center items-center font-bold text-4xl my-4"> */}
        <p
          className="text-black flex justify-center items-center font-bold text-4xl "
          style={{ marginBottom: "30px" }}
        >
          Upcoming Projects
        </p>
        <div
          className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-lg mb-9 "
          data-aos="fade-right"
        >
          <div className="md:w-1/2 rounded-r-md">
            <img
              className="rounded-lg w-full"
              src="Icons/chaipoint.png"
              alt="chaipoint"
            />
          </div>
          <div className="md:w-1/2 p-4 md:pl-8">
            <h2 className="font-bold text-3xl mb-4">
              <div className="flex flex-wrap justify-start items-center gap-2 my-2">
                <h2>Chai Point!</h2>

                <div className="rounded-3xl border border-red-900 bg-slate-500 w-24 text-center font-bold text-white text-sm md:text-xl">
                  Next.js
                </div>
                <div className="rounded-xl border border-red-900 bg-slate-500 w-36 text-center font-bold text-white text-sm md:text-xl">
                  Tailwind CSS
                </div>

                {/* add link here 
                <a
                  href="https://oppassword.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="border border-red-900 bg-slate-500 w-28 text-center font-bold text-white text-sm md:text-xl">
                    Click Here
                  </div>
                </a> */}
              </div>
            </h2>
            <p className="text-base md:text-lg">
              I'am developing a Next.js application named Chai Point, designed
              for users to explore projects from their favorite creators and for
              creators to receive funding through Razorpay integrations. The
              project is currently under development and leverages Tailwind CSS
              for styling, alongside other modern web technologies. Key features
              include a user-friendly interface and secure payment processing.
              Future updates will introduce more functionalities to enhance user
              engagement and overall experience. My goal is to create a robust
              platform that supports and promotes creative projects.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-lg mb-9 "
          data-aos="fade-right"
        >
          <div className="md:w-1/2 rounded-r-md">
            <img
              className="rounded-lg w-full"
              src="Icons/snack.png"
              alt="chaipoint"
            />
          </div>
          <div className="md:w-1/2 p-4 md:pl-8">
            <h2 className="font-bold text-3xl mb-4">
              <div className="flex flex-wrap justify-start items-center gap-2 my-2">
                <h2>SnackSnap</h2>

                <div className="rounded-3xl border border-red-900 bg-slate-500 w-24 text-center font-bold text-white text-sm md:text-xl">
                  Next.js
                </div>
                <div className="rounded-xl border border-red-900 bg-slate-500 w-36 text-center font-bold text-white text-sm md:text-xl">
                  Tailwind CSS
                </div>

                {/* add link here 
                <a
                  href="https://oppassword.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="border border-red-900 bg-slate-500 w-28 text-center font-bold text-white text-sm md:text-xl">
                    Click Here
                  </div>
                </a> */}
              </div>
            </h2>
            <p className="text-base md:text-lg">
              I have developed a food delivery application named Snack Snap
              using Next.js. This app enables users to browse and order food
              items seamlessly. It incorporates modern web technologies to
              provide a responsive and intuitive user experience. The
              application features a user-friendly interface for menu selection
              and order placement. In addition, Snack Snap integrates with a
              backend API for real-time order management and updates. The app
              employs a clean design and optimized performance for an engaging
              user experience. It supports various functionalities such as user
              authentication, order tracking, and payment processing, ensuring a
              comprehensive solution for online food ordering.
            </p>
          </div>
        </div>
        {/* </div> */}

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
  );
};

export default Projects;
