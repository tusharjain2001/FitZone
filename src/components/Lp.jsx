import React, { useEffect } from "react";
import "./Lp.css";
import Header from "./Header/Header.jsx";
import Fitness from "./Fitness.png";
import { useState } from "react";

const Lp = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "", 
    number:"",
    duration:"",
  });



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setFormData({ name: "", email: "", gender: "" ,number:"",duration:""});
    alert("Your form is successfully submitted!")
  };

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
      <div className="rlp bg-orange-400 relative ">
        <button className="btn3" onClick={() => setShowForm(true)}>
          Join Now
        </button>

        <img className="img2" src={Fitness} alt=""></img>

        <div className="text4">
          <span className="text41">BUILD YOUR</span>
          <span className="text42">STRENGTH</span>
        </div>
      </div>

      {showForm && (
        <form className="join-form bg-[#00000066] backdrop-blur rounded px-8 pt-6 pb-8  flex flex-col gap-2 absolute left-[1250px] top-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white text-sm font-bold mb-2 ">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-stone-300 p-1 placeholder:text-black" 
              placeholder="Enter name"
              
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-stone-300 p-1 placeholder:text-black"
              placeholder="ysu@gmail.com"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2">Contact No.:</label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="bg-stone-300 p-1 placeholder:text-black "
              placeholder="6786392851"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2">Gender:</label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="bg-stone-300 p-1"
            >
              <option className="font-bold bg-white" value="Select Gender">Select Gender</option>
              <option className="font-bold bg-white" value="male">Male</option>
              <option className="font-bold bg-white" value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2 ">Duration:</label>
            <select
              name="duration"
              id="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="bg-stone-300 p-1"
            >
              <option className="font-bold bg-white" value="">Select Duration</option>
              <option className="font-bold bg-white" value="1month">1 month</option>
              <option className="font-bold bg-white" value="3months">3 months</option>
              <option className="font-bold bg-white" value="6months">6 months</option>
            </select>
          </div>
          <button className="font-bold bg-black text-white p-3 mt-4" type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Lp;
