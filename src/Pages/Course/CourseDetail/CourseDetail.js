import React from 'react';
import { BsBook,BsClockHistory,BsEye } from "react-icons/bs";
import { Link } from 'react-router-dom';


const CourseDetail = ({course}) => {
    const{title,name,Image,tImage,teacher,Price,view,time,detail,_id}=course;
    // console.log(course);

    return (
        <div>
           <div className=" " data-aos="zoom-in-up">
                  
                    <div className="group relative rounded-md shadow hover:shadow-lg  duration-500 ease-in-out overflow-hidden">
                        <div className="relative overflow-hidden">
                           <img src={Image} alt="" className="group-hover:scale-110 duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>

                            <div className="absolute ltr:left-0 rtl:right-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <div className="pb-4 ltr:pl-4 rtl:pr-4 flex items-center">
                                   <img src={tImage} alt="" className="h-12 w-12 rounded-full shadow-md  mx-auto" />
                                    <div className="ltr:ml-3 rtl:mr-3">
                                        <Link to={`/course/${_id}`} className="font-semibold text-white block">{teacher}</Link>
                                        <span className="text-white/70 text-sm">Professor</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content p-6 relative">
                            <Link to={`/course/${_id}`} className="text-lg block text-primary">{name}</Link>
                            <Link to={`/course/${_id}`} className="text-lg font-medium block hover:text-primary duration-500 ease-in-out mt-2">{title}</Link>
                            <p className="text-slate-400 mt-3 mb-4">{detail.slice(0,100)}...</p>
                            
                            <ul className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center list-none text-slate-400">
                                <li className="flex items-center ">
                                    <i className=" text-xl  text-slate-900 "></i>
                                    
                                    <span className='mx-2 flex items-center '> <span className='mx-2'><BsBook></BsBook></span>
                                    25 Lectures</span>
                                </li>

                                <li className="flex items-center ">
                                    <i className="uil uil-clock text-lg leading-none  text-slate-900 dark:text-white"></i>
                                    <span className=' flex items-center'> <span className='mx-2'><BsClockHistory></BsClockHistory></span>
                                    {time}</span>
                                </li>

                                <li className="flex items-center">
                                    <i className="uil uil-eye text-lg leading-none  text-slate-900 dark:text-white"></i>
                                    <span className='mx-2 flex items-center'> <span className='mx-2'><BsEye></BsEye></span>
                                    {view}</span>
                                </li>
                            </ul>

                            <div className="absolute -top-7 right-10 z-1 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <div className="flex justify-center items-center w-14 h-14 bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800 text-primary dark:text-white">
                                    <span className="font-semibold">${Price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </div>
    );
};

export default CourseDetail;