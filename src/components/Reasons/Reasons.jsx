import React from "react";
import "./Reasons.css";
import GYM from "./Gym1.jpg";
import GYMM from "./Gym2.webp";
import GYMMM from "./Gym3.jpeg";
import GYMMMM from "./Gym4.jpeg";
import { LuCheckCheck } from "react-icons/lu";
import { SiNike } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { SiNewbalance } from "react-icons/si";
import { SiPuma } from "react-icons/si";

const Reasons = () => {
  return (
    <div
      className="reasons gap-4 pb-10 flex flex-col mt-[100px] md:flex-row p-4"
      id="reasons "
    >
      <div className="reasonleft h-[600px] gap-4 flex flex-row flex-1 ml-6 ">
        <div className="reasonleftleft flex-1 h-full">
          <img className="one h-full object-cover" src={GYM} alt="" />
        </div>
        <div className="reasonleftright gap-4 flex flex-col flex-[2] h-full">
          <div className="reasonleftrightup w-full flex-1  ">
            <img className="two w-full object-cover h-full" src={GYMM} alt="" />
          </div>
          <div className="reasonleftrightdown gap-4 flex-1 flex-row flex">
            <div className="reasonleftleftrightdownleft">
              <img className="three object-cover h-full" src={GYMMM} alt="" />
            </div>
            <div className="reasonleftleftrightdownright">
              <img className="four h-full object-cover" src={GYMMMM} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="reasonright flex-1 ">
        <div className="text-orange-400 font-bold text-xl tracking-wider">
          SOME REASONS
        </div>
        <div className="flex flex-row first-letter gap-6 text-white font-extrabold text-2xl tracking-wide mt-4 md:text-6xl">
          <div className="text-stroke-3 text-transparent">WHY</div>
          <div>CHOOSE US ?</div>
        </div>
        <div className="points mt-5 flex flex-col gap-3">
          <div className="flex flex-row gap-3 text-white items-center font-bold tracking-wider">
            {" "}
            <LuCheckCheck className="text-orange-500" size={24} /> OVER 50+
            EXPERT COACHES{" "}
          </div>
          <div className="flex flex-row gap-3 text-white items-center font-bold tracking-wider">
            {" "}
            <LuCheckCheck className="text-orange-500" size={24} /> TRAIN SMARTER
            AND FASTER THAN BEFORE{" "}
          </div>
          <div className="flex flex-row gap-3 text-white items-center font-bold tracking-wider">
            {" "}
            <LuCheckCheck className="text-orange-500" size={24} /> 1 FREE
            PROGRAM FOR NEW MEMBER{" "}
          </div>
          <div className="flex flex-row gap-3 text-white items-center font-bold tracking-wider">
            {" "}
            <LuCheckCheck className="text-orange-500" size={24} /> RELIABLE
            PARTNERS{" "}
          </div>
        </div>
        <div className="text-stone-700 font-medium mt-4 ml-3">OUR PARTNERS</div>
        <div className="flex flex-row gap-4   ml-3">
          <CgAdidas className="text-stone-700 " size={44} />
          <SiNike className="text-stone-700 " size={44} />
          <SiNewbalance className="text-stone-700 " size={44} />
          <SiPuma className="text-stone-700 " size={44} />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
