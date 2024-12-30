import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('');
  const [userdata, setUserdata] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setUserdata({email, password});
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
      <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

      <form onSubmit={(e) => {
        handleSubmit(e);
      }}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
          type="email"
          placeholder='email@example.com'
        />

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input
          className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required type="password"
          placeholder='password'
        />

        <button
          className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Login</button>

      </form>
      <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new account</Link></p>
    </div>
    <div>
      <Link
        to='/captain-login'
        className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
      >Sign in as Captain</Link>
    </div>
  </div>
  )
}

export default UserLogin