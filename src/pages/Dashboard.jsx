import React, {  useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import { Outlet, Routes,Route } from 'react-router-dom';
import Transport from '../partials/dashboard/Transport';
import TransportPage1 from './TransportPage1';
import TransportPage2 from './TransportPage2';
import TransportPage3 from './TransportPage3';



function Dashboard() {
 
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  return (
    <div className="flex h-screen overflow-hidden ">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#F4F4F4]">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            
            <Outlet/> 
          </div>
        </main>

       


      </div>
    </div>
  );
}

export default Dashboard;