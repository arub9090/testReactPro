import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <>
    <div className='text-9xl text-wtite font-bold text-center'>Oops!</div>
    <div className='font-bold text-rose-500 text-3xl pr-5 text-center'> Sorry Page Not Found: 404 ERROR</div>
    <div className='flex-1 py-8'>
      <div className='flex justify-center'>
      <Link to="/" className='btn btn-sm bg-pink-500  text-black rounded-btn'> Back To Home</Link>
      </div>
    </div>

    </>
    
  )
}

export default NotFound