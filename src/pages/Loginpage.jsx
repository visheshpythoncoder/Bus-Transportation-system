import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NavLink } from 'react-router-dom';

function LoginPage() {
  const [student, setStudent] = useState(true);
  const [teacher, setTeacher] = useState(false);

  const studentHandle = () => {
    setStudent(true);
    setTeacher(false);
  };

  const teacherHandle = () => {
    setStudent(false);
    setTeacher(true);
  };

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [teacherid, setTeacherId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5340/api/login', { email, password1 });
      console.log(res.data); // Handle token or further actions here
      toast.success('Log In successfully!');
      navigate("/dashboard1");
    } catch (err) {
      console.error(err.response.data);
      toast.error('Invalid username and password!');
    }
  };

  const onSubmitTeacher = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5340/api/teacher', {teacherid, password });
      console.log(res.data); // Handle token or further actions here
      toast.success('Log In successfully!');
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response.data);
      toast.error('Invalid teacher ID or password!');
    }
  };

  return (
    <>
      {teacher && (
        <MDBRow>
          <img src="src/images/school bus-amico.png" width={400} height={400} style={{ float: "left" }} className="relative top-28 left-52" />
          <div className='relative top-5 right-80' style={{ float: "right", margin: "200" }}>
            <MDBCol sm='6'>
              <div className='flex justify-center items-center pt-12'>
                <img src="src/images/newlogo.png" className='w-56 float-right' alt="Icon 01" />
              </div>
              <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4 text-center relative top-10'>
                <h3 className="fw-normal mb-3 ps-5 pb-3 text-xl text-cyan-500" style={{ letterSpacing: '1px' }}>Teacher Log in</h3>
                <form >
                  <input
                    className='w-[200px] text-lg rounded-lg hover:border-cyan-400'
                    placeholder='Teacher ID'
                    value={teacherid}
                    onChange={(e) => setTeacherId(e.target.value)}
                    id='formControlLg'
                    type='text'
                    size="lg"
                    required
                  /><br /><br />
                  <input
                    className='w-[200px] text-lg rounded-lg hover:border-cyan-400'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id='formControlLg'
                    type='password'
                    size="lg"
                    required
                  /><br /><br />
                  <button onClick={onSubmitTeacher} type='submit' className="mb-4 px-5 mx-5 w-[200px] rounded-lg h-12 bg-cyan-400 text-xl hover:bg-cyan-500 text-neutral-100 transform hover:scale-105 transition-transform duration-300" color='info'>Login</button>
                </form>
                <button className="mb-4 px-5 mx-5 w-30 rounded-lg h-12 text-xl bg-gray-600 hover:bg-cyan-500 text-neutral-100 transform hover:scale-105 transition-transform duration-300" color='info' size='lg' onClick={studentHandle}>Student</button>
                <button className="mb-4 px-5 mx-5 w-30 rounded-lg h-12 text-xl bg-gray-600 hover:bg-cyan-500 text-neutral-100 transform hover:scale-105 transition-transform duration-300" color='info' size='lg' onClick={teacherHandle}>Teacher</button>
                <ToastContainer />
              </div>
            </MDBCol>
          </div>
        </MDBRow>
      )}
      {student && (
        <MDBRow>
          <div>
            <img src="src/images/school bus-amico.png" width={400} height={400} style={{ float: "left" }} className="relative top-28 left-52" />
          </div>
          <div className='relative top-5 right-80' style={{ float: "right", margin: "200" }}>
            <MDBCol sm='6'>
              <div className='flex justify-center items-center pt-12'>
                <img src="src/images/newlogo.png" className='w-56 float-right' alt="Icon 01" />
              </div>
              <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4 text-center relative top-10'>
                <h3 className="fw-normal mb-3 ps-5 pb-3 text-xl text-cyan-500" style={{ letterSpacing: '1px' }}>Student Log in</h3>
                <form onSubmit={onSubmit}>
                  <input
                    className='w-[200px] text-lg rounded-lg hover:border-cyan-400'
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='formControlLg'
                    type='email'
                    size="lg"
                    required
                  /><br /><br />
                  <input
                    className='w-[200px] text-lg rounded-lg hover:border-cyan-400'
                    placeholder='Password'
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    id='formControlLg'
                    type='password'
                    size="lg"
                    required
                  /><br /><br />
                  <button type='submit' className="mb-4 px-5 mx-5 w-[200px] rounded-lg h-12 bg-cyan-400 text-xl hover:bg-cyan-500 text-neutral-100 transform hover:scale-105 transition-transform duration-300" color='info'>Login</button>
                </form>
                <a href='#h'><p className="small mb-5 pb-lg-3 ms-5 text-xl hover:text-cyan-500" onClick={() => { navigate('/Forget') }}>Forgot password?</p></a><br /><br />
                <button className="mb-4 px-5 mx-5 w-30 rounded-lg h-12 text-xl bg-gray-600 hover:bg-cyan-500 text-neutral-100 transform hover:scale-105 transition-transform duration-300" color='info' size='lg' onClick={studentHandle}>Student</button>
                <button className="mb-4 px-5 mx-5 w-30 rounded-lg h-12 text-xl bg-gray-600 hover:bg-cyan-500 text-neutral-100 transform hover:scale-105 transition-transform duration-300" color='info' size='lg' onClick={teacherHandle}>Teacher</button>
                <p className='ms-5 text-lg '>Don't have an account? <a href='#d' className="link-info text-cyan-400 transform hover:scale-105 transition-transform duration-300" onClick={() => { navigate("/newuser") }}>Register here</a></p>
                <ToastContainer />
              </div>
            </MDBCol>
          </div>
        </MDBRow>
      )}
    </>
  );
}

export default LoginPage;
