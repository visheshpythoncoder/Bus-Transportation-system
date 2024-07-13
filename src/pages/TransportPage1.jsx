import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NormalImage from '../images/schoolgirl.png';

function TransportPage1() {
  const [stopname, setStopname] = useState('');
  const [geolocation, setGeolocation] = useState('');
  const [distance, setDistance] = useState('');

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setGeolocation(value);

    const regex = /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/;
    if (!regex.test(value)) {
      setError('Please enter valid latitude and longitude');
    } else {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('called');

    try {
      const response = await axios.post('http://localhost:5340/api/transportpage1', 
      { stopname, geolocation, distance }, 
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Data saved:', response.data);
      setStopname('');
      setGeolocation('');
      setDistance('');
      toast.success('Data saved successfully!');
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        toast.error(`Error: ${error.response.data.message || 'Something went wrong!'}`);
      } else if (error.request) {
        console.error('Error request:', error.request);
        toast.error('No response received from the server.');
      } else {
        console.error('Error message:', error.message);
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col-1 lg:flex-row items-center lg:items-start mt-20'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center lg:items-start lg:w-1/2'>
          <h1 className='text-4xl font-bold mb-6'>Create Bus Stops</h1>
          <div className='flex flex-col gap-4 border shadow-2xl px-8 py-8 w-full bg-white rounded-lg'>
            <input className='w-full h-12 mb-4 rounded-lg text-black text-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400' value={stopname} onChange={(e) => setStopname(e.target.value)} type="text" placeholder='Stop Name..' required />
      <label htmlFor="geolocation" className="block text-lg font-medium text-gray-700">
        Enter Latitude and Longitude:
      </label>
        <input
          type="text"
          name="geolocation"
          id="geolocation"
          className="w-full h-12 mb-4 rounded-lg text-black text-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="e.g. 37.7749, -122.4194"
          value={geolocation}
          onChange={handleChange}
        />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            <input className='w-full h-12 mb-4 rounded-lg text-black text-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400' value={distance} onChange={(e) => setDistance(e.target.value)} type="text" placeholder='Distance from school..' required />
            <button className='w-full h-12 bg-cyan-400 rounded-lg shadow-xl text-white text-lg transform hover:scale-105 transition-transform duration-300' type='submit'>Submit</button>
          </div>
        </form>
        <div className="flex justify-center lg:justify-end mt-6 lg:mt-0 lg:w-1/2">
          <img src={NormalImage} className="w-52 md:w-96 lg:w-[400px]" alt="Bus Options" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default TransportPage1;
