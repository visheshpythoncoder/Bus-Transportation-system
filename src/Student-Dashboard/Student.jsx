import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanyImage from "../images/girl.png";
import LogoImage from "../images/newlogo.png";
import NormalImage from "../images/normal.png";
import { useNavigate } from "react-router-dom";
import Subscription from "./Subcription";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Student() {
  const [err, setErr] = useState('');

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    form1: {
      name: "",
      college_id: "",
      age: "",
      gender: "",
      school_name: "",
      phone: "",
      email: "",
    },
    form2: { routename: "", stopname: "" },
    form3: { selectedBus: "" },
  });
  const [error, setError] = useState(null);
  const Navigate = useNavigate();

  const handleChange = (e, form) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [form]: { ...prev[form], [name]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (step === 3) {
      try {
        const res = await axios.post(
          "http://localhost:5340/submitForm",
          formData
        );
        console.log(res.data);
        toast.success("data successfully saved !")
        Navigate('/Payment')

        // Handle successful submission (e.g., show a success message or redirect)
      } catch (err) {
        setError(
          "An error occurred while submitting the form. Please try again."
        );
        console.error(err);
      }
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const [routes, setRoutes] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5340/api/routeselect"
        );
        setRoutes(response.data); // Assuming response.data is an array of routes
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };
    fetchRoutes();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5340/api/Busstop");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    return phoneRegex.test(number);
  };

  const handlePhone = (e) => {
    const { value } = e.target;
    handleChange(e,"form1");

    if (validatePhoneNumber(value)) {
      setErr('');
    } else {
      setErr('Please enter a valid phone number');
    }
  };
  return (
    <div>
    {/* <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }} className="flex flex-col md:flex-row justify-between">
      {error && <div className="error">{error}</div>}
      <div className="w-full md:w-1/2 lg:mt-44 lg:ml-52">
      <img src={CompanyImage } className="w-52 lg:w-3/4" alt="Logo" />

      </div> */}

      {step === 1 && (
         <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }} className="flex flex-col md:flex-row justify-between">
         {error && <div className="error">{error}</div>}
         <div className="w-full md:w-1/2 lg:mt-44 lg:ml-52">
         <img src={CompanyImage } className="w-52 lg:w-3/4" alt="Logo" />
   
         </div>
        <div className="w-full md:w-1/2 lg:mt-44 lg:mr-44">
          <div>
             
            <div className="flex flex-col justify-center bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-6 text-center">Basic info form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  className="w-full p-2 border rounded-lg"
                  value={formData.form1.name}
                  name="name"
                  onChange={(e) => handleChange(e, "form1")}
                  placeholder="Full Name"
                  type="text"
                  required
                />
                <input
                  className="w-full p-2 border rounded-lg"
                  value={formData.form1.college_id}
                  name="college_id"
                  onChange={(e) => handleChange(e, "form1")}
                  placeholder="College Id"
                  type="text"
                  required
                />
                <input
                  className="w-full p-2 border rounded-lg"
                  value={formData.form1.age}
                  name="age"
                  onChange={(e) => handleChange(e, "form1")}
                  placeholder="Age"
                  type="number"
                  required
                />
                <input
                  className="w-full p-2 border rounded-lg"
                  value={formData.form1.gender}
                  name="gender"
                  onChange={(e) => handleChange(e, "form1")}
                  placeholder="Gender"
                  type="text"
                  required
                />
                <input
                  className="w-full p-2 border rounded-lg"
                  value={formData.form1.school_name}
                  name="school_name"
                  onChange={(e) => handleChange(e, "form1")}
                  placeholder="School / College Name"
                  type="text"
                  required
                />
                <input
                  className="w-full p-2 border rounded-lg"
                  value={formData.form1.phone}
                  name="phone"
                  onChange={handlePhone}
                  placeholder="Phone no."
                  maxlength="10"
                  type="tel"
                  required
                />
                {err && <p style={{ color: 'red',fontSize:"10px" }}>{err}</p>} 

                <input
                  className="w-full p-2 border rounded-lg"
                  value={formData.form1.email}
                  name="email"
                  onChange={(e) => handleChange(e, "form1")}
                  placeholder="Email Address"
                  type="email"
                  required
                />
                <button
                  className="w-full p-2 bg-cyan-400 rounded-lg text-white hover:bg-cyan-500 transform hover:scale-105 transition-transform duration-300"
                  type="submit"
                >
                  Submit & Next
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      )}

      {step === 2 && (
        <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }} className="flex flex-col md:flex-row justify-between">
        {error && <div className="error">{error}</div>}
        <div className="w-full md:w-1/2 lg:mt-44 lg:ml-52 ">
        <img src={CompanyImage } className="w-52 lg:w-3/4" alt="Logo" />
  
        </div>
        <div className="w-full md:w-1/2 lg:mr-44 lg:mt-44">
       
        <div className="flex flex-col justify-center bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-6 text-center">Select Option</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h1 className="text-xl mb-2">Select Route</h1>
              <select
                name="routename"
                className="w-full p-2 border rounded-lg"
                onChange={(e) => handleChange(e, "form2")}
                value={formData.form2.routename}
                required
              >
                <option value="">Select Route</option>
                {routes.map((route) => (
                  <option key={route._id} value={route.routename}>
                    {route.routename}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h1 className="text-xl mb-2">Select Stop</h1>
              <select
                name="stopname"
                className="w-full p-2 border rounded-lg"
                value={formData.form2.stopname}
                onChange={(e) => handleChange(e, "form2")}
                required
              >
                <option value="">Select a stop</option>
                {items.map((item) => (
                  <option key={item._id} value={item.stopname}>
                    {item.stopname}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-center mt-6">
                <img src={NormalImage} className="w-72" alt="Bus Options" />
              </div>
            <button
              type="submit"
              className="w-full p-2 bg-cyan-400 rounded-lg text-white hover:bg-cyan-500 mt-4 transform hover:scale-105 transition-transform duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      </div>
      )}

      {step === 3 && (
        <div>
        <Subscription checked1={formData.form3.selectedBus === "AC-Bus"} onChange1={(e) => handleChange(e, "form3")}
        checked2={formData.form3.selectedBus === "Non-AC Bus"} onChange2={(e) => handleChange(e, "form3")} onsubmit={handleSubmit}/>
        </div>
      )}
       <ToastContainer />
    </div>
    
  );
}

export default Student;
