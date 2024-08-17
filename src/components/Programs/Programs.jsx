import React from "react";
import "./Programs.css";

import { CgGym } from "react-icons/cg";
import Dumbbell from './Dumbbell1.jpg'
import Cardio from "./Cardio.png";
import { BiRun } from "react-icons/bi";
import Card from "../Card/Card.jsx";
import { FaFire } from "react-icons/fa";
import { IoFitness } from "react-icons/io5";



const Programs = () => {
  return (
    <div className="programs">
      <div className="header2">
        <span className="text5">PROGRAMS</span>
        <span>TO SUPPORT</span>
        <span className="text6">YOUR GROWTH</span>
      </div>

      <div className="cards ">

      <Card img={<CgGym size={40}/>} heading={"Strenth Training"} para={`In this program, you are trained to imporve your strength through
            many exercises.`}/>
      <Card img={<BiRun size={40}/>} heading={"Cardio Training"} para={`In this program, you are trained to do sequential moves in range of 20 until 30 minutes.`}/>
      <Card img={<FaFire size={40}/>} heading={"Fat Burning"} para={"This program is suitable for you who wants to get rid of fat and lose their weight."}/>
      <Card img={<IoFitness size={40}/>} heading={"Health Fitness"} para={`This program is designed for those who excercise only for their body fitness not body building.`}/>


        {/* <div className="inner bg-stone-400  hover:bg-gradient-to-r from-orange-500 to-amber-300 p-6 rounded-xl">
          
          <CgGym size={35}/>
          <span className="text-white font-bold mt-3 text-xl">Strength Training</span>
          <p className="text-white mt-3 tracking-wider ">
            In this program, you are trained to imporve your strength through
            many exercises.
          </p>  

          <div className="inner1 mt-3 font-bold">
            <span>Join Now</span>
            <img className="arrow w-6 h-4" src={Arrow} alt=""></img>
          </div>
        </div>
        <div className="inner bg-stone-400  hover:bg-gradient-to-r from-orange-500 to-amber-300 p-6 rounded-xl">
          
          <BiRun size={35}/>
          <span className="text-white font-bold mt-3 text-xl">Cardio Training</span>
          <p className="text-white mt-3 tracking-wider">
            In this program, you are trained to imporve your strength through
            many exercises.
          </p>

          <div className="inner1 mt-3 font-bold">
            <span>Join Now</span>
            <img className="arrow w-6 h-4" src={Arrow} alt=""></img>
          </div>
        </div>
        <div className="inner bg-stone-400  hover:bg-gradient-to-r from-orange-500 to-amber-300 p-2 rounded-xl">
          <img className="mix-blend-multiply object-left w-[160px] pt-3" src={Dumbbell} alt=""></img>
          <span className="text-white font-bold mt-3">Fat Burning</span>
          <p className="text-white mt-3 tracking-wider">
            In this program, you are trained to imporve your strength through
            many exercises.
          </p>

          <div className="inner1 mt-3 font-bold">
            <span>Join Now</span>
            <img className="arrow w-6 h-4" src={Arrow} alt=""></img>
          </div>
        </div>
        <div className="inner bg-stone-400  hover:bg-gradient-to-r from-orange-500 to-amber-300 p-2 rounded-xl">
          <img className="mix-blend-multiply object-left w-[160px] pt-3" src={Dumbbell} alt=""></img>
          <span className="text-white font-bold mt-3">Health Fitness</span>
          <p className="text-white mt-3 tracking-wider">
            In this program, you are trained to imporve your strength through
            many exercises.
          </p>

          <div className="inner1 mt-3 font-bold">
            <span>Join Now</span>
            <img className="arrow w-6 h-4" src={Arrow} alt=""></img>
          </div>
        </div> */}
        
      </div>
    </div>
  );
};

export default Programs;
