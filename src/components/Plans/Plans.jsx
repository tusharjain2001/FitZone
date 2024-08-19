import React from "react";
import "./Plans.css";
import Plancard from "./Plancard";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { LuDumbbell } from "react-icons/lu";

const Plans = () => {
  return (
    <div className="planscont">
      <div className="plansheader flex flex-col justify-between text-white p-8 text-2xl font-extrabold tracking-widest italic md:text-5xl md:flex-row">
        <span className="text-stroke-3">READY TO</span>
        <span>BEGIN YOUR</span>
        <span className="text-stroke-3">JOURNEY WITH US</span>
      </div>

      <div className="plancard flex flex-col p-8 items-center justify-center gap-[3rem] md:flex-row">
        <Plancard
          bg={"bg-stone-600"}
          img={<FaHeartCirclePlus size={30} className="text-orange-600" />}
          text={"BASIC PLAN"}
          price={"25"}
          data={[
            "2 hours of excercises",
            "Free consultation of coaches",
            "Access to the community",
          ]}
          ben={"See more benefits"}
          img2={<FaLongArrowAltRight size={20} />}
        />
        <Plancard
          bg={"bg-gradient-to-r from-yellow-600 to-orange-500"}
          img={<FaCrown size={30} />}
          text={"PREMIUM PLAN"}
          price={"30"}
          data={[
            "5 hours of excercises",
            "Free consultation of coaches",
            "Access to the community",
            "Access to swimming pool",
          ]}
          ben={"See more benefits"}
          img2={<FaLongArrowAltRight size={20} />}
        />
        <Plancard
          bg={"bg-stone-600"}
          img={<LuDumbbell size={30} className="text-orange-500" />}
          text={"PRO PLAN"}
          price={"45"}
          data={[
            "8 hours of excercises",
            "Consultation of private coach",
            "Free Fitness Merchandises",
          ]}
          ben={"See more benefits"}
          img2={<FaLongArrowAltRight size={20} />}
        />
      </div>
    </div>
  );
};

export default Plans;
