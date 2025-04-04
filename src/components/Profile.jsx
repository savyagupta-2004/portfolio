import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Profile = () => {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-5xl mx-auto py-16 px-6 md:px-12 lg:px-20 bg-black text-white"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      tabIndex={-1}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Left Side - Text */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-4xl font-bold">Hi there</h3>
              <p className="text-gray-300 text-lg">
                I’m Savya, Im a Softwar Developer{" "}
                <a href="https://kalkifi.com/" className="text-cyan-400">
                  Skilledity
                </a>
                . My projects include UX design, UI animations, and icon
                illustration. Being comfortable with code allows me to rapidly
                prototype and validate experiences. If you’re interested in the
                tools and software I use, check out my{" "}
                <a href="/uses" className="text-cyan-400 underline">
                  Projects
                </a>
                .
              </p>
              <p className="text-gray-300 text-lg">
                In my spare time I like to play cricekt, play video games, and
                <span className="text-cyan-400 underline"> make food</span>
                {/* <a
                  href="/projects/volkihar-knight"
                  className="text-cyan-400 underline"
                >
                  make food
                </a> */}
                . I’m always down for hearing about new projects, so feel free
                to drop me a line.
              </p>
              <a
                href="https://www.linkedin.com/in/-savyagupta"
                target="blank"
                className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-600 transition duration-300"
              >
                ➤ Send me a message
              </a>
            </div>

            {/* Right Side - Image & Decorative Text */}
            <div className="relative flex justify-center items-center">
              <motion.img
                src="../Icons/savya.jpg"
                alt="Hamish"
                className="rounded-lg shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute top-0 right-0 text-white text-6xl font-bold rotate-90 translate-x-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                〰️ CODE
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Profile;
