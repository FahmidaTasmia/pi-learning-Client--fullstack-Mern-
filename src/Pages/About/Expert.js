import React from 'react'
import {  BsInstagram} from 'react-icons/bs'
import { TfiFacebook, TfiLinkedin, TfiTwitter } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

function Expert() {
  return (
    <div className='mb-12' data-aos="fade-up">
      <h3 className='text-center md:text-3xl text-2xl mb-3'>Our Dedicated Team</h3>
      <p className='text-center text-lg mb-6'>Start working with <span className='text-primary text-xl'>piLearning</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-5 px-3'>
        <div className='rounded-md border-gray-100 border  shadow-sm grid py-12 items-center   '>
           <div className='scale-90 m-auto' >
           <img className='w-24 rounded-full' src="https://i.ibb.co/r2HRVsL/02.jpg" alt="" />
            <h3 className='text-2xl mt-3 mb-2'>Aliana Rosy</h3>
            <h3 className='text-xl mb-2 text-gray-400'>HR</h3>
            <p className='text-gray-500'>If the distribution of letters <br /> and 'words' is random</p>
            <div className='flex gap-4 text-lg mt-6'>
              <Link to='#' className='border p-2 cursor-pointer'><TfiFacebook></TfiFacebook></Link>
              <Link to='#' className='border p-2 cursor-pointer'><BsInstagram></BsInstagram></Link>
              <Link to='#' className='border p-2 cursor-pointer'><TfiLinkedin></TfiLinkedin></Link>
              <Link to='#' className='border p-2 cursor-pointer'><TfiTwitter></TfiTwitter></Link>
            </div>
           </div>
        </div>
        {/* //2 */}
        <div className='rounded-md border-gray-100 border  shadow-sm grid py-12 items-center   '>
           <div className='scale-90 m-auto' >
           <img className='w-24 rounded-full' src="https://i.ibb.co/j353Xq5/04.jpg" alt="" />
            <h3 className='text-2xl mt-3 mb-2'>Micheal Carlo</h3>
            <h3 className='text-xl mb-2 text-gray-400'>Director</h3>
            <p className='text-gray-500'>If the distribution of letters <br /> and 'words' is random</p>
            <div className='flex gap-4 text-lg mt-6'>
              <Link to='#' className='border p-2 cursor-pointer'><TfiFacebook></TfiFacebook></Link>
              <Link to='#' className='border p-2 cursor-pointer'><BsInstagram></BsInstagram></Link>
              <Link to='#' className='border p-2 cursor-pointer'><TfiLinkedin></TfiLinkedin></Link>
              <Link to='#' className='border p-2 cursor-pointer'><TfiTwitter></TfiTwitter></Link>
            </div>
           </div>
        </div>
        {/* //3 */}
        <div className='rounded-md border-gray-100 border  shadow-sm grid py-12 items-center   '>
           <div className='scale-90 m-auto' >
           <img className='w-24 rounded-full' src="https://i.ibb.co/pjPjGPc/06.jpg" alt="" />
            <h3 className='text-2xl mt-3 mb-2'>Ronny Jofra</h3>
            <h3 className='text-xl mb-2 text-gray-400'>C.O.O</h3>
            <p className='text-gray-500'>If the distribution of letters <br /> and 'words' is random</p>
            <div className='flex gap-4 text-lg mt-6'>
              <Link to='#' className='border p-2 cursor-pointer'><TfiFacebook></TfiFacebook></Link>
              <Link to='#' className='border p-2 cursor-pointer'><BsInstagram></BsInstagram></Link>
              <Link to='#' className='border p-2 cursor-pointer'><TfiLinkedin></TfiLinkedin></Link>
              <Link to='#' className='border p-2 cursor-pointer'><TfiTwitter></TfiTwitter></Link>
            </div>
           </div>
        </div>
        {/* //4 */}
        <div className='rounded-md border-gray-100 border  shadow-sm grid py-12 items-center   '>
           <div className='scale-90 m-auto' >
           <img className='w-24 rounded-full' src="https://i.ibb.co/0qfTh0b/03.jpg" alt="" />
            <h3 className='text-2xl mt-3 mb-2'>Sofia Razaq</h3>
            <h3 className='text-xl mb-2 text-gray-400'>CEO</h3>
            <p className='text-gray-500'>If the distribution of letters <br /> and 'words' is random</p>
            <div className='flex gap-4 text-lg mt-6'>
              <Link to='#' className='border p-2 cursor-pointer'><TfiFacebook></TfiFacebook></Link>
              <Link to='#' className='border p-2 cursor-pointer'><BsInstagram></BsInstagram></Link>
              <Link to='#' className='border p-2 cursor-pointer'><TfiLinkedin></TfiLinkedin></Link>
              <Link to='#' className='border p-2 cursor-pointer'><TfiTwitter></TfiTwitter></Link>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Expert
