import React from 'react';
import { useNavigate } from 'react-router-dom';


function DashboardCard01({im,img1,name,link}) {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(link)}  className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-gray-200 dark:bg-[#F4F4F4] hover:shadow-2xl rounded-sm border-[2px] border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={im} width="30" height="30" alt="Icon 02" />

          {/* Menu button */}
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-600 mr-2">{name}</div>

         
        </header>
        <br></br>

        <img src={img1} width="150" height="150" alt="Icon 01" />
      </div>
    </div>
  );
}

  
export default DashboardCard01;
