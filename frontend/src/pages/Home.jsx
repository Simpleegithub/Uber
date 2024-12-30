import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url("https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRyYWZpYyUyMGxpZ2h0fGVufDB8fDB8fHww")] h-screen pt-8 w-full bg-red-400 flex justify-between flex-col'>
        <img className='w-16 ml-8 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link to={"/login"} className='flex items-center justify-center w-full bg-black text-white rounded mt-5 py-3'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home