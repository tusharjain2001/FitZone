import React from "react";
import "./Programs.css";

import { CgGym } from "react-icons/cg";
import Dumbbell from "./Dumbbell1.jpg";
import Cardio from "./Cardio.png";
import { BiRun } from "react-icons/bi";
import Card from "../Card/Card.jsx";
import { FaFire } from "react-icons/fa";
import { IoFitness } from "react-icons/io5";

const Programs = () => {
  return (
    <div className="programs" id="program">
      <div className="header2 text-2xl flex-col gap-3 mt-10 md:text-5xl md:flex-row md:gap-8 ">
        <span className="text5">PROGRAMS</span>
        <span>TO SUPPORT</span>
        <span className="text6">YOUR GROWTH</span>
      </div>

      <div className="cards ">
        <Card
          img={<CgGym size={40} />}
          heading={"Strenth Training"}
          para={`In this program, you are trained to imporve your strength through
            many exercises.`}
           />
        <Card
          img={<BiRun size={40} />}
          heading={"Cardio Training"}
          para={`In this program, you are trained to do sequential moves in range of 20 until 30 minutes.`}
        />
        <Card
          img={<FaFire size={40} />}
          heading={"Fat Burning"}
          para={
            "This program is suitable for you who wants to get rid of fat and lose their weight."
          }
        />
        <Card
          img={<IoFitness size={40} />}
          heading={"Health Fitness"}
          para={`This program is designed for those who excercise only for their body fitness.`}
        />

        
      </div>
    </div>
  );
};

export default Programs;
