// // ProfileButton.jsx
import React, { useState } from 'react';
import Profile from './Profile';
import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard1 = () => {
   
   
  return (
    <>
      <div className='flex flex-col'>
        <div className='absolute top-4 left-16'>
            <img src="src/images/newlogo.png" className='w-48 float-right' alt="Icon 01" />
        </div>
        <div className="absolute top-4 right-16">
          <Profile/>
        </div>
    
      </div>
      <Outlet/>
      
    </>
    
    );
};

export default Dashboard1;
