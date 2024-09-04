import { useState } from "react";
import { OrbitSpace } from "orbit-space";
import Starfield from "react-starfield";
import "./App.css";

import Content from "./components/Content";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Experience from "./components/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 mt-16">
        <Content />
        <Experience />
        <OrbitSpace speed={20000} density={200} brightness={1.5}>
          {/* Adjust properties like speed, density, and brightness as needed */}
          <Skills />
        </OrbitSpace>

        <Projects />
        <Contact />
        <Socials />
      </div>
    </>
  );
}

export default App;
