import React from 'react'
import Arrow from "./Arrow.png";
import { FaArrowRight } from "react-icons/fa6";

const Card = (props) => {
  return (
    <div className="w-[300px] ">
        <div className="inner  bg-stone-400 mb-5 hover:bg-gradient-to-r from-orange-500 to-amber-300 p-6 rounded-xl ">
          <div className="text-white">{props.img}</div>
          
          <span className="text-white font-bold mt-3 text-xl">
            {props.heading}
          </span>
          <p className="text-white mt-3 tracking-wider ">
            {props.para}
          </p>  

          <div className="inner1 mt-3 font-bold">
            <span>Join Now</span>
            <FaArrowRight/>
          </div>
        </div>
    </div>
  )
}

export default Card