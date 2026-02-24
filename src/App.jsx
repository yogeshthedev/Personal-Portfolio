import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Cursor from "./components/Cursor/Cursor";
import Projects from "./sections/Projects/Projects";
import About from "./sections/About/About";

const App = () => {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Projects/>
        <About/>
      </main>
    </>
  );
};

export default App;
