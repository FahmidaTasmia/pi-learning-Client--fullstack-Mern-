import React from 'react';
import { AiTwotoneLock } from "react-icons/ai";
const Content = () => {
    return (
      <div className='grid md:grid-cols-2 gap-5 md:gap-8 my-8'>
        <div>
            <h1 className='my-5 text-2xl '>Introductions</h1>
        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
        <table className="table w-full">
        
            <thead>
            <tr>
            
                <th>Lessons</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            
            <tr>
            
                <td>Lesson 1</td>
                <td class="p-4 ltr:text-right rtl:text-left"><span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Watch Free</span></td>
            </tr>
        
            <tr>
            
                <td>Lesson 2</td>
                <td><AiTwotoneLock></AiTwotoneLock></td>
            </tr>
            
            <tr>
        <td>Lesson 3</td>
                <td><AiTwotoneLock></AiTwotoneLock></td>
            </tr>

            <tr>
        <td>Lesson 4</td>
                <td><AiTwotoneLock></AiTwotoneLock></td>
            </tr>
            </tbody>
        </table>
        </div>
        </div>

        {/* tbb2 */}
        
        <div>
        <h1 className='my-5 text-2xl '>Mastery</h1>
        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
        <table className="table w-full">
        
            <thead>
            <tr>
            
                <th>Lessons</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            
            <tr>
            
                <td>Lesson 1</td>
                <td class="p-4 ltr:text-right rtl:text-left"><span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Watch Free</span></td>
            </tr>
        
            <tr>
            
                <td>Lesson 2</td>
                <td><AiTwotoneLock></AiTwotoneLock></td>
            </tr>
            
            <tr>
        <td>Lesson 3</td>
                <td><AiTwotoneLock></AiTwotoneLock></td>
            </tr>

            <tr>
        <td>Lesson 4</td>
                <td><AiTwotoneLock></AiTwotoneLock></td>
            </tr>
            </tbody>
        </table>
        </div>
        </div>

        {/* tbbb3 */}
        <div>
            <h1 className='my-5 text-2xl '>Final Thoughts</h1>
        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
        <table className="table w-full">
        
            <thead>
            <tr>
            
                <th>Lessons</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            
            <tr>
            
                <td>Lesson 1</td>
                <td class="p-4 ltr:text-right rtl:text-left"><span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Watch Free</span></td>
            </tr>
        
            <tr>
            
                <td>Lesson 2</td>
                <td><AiTwotoneLock></AiTwotoneLock></td>
            </tr>
            
            <tr>
        <td>Lesson 3</td>
                <td><AiTwotoneLock></AiTwotoneLock></td>
            </tr>

            <tr>
        <td>Lesson 4</td>
                <td><AiTwotoneLock></AiTwotoneLock></td>
            </tr>
            </tbody>
        </table>
        </div>
        </div>

        {/* tbbb4 */}
        <div>
            <h1 className='my-5 text-2xl '>Bonus</h1>
        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
        <table className="table w-full">
        
            <thead>
            <tr>
            
                <th>Lessons</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            
            <tr>
            
                <td>Lesson 1</td>
                <td class="p-4 ltr:text-right rtl:text-left"><span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Watch Free</span></td>
            </tr>
        
            <tr>
            
                <td>Lesson 2</td>
                <td><AiTwotoneLock></AiTwotoneLock></td>
            </tr>
            
            <tr>
        <td>Lesson 3</td>
                <td><AiTwotoneLock></AiTwotoneLock></td>
            </tr>

            <tr>
        <td>Lesson 4</td>
                <td><AiTwotoneLock></AiTwotoneLock></td>
            </tr>
            </tbody>
        </table>
        </div>
        </div>
      </div>
    );
};

export default Content;