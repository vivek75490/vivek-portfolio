import React from "react";
import sort from "./images/project5.png";
import week from "./images/project6.png";
import Portfolio from "./images/project9.png";
export const Work = () => {
  return (
    <div
      id="work"
      className="text-gray-700 flex-col w-[460px] justify-center sm:w-[600px] md:w-[1200px] px-4 py-6 bg-gradient-to-tr from-red-600 to-yellow-500 rounded-lg mx-auto mt-5"
    >
      <h1 className="text-gray-700 font-bold text-4xl text-center">Works</h1>
      <div className="flex-col  w-full h-full  mt-5">
        <div className="flex-col w-[350px]  text-center  text-xl mx-auto my-8">
          <img className="rounded-2xl" src={sort} alt='/'></img>
          <h1 className="text-2xl  mt-5"><a href="---------">Foodzz Company</a></h1>
        </div>
        <div className="flex-col text-center w-[350px] text-xl mx-auto my-5">
          <img className="rounded-2xl" src={week} alt='/'></img>
          <h1 className="text-2xl mt-5"><a href="-------">myTunes</a></h1>
        </div>
        <div className="flex-col text-center v w-[350px]   text-xl mx-auto my-5">
          <img className="rounded-2xl" src={Portfolio} alt='/'></img>
          <h1 className="text-2xl mt-5"><a href="--------">GreatZone</a></h1>
        </div>
      </div>
    </div>
  );
};
