import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewUser() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password1 !== password2) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5340/api/register', {
        fullname,
        email,
        phone,
        password1,
        password2
      });
      console.log('Data saved:', response.data);
      setMessage('Data saved successfully');
      setFullname(''); // Clear the input field
      setEmail('');
      setPhone('');
      setPassword1('');
      setPassword2('');
      toast.success('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error.response ? error.response.data : error.message);
      setMessage('Error saving data');
      toast.error('Error saving data');
    }
  };

  // Phone number validation code
  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    return phoneRegex.test(number);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setPhone(value);

    if (validatePhoneNumber(value)) {
      setError('');
    } else {
      setError('Please enter a valid phone number');
    }
  };

  return (
    <div>
      <MDBRow>
        <img src="src/images/school bus-amico.png" width={400} height={400} style={{ float: "left" }} className="relative top-28 left-52" />
        <div className='relative top-5 right-80' style={{ float: "right", margin: "200" }}>
          <MDBCol sm='6'>
            <div className='flex justify-center items-center pt-12'>
              <img src="src/images/newlogo.png" className='w-56 float-right' alt="Icon 01" />
            </div>

            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4 text-center relative top-10 '>
              <h3 className="fw-normal mb-3 ps-5 pb-3 text-xl " style={{ letterSpacing: '1px' }}>Register Here</h3>
              <form onSubmit={handleSubmit}>
                <input wrapperClass='mb-4 mx-5 w-100' className='w-[250px] text-lg rounded-lg hover:border-cyan-400' type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Enter name" required /><br /><br />
                <input wrapperClass='mb-4 mx-5 w-100' className='w-[250px] text-lg rounded-lg hover:border-cyan-400' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required /><br /><br />
                <input wrapperClass='mb-4 mx-5 w-100' className='w-[250px] text-lg rounded-lg hover:border-cyan-400' type="text" value={phone} onChange={handleChange} placeholder="Phone no." maxLength='10' required />
                {error && <p style={{ color: 'red' }}>{error}</p>}<br /><br />
                <input wrapperClass='mb-4 mx-5 w-100' className='w-[250px] text-lg rounded-lg hover:border-cyan-400' type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} placeholder="Password" required /><br /><br />
                <input wrapperClass='mb-4 mx-5 w-100' className='w-[250px] text-lg rounded-lg hover:border-cyan-400' type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Re-password" required /><br /><br />
                <button className='border border-solid w-32 h-12 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-xl text-lg font-bold transform hover:scale-105 transition-transform duration-300' type="submit">Submit</button>
              </form>
              <div>
                <ToastContainer />
              </div>

              <br />
              <br />
              <p className="small mb-5 pb-lg-3 ms-5 hover:text-blue-600 text-lg "><a className="text-muted" href='#' onClick={() => navigate('/')}>Log in</a></p>
            </div>
          </MDBCol>
        </div>
      </MDBRow>
    </div>
  );
}
