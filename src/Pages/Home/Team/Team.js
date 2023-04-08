import React from 'react';
import { TfiEmail } from "react-icons/tfi";

const Team = () => {
    return (
        <div className='mx-14 mb-12'>
            <div className='grid md:grid-cols-2'>
            <div className=" grid grid-cols-2 md:gap-5 gap-2" data-aos="fade-up-right">
                <div className='grid gap-5'>
                    <img src="https://i.ibb.co/7rppggw/ab03.jpg" alt="" />
                    <img src="https://i.ibb.co/JkzvdK3/ab02.jpg" alt="" />

                </div>
                <div className='m-auto align-middle'>
                    <img src="https://i.ibb.co/MZwBdKR/ab01.jpg" alt="" />
                </div>
            </div>
                <div className="m-auto align-middle md:mx-12 " data-aos="fade-up-left">
               <div className='flex'>
               <span className='font-bold text-primary'><span className='text-6xl font-bold text-primary'>15</span>+</span>
              <div className='mt-5 mx-2 font-bold'>
              <p>Years Of </p>
               <p>Experience</p>
              </div>
               </div>
               <h2 className='md:text-4xl text-2xl font-semibold md:my-5 my-3 '>Who We Are </h2>
                <p className='text-justify md:my-12 px-2'>By registering, you agree to receive marketing communications  values the privacy of every individual's personal information and is committed to the protected. use and disclosure except where permitted by law.</p>
                <button className='md:mb-24 my-3 btn btn-primary  rounded-md gap-2 text-white'><TfiEmail></TfiEmail> Contact Us</button>
                    
                </div>


            </div>

        </div>
    );
};

export default Team;