import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer pb-12">
      <div className="bg-white w-full h-1    "></div>

      <div className="flex flex-row text-white gap-8 justify-center mt-44  items-center">
        <FaGithub
          className={"hover:text-orange-500 transition-colors duration-500"}
          size={50}
        />
        <FaInstagram
          className={"hover:text-orange-500 transition-colors duration-500"}
          size={50}
        />
        <FaLinkedin
          className={"hover:text-orange-500 transition-colors duration-500"}
          size={50}
        />
      </div>
      <span className="flex mt-20     text-white text-5xl justify-center tracking-[0.5em] ">
        <div className=" hover:text-orange-500 transition-colors duration-500 font-semibold">FitZone</div>
      </span>
    </div>
  );
};

export default Footer;
