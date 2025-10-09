import React, { useState } from 'react'
import { FcAbout } from "react-icons/fc";
import { IoLogoAppleAr } from "react-icons/io5";
import { TbTimeDuration10 } from "react-icons/tb";
import { GiHeartBeats } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { IoFitnessSharp } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";

const About = () => {
    const [data] = useState([
  { id:1,
    icon: <TbTimeDuration10 />,
    title: "Real-Time Solutions",
    description: "Fast and spontaneous response from our Aurora Agent."
  },
  { 
    id:2,
    icon: <GoGoal />,
    title: "Personalized Diet Plans",
    description: "Get meal plans designed to match your goals, preferences, and lifestyle."
  },
  { 
    id:3,
    icon: <GiHeartBeats />,
    title: "Health Awareness Tips",
    description: "Stay informed with daily wellness, fitness, and mindfulness tips."
  },
  { 
    id:4,
    icon: <IoFitnessSharp />,
    title: "Activity & Fitness Tracking",
    description: "Track your activity levels and receive smart suggestions for improvement."
  },
  { 
    id:5,
    icon: < MdHealthAndSafety  />,
    title: "Holistic Well-being",
    description: "Focus on nutrition, mental health, and sustainable healthy habits."
  }
]);


  return (
    <div className='w-[95%] h-[80vh] bg-blackm-[50px] rounded-4xl flex flex-col gap-[20px]'>

    <div className='p-[20px] text-white flex flex-col gap-5 m-[30px]'>
    <span className='flex flex-row gap-3 text-center items-center text-blue-400 text-[30px] font-bold'>
        <FcAbout className='text-[40px]'/>
         <h1 > About </h1>
    </span>
    
    <p className='text-[18px]  text-justify leading-7 font-medium text-blue-200'> 
                    Welcome to our Health Awareness & Diet Planner!
            We believe that small lifestyle changes can lead to big health improvements. Our platform helps you make informed choices about your body, diet, and daily habits by providing personalized health awareness tips and tailored diet plans.

            By understanding key details like your age, activity level, food preferences, and wellness goals, we craft recommendations that fit your lifestyle—not generic advice. Whether your goal is to lose weight, build strength, stay active, 
            or simply live healthier, our system adapts to your needs.

            We focus on promoting balanced nutrition, regular physical activity, mental well-being, and hydration awareness. Our goal is to help you build sustainable habits—not short-term fixes—so you can achieve long-lasting results.

            Start your journey today toward a healthier, more energetic, and mindful version of yourself!

    </p>

    </div>

    <div>
         <span className='flex flex-row gap-3 text-center items-center text-blue-400 text-[30px] font-bold'>
        <IoLogoAppleAr className='text-[40px]'/>
         <h1 > Benifits </h1>
    </span>
    <div className='w-full h-[300px] flex flex-row flex-wrap justify-center items-center gap-7'>
    {
        data.map((ele)=>(
            <div 
            key={ele.id}
            className='w-[250px] animate-none h-[200px] rounded-[20px] flex flex-col justify-center items-center text-center bg-blue-950 gap-2'
            >
           <p className='text-[50px]'>{ele.icon}</p> 
           <p> "{ele.title}"</p>
           <p className='text-blue-200'>{ele.description}</p>
            

            </div>
        ))
    }

    </div>

    </div>
   

    </div>
  )
}

export default About