import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NormalImage from '../images/bus1.png'; // Ensure you import the image correctly

export default function TransportPage2() {
  const [driver_name, setDriver_name] = useState('');
  const [route_name, setRoute_name] = useState('');
  const [bus_type, setBus_type] = useState('');
  const [capacity, setCapacity] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5340/api/transportpage2', { driver_name, route_name, bus_type, capacity, description });
      console.log('Data saved:', response.data);
      setDriver_name(''); 
      setRoute_name('');
      setBus_type('');
      setCapacity('');
      setDescription('');
      toast.success('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      toast.error('Failed to save data.');
    }
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    return phoneRegex.test(number);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setCapacity(value);

    if (validatePhoneNumber(value)) {
      setError('');
    } else {
      setError('Please enter a valid number for capacity.');
    }
  };

  return (
    <>
      <div className='min-h-screen bg-gray-100 p-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold mb-6'>Add New Bus</h1>
            <div className='flex flex-col gap-4 border shadow-2xl bg-white p-8 md:p-14 w-full md:w-3/4 lg:w-2/3 rounded-lg'>
              <form onSubmit={handleSubmit}>
                <input className='w-full h-12 px-4 mb-4 rounded-lg text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400' type="text" placeholder='Bus Driver Name' value={driver_name} onChange={(e) => setDriver_name(e.target.value)} required />
                <input className='w-full h-12 px-4 mb-4 rounded-lg text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400' type="text" placeholder='Route Name' value={route_name} onChange={(e) => setRoute_name(e.target.value)}  required/>
                <input className='w-full h-12 px-4 mb-4 rounded-lg text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400' type="text" placeholder='Bus Type' value={bus_type} onChange={(e) => setBus_type(e.target.value)}  required/>
                <input className='w-full h-12 px-4 mb-4 rounded-lg text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400' type="text" placeholder='Capacity' value={capacity} onChange={handleChange}  required/>
                {error && <p className='text-red-500'>{error}</p>}
                <textarea className='w-full h-24 px-4 mb-4 rounded-lg text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                <button className='w-full h-12 bg-cyan-400 text-white rounded-lg font-semibold transform hover:scale-105 transition-transform duration-300' type='submit'>Submit</button>
              </form>
            </div>
          </div>
          <div className='flex items-center justify-center lg:justify-end'>
            <img src={NormalImage} className='w-56 md:w-96 fixed lg:w-[400px]' alt="Bus Options" />
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
