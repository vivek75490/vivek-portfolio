import React from "react";
import imgabout from "./images/about.jpg"
export const About = () => {
  return (
    <div id="about" className="flex-col h-full w-[460px] sm:w-[600px] md:w-[1200px] px-4 py-6 bg-gradient-to-tr from-red-600 to-yellow-500 rounded-lg mx-auto mt-5">
      <h2 className="text-gray-700 font-bold text-3xl text-center ">About Me</h2>
      <p className="mt-3 text-gray-800 text-lg">
      I'm an Indian front-end developer that learnt everything on my own. I'm passionate about building completely responsive, amazing user experiences for websites. I enjoy solving problems, am driven to learn how to create scalable distribution systems, and place a high value on producing maintainable code. Websites can be accessed by anybody, on any device, thanks to my responsive design work. 
      </p>
      <h3 className="text-gray-700 font-bold text-2xl">Skills</h3>
      <ul className="mt-3 text-gray-800 text-lg">
        <li>HTML / CSS</li>
        <li>JavaScript</li>
        <li>React Js</li>
        <li>Node js</li>
        <li>mongoDB</li>
        <li>Bootstrap 5</li>
        <li>React-Bootstrap</li>
        <li>Git/Github</li>
      </ul>
      <div className=" w-fit relative md:mt-[-251px] md:ml-[500px]">
      <img src={imgabout}  alt="about"></img>
      </div>
    </div>
  );
};
