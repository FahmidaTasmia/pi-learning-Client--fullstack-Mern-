import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

const Yearly = () => {
    return (
      <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-8'>
      <div className='text-start w-full p-6 py-8 border-b-4 dark:border-gray-700  hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">'>
      <h6 className="font-bold text-start text-2xl  uppercase mb-5 text-indigo-600">Free</h6>
      <div className="flex mb-5">
              <span className="text-xl font-semibold">$</span>
              <span className="price text-4xl font-semibold mb-0">0</span>
              <span className="text-xl font-semibold self-end mb-1">/mo</span>
       </div>
       <ul className="list-none text-slate-400">
          <li className='flex gap-2'><BsCheck2Circle className='self-center text-primary font-bold'></BsCheck2Circle>  Full Access</li>
          <li className='flex gap-2'><BsCheck2Circle className='self-center text-primary font-bold'></BsCheck2Circle>  Source Files</li>
       </ul>
       <button className='btn btn-primary rounded-full btn-sm mt-5 px-5'>Sign Up</button>
      </div>

      {/* price2 */}
      <div className='text-start w-full p-6 py-8 border-b-4 dark:border-gray-700  hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">'>
      <h6 className="font-bold text-start text-2xl  uppercase mb-5 text-indigo-600">Popular</h6>
      <div className="flex mb-5">
              <span className="text-xl font-semibold">$</span>
              <span className="price text-4xl font-semibold mb-0">34</span>
              <span className="text-xl font-semibold self-end mb-1">/mo</span>
       </div>
       <ul className="list-none text-slate-400">
          <li className='flex gap-2'><BsCheck2Circle className='self-center text-primary font-bold'></BsCheck2Circle>  Full Access</li>
          <li className='flex gap-2'><BsCheck2Circle className='self-center text-primary font-bold'></BsCheck2Circle>  Source Files</li>
          <li className='flex gap-2'><BsCheck2Circle className='self-center text-primary font-bold'></BsCheck2Circle>  Free Appointments</li>
          <li className='flex gap-2'><BsCheck2Circle className='self-center text-primary font-bold'></BsCheck2Circle> Enhanced Security</li>

       </ul>
       <button className='btn btn-primary rounded-full btn-sm mt-5 px-5'>Buy Now</button>
      </div>

      {/* price3 */}
      <div className='text-start w-full p-6 py-8 border-b-4 dark:border-gray-700  hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">'>
      <h6 className="font-bold text-start text-2xl  uppercase mb-5 text-indigo-600">PROFESSIONAL</h6>
      <div className="flex mb-5">
              <span className="text-xl font-semibold">$</span>
              <span className="price text-4xl font-semibold mb-0">155</span>
              <span className="text-xl font-semibold self-end mb-1">/mo</span>
       </div>
       <ul className="list-none text-slate-400">
          <li className='flex gap-2'><BsCheck2Circle className='self-center text-primary font-bold'></BsCheck2Circle>  Full Access</li>
          <li className='flex gap-2'><BsCheck2Circle className='self-center text-primary font-bold'></BsCheck2Circle>  Source Files</li>
          <li className='flex gap-2'><BsCheck2Circle className='self-center text-primary font-bold'></BsCheck2Circle>  Free Appointments</li>
          <li className='flex gap-2'><BsCheck2Circle className='self-center text-primary font-bold'></BsCheck2Circle> Enhanced Security</li>
          <li className='flex gap-2'><BsCheck2Circle className='self-center text-primary font-bold'></BsCheck2Circle> Free Installment</li>
       </ul>
       <button className='btn btn-primary rounded-full btn-sm mt-5 px-5'>Started Now</button>
      </div>
      
      
  </div>
    );
};

export default Yearly;