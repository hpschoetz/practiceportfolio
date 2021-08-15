import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-white body-font">
     
      <Navbar />
      <About />
      <Projects />
      <Contact />
     

    </main>
  );
}
