import React from 'react';
import Icon from '../../images/banner.svg';


function WelcomeBanner() {
  return (
    <div className="relative bg-indigo-200 dark:bg-emerald-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Background illustration */}
      <div className="absolute right-7 top-5 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
        
      <img src={Icon} width="100" height="100" alt="Icon 01" />

      </div>

      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-4xl text-slate-800 dark:text-slate-100 font-bold mb-1">Good afternoon, 👋</h1>
        <p className="dark:text-indigo-200">Create a new Trasportation System</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
