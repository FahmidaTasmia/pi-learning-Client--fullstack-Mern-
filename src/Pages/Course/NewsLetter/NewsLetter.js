  import React from 'react'
  import { Link } from 'react-router-dom';

  function NewsLetter() {
    return (
     <div className='my-12 '>
       <div className='grid md:grid-cols-2 bg-gradient-to-r from-transparent to-indigo-600/10 border-l-4 border-l-primary rounded-md md:py-5'>
        <div>
          <img src="https://i.ibb.co/BqmQK4f/undraw-Voice-interface-re-206s-removebg-preview.png" alt="" />
        </div>
        <div className='m-auto'>
        <div>
       
        <input className='bg-neutral rounded-l-full py-3  md:px-6 px-6 text-white  input-bordered-neutral w-64 mx-10 ' type="text" name="" id="" placeholder='Enter Your Subject Here' />
        
        </div>
        <div className='my-3'></div>
        <div>
        <Link className='border-none rounded-r-full py-3  md:px-12 px-6   border-neutral btn btn-primary '>Sign Up Free</Link>
        </div>
        <div>
          <p className='px-5 py-5 text-xl '>Test Out Our Features For 14 days ! no Credit Card required</p>
        </div>
        </div>
      </div>
     </div>
    )
  }
  
  export default NewsLetter
  