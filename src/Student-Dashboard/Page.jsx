import React from 'react'
import { useNavigate } from 'react-router-dom'

const Page = () => {
    const navigate = useNavigate()
  return (
    <div><div className="flex flex-col justify-center items-center mt-52 bg-gray-100 p-4">
    <h1 className="text-3xl font-bold mb-8 text-center">
      Here you can go to the bus selection process
    </h1>
     
    <button onClick={()=>navigate('/dashboard1/student')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
      click here
    </button>
   
  </div></div>
  )
}

export default Page