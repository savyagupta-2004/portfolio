import React from "react";
import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiC,
  SiCplusplus,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiVite,
  SiAxios,
  SiSocketdotio,
  SiMongoose,
  SiFirebase,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { FaAws, FaCode } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="w-full  text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-14">
          <h1 className="text-4xl font-extrabold tracking-wide">
            My <span className="text-purple-500">Skills & Tools</span>
          </h1>
          <p className="text-lg text-gray-400">
            A curated set of technologies I’ve worked with across frontend,
            backend, DevOps, and tools.
          </p>
        </div>

        <Section title="Languages & Frameworks">
          <IconGrid
            icons={[
              <DiHtml5 />,
              <DiCss3 />,
              <DiJavascript1 />,
              <DiReact />,
              <SiRedux />,
              <DiNodejs />,
              <SiExpress />,
              <SiNextdotjs />,
              <DiJava />,
              <SiC />,
              <SiCplusplus />,
              <DiPython />,
            ]}
          />
        </Section>

        <Section title="Libraries & Databases">
          <IconGrid
            icons={[
              <SiVite />,
              <SiAxios />,
              <SiSocketdotio />,
              <SiTailwindcss />,
              <DiMongodb />,
              <SiMongoose />,
              <SiFirebase />,
              <SiPostgresql />,
              <SiPrisma />,
            ]}
          />
        </Section>

        <Section title="Cloud & DevOps">
          <IconGrid
            icons={[<FaAws />, <SiDocker />, <SiVercel />, <SiNetlify />]}
          />
        </Section>

        <Section title="Tools I Use">
          <IconGrid
            icons={[
              <DiGit />,
              <SiGithub />,
              <SiGitlab />,
              <FaCode />,
              <SiPostman />,
              <SiFigma />,
            ]}
          />
        </Section>

        <div className="mt-20 text-center text-gray-500">
          <h2 className="text-xl font-medium">GitHub Activity (Coming Soon)</h2>
        </div>
      </div>
    </div>
  );
}

// Reusable section block
function Section({ title, children }) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-center text-purple-400 mb-8 uppercase tracking-wider">
        {title}
      </h2>
      {children}
    </div>
  );
}

// Icon grid with animation
// Icon grid with structured layout
function IconGrid({ icons }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 px-4">
      {icons.map((Icon, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: idx * 0.05,
            type: "spring",
            stiffness: 120,
          }}
          className="text-5xl text-white bg-[#181818] p-6 rounded-2xl shadow-lg hover:scale-110 hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center"
        >
          {Icon}
        </motion.div>
      ))}
    </div>
  );
}

export default AboutMe;
