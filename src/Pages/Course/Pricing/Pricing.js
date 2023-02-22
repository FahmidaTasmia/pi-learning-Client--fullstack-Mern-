import React, { useState } from 'react';
import Monthly from '../Monthly/Monthly';
import Yearly from '../Yearly/Yearly';


const Pricing = () => {
  const [toggle, setToggle] = useState(true);
  console.log("From",toggle);
  const toggleClass = " transform translate-x-5";
    return (
        <div className='my-5 text-center'>
            <h2 className='text-2xl md:text-4xl mb-3 '>Our Pricing Plan</h2>
            <h2 className='text-2xl font-bold'>Find The Plan That's Right for You</h2>

           <div className='grid grid-cols-1'>
           <ul className=" inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full " >
        <li className='inline-block '>  <button  onClick={() => {
            setToggle(!toggle);
          }} className="px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out hover:text-primary hover:bg-white dark:hover:text-white bg-primary text-white " >
            Monthly Plan
          </button></li>
        <li className='inline-block'>
        <button  onClick={() => {
            setToggle(!toggle);
          }}  className={"px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out hover:text-white dark:hover:text-white hover:bg-indigo-600 " +
              (toggle ? null : toggleClass)}>
            Yearly Plan  <span className='bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full'>save 25%</span>
          </button>
         
        </li>
         
        </ul>
           </div>

           <div className="container mx-auto  ">
     {
         toggle?<Monthly></Monthly> : <Yearly></Yearly>
     }
        </div>
            
        </div>
    );
};

export default Pricing;