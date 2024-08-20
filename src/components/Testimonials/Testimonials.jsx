import React from "react";

import Enter from "./Enter.jpeg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Enter1 from "./Enter1.jpg";
import Enter2 from "./Enter2.jpeg";
import Enter3 from "./Enter3.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onIndex = () => {
    if (currentIndex === 0) setCurrentIndex(data.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const afterIndex = () => {
    if (currentIndex === data.length - 1) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  };

  let data = [
    {
      image: Enter,
      review:
        "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
      name: "MATHEW HENDRICKSON",
      designation: "ENTERPRENEUR",
    },
    {
      image: Enter1,
      review:
        "Fitclub has transformed my life! The personalized training and diet plan helped me reach my fitness goals faster than I expected.",
      name: "SARAH JONES",
      designation: "MARKETING SPECIALIST",
    },
    {
      image: Enter2,
      review:
        "Thanks to Fitclub, I feel stronger and more confident. The trainers are amazing, and the environment is motivating.",
      name: "JAMES WILSON",
      designation: "SOFTWARE ENGINEER",
    },
    {
      image: Enter3,
      review:
        "Joining Fitclub was the best decision I made for my health. The community is supportive, and the results speak for themselves.",
      name: "EMILY DAVIS",
      designation: "GRAPHIC DESIGNER",
    },
  ];

  const testimonial = data[currentIndex];
  return (
    <div id="testimonials" className="testimonials mt-10 p-8 gap-10 flex flex-col md:flex-row ">
      <div className="left-t flex flex-col gap-[2rem] flex-[3]">
        <div className="font-bold text-orange-500 text-xl">TESTIMONIALS</div>
        <div className="text-stroke-3 text-6xl">WHAT THEY </div>
        <div className="text-5xl font-bold tracking-widest text-white ">
          SAY ABOUT US
        </div>

        <div className="review text-white font-medium tracking-wider">
          {testimonial.review}
        </div>
        <div className="flex flex-row gap-1">
          <div className="flex justify-between w-full">
            <div className="text-orange-500 font-semibold">
              <span>{testimonial.name}</span>
              <span className="text-white font-semibold">
                - {testimonial.designation}
              </span>
            </div>

            <div className="text-white text-4xl flex gap-2">
              <button onClick={onIndex}>
                <FaArrowLeft />
              </button>
              <button onClick={afterIndex}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="right-t flex-[2] flex justify-center ">
        <div className="relative h-[300px] w-[300px]">
          <div className="bg-transparent border-4 border-amber-500 w-[300px] h-[300px] absolute top-[-20px] left-[-20px] z-0"></div>
          <div className="bg-gradient-to-r from-yellow-600 to-orange-500 absolute w-[300px] h-[300px] z-10 bottom-[-20px] right-[-20px]"></div>
          <img
            className="w-[300px] h-[300px] object-cover z-20 relative "
            src={testimonial.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
