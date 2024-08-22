import React from "react";
import { LiaCheckCircleSolid } from "react-icons/lia";

const Plancard = (props) => {
  
  return (
    <div className={`cardcontainer flex flex-col  text-white w-[20rem] gap-[2rem]  p-8 ${props.bg}`}>
      
      <div>{props.img}</div>
      <span className="font-semibold tracking-wider">{props.text}</span>
      <span className="font-bold text-6xl">$ {props.price}</span>
      <div className="flex flex-col gap-[1rem] ">
        {props.data.map((feature) => (
          <div className="flex flex-row gap-3 items-center font-medium">
            <LiaCheckCircleSolid className="text-white  " />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <span>{props.ben} </span>
        <div>{props.img2}</div>
      </div>
      <button className="flex bg-white text-black font-semibold p-3 w-full justify-center rounded-lg onClick={() => setShowForm(true)}">
        Join Now
      </button>
    </div>
  );
};

export default Plancard;
