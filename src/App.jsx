import { useState } from "react";

import "./App.css";

import Content from "./components/Content";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Socials from "./components/Socials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <div className=" absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Content />
        <Skills />

        <Projects />
        <Contact />
        <Socials />
      </div>
    </>
  );
}

export default App;
