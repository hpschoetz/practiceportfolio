import React from "react";

export default function Navbar() {
  return(
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-purple-400 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Hannah Schoetz
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center
        text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-purple-300">
            Artwork
          </a>
          <a href="#contact" className="mr-5 hover:text-purple-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

