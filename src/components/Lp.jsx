import React from "react";
import "./Lp.css";
import Header from "./Header/Header.jsx";
import Fitness from "./Fitness.png";

const Lp = () => {
  return (
    <div className="lp" id="lp">
      <div className="llp">
        <Header />
        <span className=" fit font-bold  text-white text-3xl  tracking-[.5em]">
          FitZone
        </span>

        <div className="ad">
          <div></div>
          <span>Introducing The Best Fitness Club In Your Town</span>
        </div>

        <div className="text2">
          <span className="text21">SHAPE YOUR</span>
          <span className="text22">IDEAL BODY</span>
          <span className="text3">
            Transform Your Strength, Elevate Your Life—Your Fitness Journey
            Begins Here!
          </span>
        </div>

        <div className="figures">
          <div>
            <span className="one hover:text-orange-400">+50</span>
            <span className="text-lg text-stone-900 italic font-medium hover:text-orange-400">
              Expert Coaches
            </span>
          </div>
          <div>
            <span className="one hover:text-orange-400">+100</span>
            <span className="text-lg text-stone-900 italic font-medium hover:text-orange-400">
              Members Joined
            </span>
          </div>
          <div>
            <span className="one hover:text-orange-400">+20</span>
            <span className="text-lg text-stone-900 italic font-medium hover:text-orange-400">
              Fitness Programs
            </span>
          </div>
        </div>
        <div className="button">
          <button className="btn1">Get Started</button>
          <button className="btn2">Learn More</button>
        </div>
      </div>
      <div className="rlp bg-orange-400">
        <button className="btn3">Join Now</button>

        

        <img className="img2" src={Fitness} alt=""></img>

        <div className="text4">
          <span className="text41">BUILD YOUR</span>
          <span className="text42">STRENGTH</span>
        </div>
      </div>
    </div>
  );
};

export default Lp;
