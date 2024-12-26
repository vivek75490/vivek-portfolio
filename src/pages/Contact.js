import React from "react";

export const Contact = () => {
  return (
    <div id="contact" className="flex-col h-full w-[460px] sm:w-[600px] md:w-[1200px] px-4 py-6 bg-gradient-to-tr from-red-600 to-yellow-500 rounded-lg mx-auto mt-5">
      <h1 className="text-center text-gray-700 font-bold text-5xl mt-5">Get In Touch</h1>
      <p className="mt-5 text-gray-700 text-lg">
      I am currently searching for opportunities as a Front-End Developer. As a recent graduate with a strong foundation in front-end development, I am eager to apply my skills and gain hands-on experience. My inbox is always open for any potential vacancies. If you have any questions or just want to connect, I’ll do my best to get back to you!
      </p>
      <div className="text-center ">
      <button className=" text-black-700 text-lg mt-10 border-2  border-black px-6 py-2 hover:bg-black/30"><a href="mailto:vk340922@gmail.com?">Say Hello!</a></button>
      </div>
    </div>
  );
};
