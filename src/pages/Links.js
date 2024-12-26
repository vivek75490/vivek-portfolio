import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
export const Links = () => {
  return (
    <div className="flex w-fit h-full px-4 py-4 ml-[100px] mt-5">
      <div className="bg-transparent w-[80px] justify-center flex h-[50px] items-center hover:bg-pink-700 rounded-3xl">
        <a href="https://github.com/vivek75490">
          <AiFillGithub size={35} className="mx-4 cursor-pointer" />
        </a>
      </div>
      <div className="bg-transparent w-[80px] justify-center flex h-[50px] items-center hover:bg-pink-700 rounded-3xl">
        <a href="https://www.linkedin.com/in/vivek0009?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <GrLinkedinOption size={35} className="mx-4 cursor-pointer" />
        </a>
      </div>
      <div className="bg-transparent w-[80px] justify-center flex h-[50px] items-center hover:bg-pink-700 rounded-3xl">
        <a href="--------">
          <BsTwitter size={35} className="mx-4 cursor-pointer hover:w-[50px]" />
        </a>
      </div>
      <div className="bg-transparent w-[80px] justify-center flex h-[50px] items-center hover:bg-pink-700 rounded-3xl">
        <a href="-----------">
          <AiFillInstagram size={35} className="mx-4 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};
