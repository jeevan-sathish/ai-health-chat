import React, { useState } from 'react';
import FormHeader from './FormHeader';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
// import CircularLoader from './ui/CircularLoader';
import { MdDelete } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import CircularIndeterminate from './ui/CircularIndeterminate';

const Test = () => {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const [response, setResponse] = useState('');
  const [loader,setLoader]=useState(false);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    activity: '',
    diet: '',
    fitnessGoal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true)

    console.log(formData)

    
        const genAI = new GoogleGenerativeAI(API_KEY); 
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); 
 
    const prompt = `
                  I am a ${formData.age}-year-old ${formData.gender} with the following details: 
                  Height: ${formData.height} cm, Weight: ${formData.weight} kg, Activity level: ${formData.activity}, 
                  Current diet: ${formData.diet}, Fitness goal: ${formData.fitnessGoal}. 

                  Please analyze my body condition and provide:
                  1) An assessment of my current health status.
                  2) Possible health risks or issues to watch for.
                  3) Personalized guidance on exercise and lifestyle.
                  4) Diet recommendations and best practices to achieve my goal.

                  Keep the response short, clear, and in point-wise markdown format.
                  `;
        const result = await model.generateContent(prompt); 
       if(result.response.text()){
        setLoader(false)
        setResponse(result.response.text()); 
       }
       else{
        setLoader(false)
        setResponse("Something went wrong! Please try again.")
       }
  };

  function handleClear(){
    setFormData({
      name: '',
      age: '',
      height: '',
      weight: '',
      gender  : '',
      activity: '',
      diet: '',
      fitnessGoal: '',
    })
    setResponse('')
  }

  function handleSpeech(){
    const speech = new SpeechSynthesisUtterance();
    speech.text = response; 
    speech.lang = 'en-US';
    speech.volume = 1;  
    speech.rate = 1;
    speech.pitch = 1; 
    window.speechSynthesis.speak(speech);
  }

  return (
    <div className="w-full h-[100vh] bg-black border-2 border-l-green-800 border-r-green-800 text-white overflow-hidden">
      <FormHeader />

      <div className="w-full h-full flex justify-center items-center flex-row gap-2">
        {/* -------- Left Side: Form -------- */}
        <div className="w-1/2 h-full flex flex-col bg-[#090909]">
          <div className="w-full h-16 flex justify-center items-center bg-[#202123] border-b-2 border-green-800 gap-2">
            <h1 className="text-lg font-semibold text-green-400 text-center">
              Fill Your Fitness Details
            </h1>
            <div>
              <button 
              className='self-end w-[40px] h-[40px] rounded-full text-[30px] items-center flex justify-center bg-red-600' 
              onClick={handleClear}
              >
              {
                formData.name || formData.age || formData.height || formData.weight.length >0 ?<MdDelete/>:
                <MdOutlineDelete/>
              }
              </button>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col justify-around items-center gap-5 py-6"
          >
            {/* Name & Age */}
            <span className="w-full flex justify-center items-center gap-3">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-[350px] h-12 bg-[#202123] text-center text-white border-2 border-green-800 rounded-md"
              />
              <input
                type="text"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
                className="w-[350px] h-12 bg-[#202123] text-center text-white border-2 border-green-800 rounded-md"
              />
            </span>

            {/* Height & Weight */}
            <span className="w-full flex justify-center items-center gap-3">
              <input
                type="text"
                name="height"
                placeholder="Enter your height (cm)"
                value={formData.height}
                onChange={handleChange}
                className="w-[350px] h-12 bg-[#202123] text-center text-white border-2 border-green-800 rounded-md"
              />
              <input
                type="text"
                name="weight"
                placeholder="Enter your weight (kg)"
                value={formData.weight}
                onChange={handleChange}
                className="w-[350px] h-12 bg-[#202123] text-center text-white border-2 border-green-800 rounded-md"
              />
            </span>

            {/* Gender & Activity */}
            <span className="w-full flex justify-center items-center gap-3">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-[350px] h-12 bg-[#202123] text-center text-white border-2 border-green-800 rounded-md"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <select
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                className="w-[350px] h-12 bg-[#202123] text-center text-white border-2 border-green-800 rounded-md"
              >
                <option value="">Select activity level</option>
                <option value="sedentary">Sedentary</option>
                <option value="moderate">Moderate</option>
                <option value="active">Active</option>
              </select>
            </span>

            {/* Diet & Fitness Goal */}
            <span className="w-full flex justify-center items-center gap-3">
              <select
                name="diet"
                value={formData.diet}
                onChange={handleChange}
                className="w-[350px] h-12 bg-[#202123] text-center text-white border-2 border-green-800 rounded-md"
              >
                <option value="">Select your diet type</option>
                <option value="veg">Vegetarian</option>
                <option value="non-veg">Non-Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>

              <select
                name="fitnessGoal"
                value={formData.fitnessGoal}
                onChange={handleChange}
                className="w-[350px] h-12 bg-[#202123] text-center text-white border-2 border-green-800 rounded-md"
              >
                <option value="">Select fitness goal</option>
                <option value="loseWeight">Lose Weight</option>
                <option value="gainMuscle">Gain Muscle</option>
                <option value="maintain">Maintain</option>
              </select>
            </span>

            <button
              type="submit"
              className="w-[550px] h-14 bg-green-700 flex flex-row justify-center items-center hover:bg-green-800 transition font-bold text-center rounded-2xl mt-3"
            >
              {
                loader? <span className='animate-ping'> Analysing <CircularIndeterminate/></span> :<p>Analyze My Health</p>
              }
            </button>
          </form>
        </div>

        {/* -------- Right Side: AI Response -------- */}
        <div className="w-1/2 h-full flex justify-start items-start flex-col bg-[#111113]  overflow-y-auto">
          <div className="w-full  h-auto pl-[30px] bg-[#131314] p-[30px] rounded-lg border border-green-700 shadow-lg">
            <h2 className="text-xl font-bold text-center text-green-400 mb-4 justify-center items-center flex flex-row">
              AI Health Analysis
            </h2>
            <p className='text-center'>"AI-generated health analysis will appear here."</p>
             <div className='w-full h-16 flex justify-center items-center bg-black '>

          <button className='w-[150px] h-[50px] bg-blue-500 rounded-3xl hover:scale-90 transform-transition duration-100'
          onClick={handleSpeech}
          >
          speak</button>

          </div>
            <div className='p-[20px] w-full h-auto text-center '>
            {
              loader ? <div className="text-center text-green-400 mb-4 w-full h-auto  
              justify-center items-center flex flex-col  gap-1.5">Analyzing... Please wait. <br />
              <CircularIndeterminate/>
              
              </div>:
              <p className='p-[90px] pb-6 text-green-300 '>
              <ReactMarkdown
                children={response }
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                
              />

              </p>
              

            }
           
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Test;
