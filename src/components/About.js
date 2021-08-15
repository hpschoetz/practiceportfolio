import React from "react";

export default function About() {
  return(
    <section id="about">
      <div className="container mx-auto flex ps-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-500">
            Hello, my name is Hannah
          </h1>
          <p className="mb-8 leading-relaxed" >
            I am an oil painter and illustrator who is in the process of teaching myself how to program. 
            I am interested in perception and memory and use this as a starting point for most of my work. 
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img 
            className="object-cover object-center rounded"
            alt=""
            src="./Hannahphoto.png"
            />
        </div>
      </div>
    </section>
  );
}