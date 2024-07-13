// src/components/SubscriptionPlans.js
import React, { useState } from 'react';
import LogoImage from "../images/newlogo.png";


const Subscription = ({checked1,onChange1,checked2,onChange2,onsubmit}) => {
    const [acbus ,setAcbus] =useState(true);
    const [nonbus,setNonbus] = useState(false);

    const handleAC =()=>{
        setAcbus(true);
        setNonbus(false);
    }
    const handleNonbus =()=>{
        setAcbus(false);
        setNonbus(true);
    }


    /////////////////////////
    const [selectedOption, setSelectedOption] = useState(null);

  const AC = [
    {
      id: 1,
      duration: "2 Months",
      price: "₹ 999",
      period: "/ month",
      access: "Access to AC bus",
    },
    {
      id: 2,
      duration: "1 Year",
      price: "₹ 1,599",
      period: "/ year",
      access: "Access to AC bus",
    },
    {
      id: 3,
      duration: "2 Years",
      price: "₹ 1,999",
      period: "/ 2 years",
      access: "Access to AC bus",
    },
  ];

  const non_AC = [
    {
      id: 1,
      duration: "2 Months",
      price: "₹ 499",
      period: "/ month",
      access: "Access to Non-AC bus",
    },
    {
      id: 2,
      duration: "1 Year",
      price: "₹ 999",
      period: "/ year",
      access: "Access to Non-AC bus",
    },
    {
      id: 3,
      duration: "2 Years",
      price: "₹ 1,999",
      period: "/ 2 years",
      access: "Access to Non-AC bus",
    },
  ];
  return (
    <div>
     
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
         
      <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">Choose Your Plan</h2>
      
      <p className="mt-4 text-lg text-center text-gray-500">Select the best plan that suits your needs</p><br/>
      <div className="flex flex-row space-x-4 justify-center items-center">
        <div className='border-solid  w-44 p-4 rounded-lg shadow-2xl bg-white border-gray-800'>
        <label className="flex items-center space-x-4 border-solid border-gray-700">
                  <input
                    type="radio"
                    name="selectedBus"
                    value="AC-Bus"
                    className="form-radio h-5 w-5"
                    checked={checked1}
                    onChange={onChange1}
                    onClick={handleAC}
                    required
                     
                  />
                  <span className='font-bold'>AC-Bus</span>
                </label>
        </div>
        <div className='border-solid w-44 rounded-lg p-4 bg-white shadow-2xl border-gray-800'>
        <label className="flex items-center space-x-4 border-solid border-gray-700">
                  <input
                    type="radio"
                    name="selectedBus"
                    value="Non-AC Bus"
                    className="form-radio h-5 w-5"
                    checked={checked2}
                    onChange={onChange2}
                    onClick={handleNonbus}
                    required
                     
                  />
                  <span className='font-bold'>Non-AC Bus</span>
                </label>
        </div>
    </div>

    {
        acbus &&(
          <div className="mt-10 sm:mt-16 lg:mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AC.map((AC) => (
            <div
              key={AC.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ${
                selectedOption === AC.id ? 'border-4 border-blue-600' : ''
              }`}
              onClick={() => setSelectedOption(AC.id)}
            >
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="text-center">
                  <h3 className="text-2xl font-medium text-gray-900">{AC.duration}</h3>
                  <p className="mt-4 text-gray-500">Subscription</p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-gray-900">{AC.price}</span>
                    <span className="ml-1 text-base font-medium text-gray-500">{AC.period}</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-8 bg-gray-50 sm:p-10 sm:pt-6">
                <ul>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">{AC.access}</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full bg-blue-600 text-white text-center rounded-md py-2 text-lg font-semibold"
                  >
                    Select
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        )
    }
    {
        nonbus && (
          <div className="mt-10 sm:mt-16 lg:mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {non_AC.map((non_AC) => (
            <div
              key={non_AC.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ${
                selectedOption === non_AC.id ? 'border-4 border-blue-600' : ''
              }`}
              onClick={() => setSelectedOption(non_AC.id)}
            >
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="text-center">
                  <h3 className="text-2xl font-medium text-gray-900">{non_AC.duration}</h3>
                  <p className="mt-4 text-gray-500">Subscription</p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-gray-900">{non_AC.price}</span>
                    <span className="ml-1 text-base font-medium text-gray-500">{non_AC.period}</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-8 bg-gray-50 sm:p-10 sm:pt-6">
                <ul>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">{non_AC.access}</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="block w-full bg-blue-600 text-white text-center rounded-md py-2 text-lg font-semibold"
                  >
                    Select
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        )
    }

                <button
                  className="w-full p-2 bg-cyan-400 rounded-lg text-white hover:bg-cyan-500 mt-4"
                  onClick={onsubmit}
                >
                  Submit & Next
                </button>
             
    </div>
    </div>
    
  );
};

export default Subscription;
