import React, { useState } from 'react';
import { FcAbout } from "react-icons/fc";
import { IoLogoAppleAr } from "react-icons/io5";
import { TbTimeDuration10 } from "react-icons/tb";
import { GiHeartBeats } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { IoFitnessSharp } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";

const About = () => {
  const [data] = useState([
    {
      id: 1,
      icon: <TbTimeDuration10 />,
      title: "Real-Time Solutions",
      description: "Fast and spontaneous response from our Aurora Agent."
    },
    {
      id: 2,
      icon: <GoGoal />,
      title: "Personalized Diet Plans",
      description: "Get meal plans designed to match your goals, preferences, and lifestyle."
    },
    {
      id: 3,
      icon: <GiHeartBeats />,
      title: "Health Awareness Tips",
      description: "Stay informed with daily wellness, fitness, and mindfulness tips."
    },
    {
      id: 4,
      icon: <IoFitnessSharp />,
      title: "Activity & Fitness Tracking",
      description: "Track your activity levels and receive smart suggestions for improvement."
    },
    {
      id: 5,
      icon: <MdHealthAndSafety />,
      title: "Holistic Well-being",
      description: "Focus on nutrition, mental health, and sustainable healthy habits."
    }
  ]);

  return (
    <div className="w-[95%] mx-auto min-h-screen bg-black text-white rounded-2xl flex flex-col gap-10 py-10 px-5 sm:px-8 md:px-12 lg:px-16">
      
    
      <div className="flex flex-col gap-5">
        <span className="flex flex-row items-center gap-3 text-blue-400 text-3xl md:text-4xl font-bold">
          <FcAbout className="text-4xl md:text-5xl" />
          <h1>About</h1>
        </span>
        <p className="text-[16px] sm:text-[17px] md:text-[18px] text-justify leading-7 text-blue-200 font-medium">
          Welcome to our Health Awareness & Diet Planner! We believe that small lifestyle changes can lead to big health improvements. 
          Our platform helps you make informed choices about your body, diet, and daily habits by providing personalized health awareness 
          tips and tailored diet plans. By understanding key details like your age, activity level, food preferences, and wellness goals, 
          we craft recommendations that fit your lifestyle—not generic advice.
          Whether your goal is to lose weight, build strength, stay active, or simply live healthier, our system adapts to your needs.
          We focus on promoting balanced nutrition, regular physical activity, mental well-being, and hydration awareness. 
          Our goal is to help you build sustainable habits—not short-term fixes—so you can achieve long-lasting results.
          Start your journey today toward a healthier, more energetic, and mindful version of yourself!
        </p>
      </div>

     
      <div className="flex flex-col gap-6">
        <span className="flex flex-row items-center gap-3 text-blue-400 text-3xl md:text-4xl font-bold">
          <IoLogoAppleAr className="text-4xl md:text-5xl" />
          <h1>Benefits</h1>
        </span>

       
        <div className="w-full flex flex-wrap justify-center items-center gap-5 md:gap-7">
          {data.map((ele) => (
            <div
              key={ele.id}
              className="w-[90%]  h-[200px] sm:w-[45%] md:w-[250px] bg-blue-950 rounded-2xl flex flex-col justify-center items-center text-center gap-2  hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-blue-600/40"
            >
              <p className="text-[45px] md:text-[50px] text-blue-300">{ele.icon}</p>
              <p className="text-lg md:text-xl font-semibold text-white">{ele.title}</p>
              <p className="text-blue-200 text-[14px] md:text-[15px]">{ele.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
