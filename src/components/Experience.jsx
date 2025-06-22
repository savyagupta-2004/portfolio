import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Added duration for smoother animations
  }, []);

  return (
    <>
      <section className="relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              My <span className="text-yellow-300">Experiences</span>
            </h1>
            {/* Optional: Add a subtitle or animated text */}

            <p className="text-black flex justify-center items-center font-bold text-4xl">
              <ReactTyped
                className="text-xl text-white font-bold"
                strings={[
                  "Building impactful solutions.",
                  "Innovating for the future.",
                ]}
                typeSpeed={100}
                backSpeed={20}
                loop
              />
            </p>
          </div>

          {/* Experience Card */}
          <div
            className="flex flex-col md:flex-row items-center bg-white bg-opacity-90 p-8 rounded-3xl shadow-2xl transition-transform transform hover:scale-105"
            data-aos="fade-up"
          >
            {/* Company Logo */}
            <div className="md:w-1/2 rounded-lg overflow-hidden">
              <img
                className="rounded-lg w-full transform transition duration-500 hover:scale-110"
                src="Icons/keyncodersfront.png"
                alt="flexhub"
              />
            </div>

            {/* Experience Details */}
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Keyncoders Innovations Private Limited
              </h2>
              <p className="text-gray-600 mb-4">Hazaribagh, Jharkhand</p>
              <p className="text-indigo-600 font-medium mb-6">
                Software Intern (May 2024 - June 2024)
              </p>

              {/* Action Button */}
              <a
                href="https://drive.google.com/drive/folders/1IxPB_wM7dN1SBEFuNniBfwhNIRxBmT3v?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6"
              >
                <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition-colors">
                  View Certificate
                </button>
              </a>

              {/* Experience Points */}
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">→</span>
                  <span className="text-gray-700">
                    Contributed to the development of the company's core
                    products, focusing on improving user experience.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">→</span>
                  <span className="text-gray-700">
                    Assisted in backend API development, ensuring seamless data
                    flow and integration with the frontend.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">→</span>
                  <span className="text-gray-700">
                    Collaborated closely with senior developers to troubleshoot
                    issues and optimize code for better performance.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative Elements (Optional) */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 rounded-full opacity-50 blur-3xl"></div>
      </section>
      <section className="relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Experience Card */}
          <div
            className="flex flex-col md:flex-row items-center bg-white bg-opacity-90 p-8 rounded-3xl shadow-2xl transition-transform transform hover:scale-105"
            data-aos="fade-up"
          >
            {/* Company Logo */}
            <div className="md:w-1/2 rounded-lg overflow-hidden">
              <img
                className="rounded-lg w-full transform transition duration-500 hover:scale-110"
                src="Icons/keyncodersback.png"
                alt="flexhub"
              />
            </div>

            {/* Experience Details */}
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Keyncoders Innovations Private Limited
              </h2>
              <p className="text-gray-600 mb-4">Hazaribagh, Jharkhand</p>
              <p className="text-indigo-600 font-medium mb-6">
                Senior Developer (June 2024 - Dec 2024)
              </p>

              {/* Action Button */}
              <a
                href="https://drive.google.com/drive/folders/1IxPB_wM7dN1SBEFuNniBfwhNIRxBmT3v?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6"
              >
                <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition-colors">
                  View Certificate
                </button>
              </a>

              {/* Experience Points */}
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">→</span>
                  <span className="text-gray-700">
                    Led a team of developers in designing and implementing
                    scalable solutions for various client projects.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">→</span>
                  <span className="text-gray-700">
                    Actively participated in coding, particularly in frontend
                    and backend development, ensuring code quality.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">→</span>
                  <span className="text-gray-700">
                    Managed the entire software development lifecycle, from
                    planning and design to deployment and maintenance.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative Elements (Optional) */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 rounded-full opacity-50 blur-3xl"></div>
      </section>
      <section className="relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Experience Card */}
          <div
            className="flex flex-col md:flex-row items-center bg-white bg-opacity-90 p-8 rounded-3xl shadow-2xl transition-transform transform hover:scale-105"
            data-aos="fade-up"
          >
            {/* Company Logo */}
            <div className="md:w-1/2 rounded-lg overflow-hidden">
              <img
                className="rounded-lg w-full transform transition duration-500 hover:scale-110"
                src="Icons/skilledity.png"
                alt="Skilledity"
              />
            </div>

            {/* Experience Details */}
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Skilledity Solution Private Limited
              </h2>
              <p className="text-gray-600 mb-4">Bangalore, Karnataka</p>
              <p className="text-indigo-600 font-medium mb-6">
                Senior Developer (Feb 2025 - May 2025)
              </p>

              {/* Action Button */}
              <a
                href="https://drive.google.com/drive/folders/1IxPB_wM7dN1SBEFuNniBfwhNIRxBmT3v?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6"
              >
                <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition-colors">
                  View Certificate
                </button>
              </a>

              {/* Experience Points */}
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">→</span>
                  <span className="text-gray-700">
                    Designed and developed a full-stack website, integrating
                    frontend and backend components for a seamless user
                    experience.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">→</span>
                  <span className="text-gray-700">
                    Optimized performance and scalability, implementing best
                    coding practices to ensure a robust and efficient system.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">→</span>
                  <span className="text-gray-700">
                    Collaborated with cross-functional teams, gathering
                    requirements, troubleshooting issues, and delivering a
                    high-quality product within deadlines.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative Elements (Optional) */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 rounded-full opacity-50 blur-3xl"></div>
      </section>
      <section className="relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Experience Card */}
          <div
            className="flex flex-col md:flex-row items-center bg-white bg-opacity-90 p-8 rounded-3xl shadow-2xl transition-transform transform hover:scale-105"
            data-aos="fade-up"
          >
            {/* Company Logo */}
            <div className="md:w-1/2 rounded-lg overflow-hidden">
              <img
                className="rounded-lg w-full transform transition duration-500 hover:scale-110"
                src="Icons/fixmybug.png"
                alt="Skilledity"
              />
            </div>

            {/* Experience Details */}
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Building FixmyBug
              </h2>
              <p className="text-gray-600 mb-4">Hyderabad, Telengana</p>
              <a
                href="https://fixmybug.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6"
              >
                <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition-colors">
                  Visit Website
                </button>
              </a>

              {/* Experience Points */}
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">→</span>
                  <span className="text-gray-700">
                    Provided bug-fixing services under the brand "FixmyBug",
                    successfully solving 150+ issues for various clients.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">→</span>
                  <span className="text-gray-700">
                    Hired and managed a team of 5 skilled bug fixers to scale
                    operations and ensure timely delivery of solutions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl">→</span>
                  <span className="text-gray-700">
                    Made use various react technologies inorder to ensure seo
                    optimization, and smooth page rendering.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative Elements (Optional) */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 rounded-full opacity-50 blur-3xl"></div>
      </section>
    </>
  );
};

export default Experience;
