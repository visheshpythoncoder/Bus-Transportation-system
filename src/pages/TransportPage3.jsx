import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiLocationOn } from "react-icons/ci";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import NormalImage from '../images/bus1.png'; // Ensure you import the image correctly

export default function TransportPage3() {
  const [routename, setRoutename] = useState('');
  const [stopname, setStopname] = useState([]);
  const [school_name, setSchool_name] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [items, setItems] = useState([]);

  const handleAddName = () => {
    if (currentName.trim() !== '' && !stopname.includes(currentName.trim())) {
      setStopname([...stopname, currentName.trim()]);
      setCurrentName('');
    }
  };

  const handleRemoveName = (nameToRemove) => {
    setStopname(stopname.filter(name => name !== nameToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting data:", { routename, stopname, school_name });
      const response = await axios.post('http://localhost:5340/api/transportpage3', {
        routename,
        stopname,
        school_name
      });
      console.log("Response data:", response.data);
      toast.success('Data saved successfully!');
      setRoutename('');
      setStopname([]);
      setSchool_name('');
    } catch (error) {
      console.error('Error submitting names:', error);
      toast.error('Failed to save data!');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5340/api/Busstop');
        console.log("Fetched data:", response.data);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='flex flex-col-1 lg:flex-row items-center p-4 bg-gray-100'>
        <div className='flex flex-col items-center justify-center lg:items-start lg:w-1/2'>
          <h1 className='text-4xl font-bold mb-6'>Create Bus Routes</h1>

          <div className='flex flex-col gap-4 border shadow-2xl px-8 py-10 w-full max-w-xl bg-white rounded-lg'>
            <input
              className='w-full h-10 rounded-lg text-black text-lg p-2 mb-4'
              type="text"
              placeholder='Route Name'
              value={routename}
              onChange={(e) => setRoutename(e.target.value)}
              required
            />

            <select
              className='mb-4 text-xl w-full rounded-lg p-2'
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)}
              required
            >
              <option value="">Select a stop</option>
              {items.map(item => (
                <option key={item._id} value={item.stopname}>
                  {item.stopname}
                </option>
              ))}
            </select>

            <button
              className='inline-flex items-center justify-center border border-solid w-full md:w-28 h-10 bg-cyan-400 rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300'
              type='button'
              onClick={handleAddName}
            >
              <MdAddCircleOutline className='mr-2' />
              <h3>Add Stop</h3>
            </button>

            <input
              className='w-full h-10 rounded-lg text-black text-lg p-2 mb-4'
              type="text"
              placeholder='End School Name'
              value={school_name}
              onChange={(e) => setSchool_name(e.target.value)}
              required
            />

            <button
              className='border border-solid w-full md:w-32 h-12 bg-cyan-400 rounded-lg transform hover:scale-105 transition-transform duration-300'
              type='submit'
              onClick={handleSubmit}
            >
              Submit
            </button>

            <ToastContainer />
          </div>
        </div>
        <div className='flex items-center justify-center lg:w-1/2 p-4'>
          <div className='flex flex-col gap-2 overflow-y-auto max-h-[70vh]'>
            {stopname.map((name, index) => (
              <div key={index} className='flex justify-between items-center p-2 bg-gray-200 lg:w-[300px] lg:h-16 text-xl rounded-lg'>
                <CiLocationOn />
                <span>{name}</span>
                <button
                  className='text-red-500 hover:text-red-700'
                  onClick={() => handleRemoveName(name)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
