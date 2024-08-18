import React from "react";

const Join = () => {
  return (
    <div className="join mt-10 ml-8 pb-6 flex flex-row">
      <div>
        <div className="bg-orange-500 w-[200px] h-1  rounded-[100%]   "></div>

        <div className="join-l mt-6 flex-1 ">
          <div className="flex flex-col text-white font-bold text-6xl gap-6 ">
            <div className="flex flex-row gap-4">
              <span className="text-stroke-3">READY TO</span>
              <span>LEVEL UP</span>
            </div>
            <div className="flex flex-row  gap-4">
              <span>YOUR BODY</span>
              <span className="text-stroke-3">WITH US ?</span>
            </div>
          </div>
        </div>
      </div>
      <div className="join-r flex-1 flex justify-center items-center ">
        <div>
          <div className="flex justify-center  w-[500px] bg-stone-400  items-center p-4 gap-2 ">
            <input
              className="p-4 bg-transparent placeholder-white italic flex-[3] "
              type="text"
              placeholder="Enter your email address here..."
            ></input>
            <button className="bg-orange-500 text-white font-bold  p-4 flex-1">
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
