import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Teacherlogin = () => {
    const [teacherid , setTeacherid] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5340/api/teacher-register', {teacherid,password});
          console.log('Data saved:', response.data);           
          toast.success('Data saved successfully!');
        } catch (error) {
          console.error('Error saving data:', error.response ? error.response.data : error.message);
          toast.error('Error saving data');
        }
      };
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <input wrapperClass='mb-4 mx-5 w-100' className='w-[250px] text-lg rounded-lg hover:border-cyan-400' type="text" value={teacherid} onChange={(e) => setTeacherid(e.target.value)} placeholder="Enter name" required /><br /><br />
                <input wrapperClass='mb-4 mx-5 w-100' className='w-[250px] text-lg rounded-lg hover:border-cyan-400' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required /><br /><br />
                <button className='border border-solid w-32 h-12 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-xl text-lg font-bold transform hover:scale-105 transition-transform duration-300' type="submit">Submit</button>
                
              </form>
              <ToastContainer/>
    </div>
  )
}
