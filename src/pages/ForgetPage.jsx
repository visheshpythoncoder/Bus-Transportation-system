import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';

// import NewUser from './Newuser';

function ForgetPage() {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5340/update-password', {
        email,
        phone,
        newPassword,
      });
      setPhone('');
      setEmail('');
      setNewPassword('')
      toast.success('password reset successfully!');

    } catch (error) {
      alert('Error updating password');
    }
  };
  return (
   
    <MDBRow>
                <img src="src/images/school bus-amico.png" width={400} height={400} style={{float:"left"}} className="relative top-28 left-52"/>
                  <div className='relative top-5 right-80' style={{float:"right",margin:"200"}}>
                  <MDBCol sm='6'>
          
                    <div className='flex justify-center items-center pt-12'>
                    <img src="src/images/newlogo.png" className='w-56 float-right'  alt="Icon 01" />
                      
                    </div>
          
                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4 text-center relative top-10 '>
          
                      <h3 className="fw-normal mb-3 ps-5 pb-3 text-xl" style={{letterSpacing: '1px'}}>Forget Password</h3>
                       <form onSubmit={handleSubmit}>
                       <input wrapperClass='mb-4 mx-5 w-100' className='w-[200px] text-lg rounded-lg hover:border-cyan-400' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Email Address'  id='formControlLg' type='email' size="lg" required/><br/><br/>
                      <input wrapperClass='mb-4 mx-5 w-100' className='w-[200px] text-lg rounded-lg hover:border-cyan-400' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone no.' id='formControlLg' type='text' size="lg" required/><br/><br/>
                      <input wrapperClass='mb-4 mx-5 w-100' className='w-[200px] text-lg rounded-lg hover:border-cyan-400' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} placeholder='New-password' id='formControlLg' type='password' size="lg" required/><br/><br/>
          
                      <button className="mb-4 px-5 mx-5 w-30 w-[200px] text-lg rounded-lg h-12 bg-cyan-400 hover:bg-cyan-500 text-neutral-100" type='submit' color='info' size='lg'>Forget</button>
                      <ToastContainer />
                       </form>
                     
                         
                      <p className="small mb-5 pb-lg-3 ms-5 text-lg hover:text-blue-600  "><a class="text-muted" href='#' onClick={()=>{navigate('/')}}>Log in</a></p>
                    </div>
                  </MDBCol> 
                  </div>
      </MDBRow>
  );
}

export default ForgetPage;
        
    
