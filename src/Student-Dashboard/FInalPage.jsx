import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FInalPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-6 text-center">
        Your data has been saved successfully
      </h1>
      <button
        className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg md:text-xl lg:text-2xl font-semibold rounded hover:bg-blue-500 transition duration-300"
        onClick={() => window.location.href = '/'}
      >
       Go To Home
      </button>
      <ToastContainer/>
    </div>
  );
};

export default FInalPage;
