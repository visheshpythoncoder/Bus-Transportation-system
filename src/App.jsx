import React, { useEffect } from "react";
import { Routes, Route, useLocation, BrowserRouter,Router } from "react-router-dom";
import "./css/style.css";
import { useState } from "react";
// Import pages
import LoginPage from "./pages/Loginpage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewUser from "./pages/NewUser"
import ForgetPage from "./pages/ForgetPage"
import Transport from "./partials/dashboard/Transport"
import TransportPage1 from "./pages/TransportPage1";
import TransportPage2 from "./pages/TransportPage2";
import TransportPage3 from "./pages/TransportPage3";
import Dashboard from "./pages/Dashboard"
import Student from "./Student-Dashboard/Student";
import Subscription from "./Student-Dashboard/Subcription";
import Dashboard1 from "./Student-Dashboard/Dashboard1";
import FInalPage from "./Student-Dashboard/FInalPage";
import SearchPerson from "./Set";
import Page from "./Student-Dashboard/Page";
import Payment from "./Student-Dashboard/Payment";



function App() {

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change
  
 
  return (
    <div>
     
      <Routes>
      <Route exact path="/" element={<LoginPage/>} />
          <Route path="/NewUser" element={<NewUser />} />
          <Route path="/Forget" element={<ForgetPage/>}/>
          <Route path="/Subscription" element={<Subscription/>}/>
          <Route path="/finalpage" element={<FInalPage/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/dashboard1" element={<Dashboard1/>}>
            <Route path="" element={<Page/>}/>
            <Route path="student" element={<Student/>}/>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Transport/>}/>
            <Route path="transportpage1" element={<TransportPage1/>}/>  
            <Route path="transportpage2" element={<TransportPage2/>}/>  
            <Route path="transportpage3" element={<TransportPage3/>}/>  
            <Route path="serachperson" element={<SearchPerson/>}/>
          </Route>  
      </Routes>
      <ToastContainer />
      {/* <Teacherlogin/> */}
      
     
       
        
    </div>
  );
}

export default App;
