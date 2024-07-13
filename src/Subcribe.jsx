import React, { useState } from 'react';

const SubscriptionOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
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
    <div className="mt-10 sm:mt-16 lg:mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {options.map((option) => (
        <div
          key={option.id}
          className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ${
            selectedOption === option.id ? 'border-4 border-blue-600' : ''
          }`}
          onClick={() => setSelectedOption(option.id)}
        >
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="text-center">
              <h3 className="text-2xl font-medium text-gray-900">{option.duration}</h3>
              <p className="mt-4 text-gray-500">Subscription</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-gray-900">{option.price}</span>
                <span className="ml-1 text-base font-medium text-gray-500">{option.period}</span>
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
                <span className="ml-2 text-gray-700">{option.access}</span>
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
  );
};

export default SubscriptionOptions;
