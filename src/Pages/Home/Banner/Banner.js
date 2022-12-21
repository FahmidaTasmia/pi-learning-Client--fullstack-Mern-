import React, { useEffect, useRef } from 'react';
import image from '../../../Asset/bg.jpg'
import Typewriter from 'typewriter-effect';
import { AiOutlineDownload } from "react-icons/ai";
import './Banner.css'
import Lottie from 'lottie-web';
const Banner = () => {
    
    const container =useRef(null)
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
          
            autoplay:true,
            animationData:require('./banner.json')
        })
        return () => instance.destroy();
     
    },[])
    return (
        <div className=' '>
           <div className='grid  md:grid-cols-2'>
            {/* //text-content */}
            <div className='mx-auto self-center md:p-0 px-5' >
            <h2 className='text-2xl  md:text-3xl lg:text-4xl font-bold '>Complete Your Dream 
                <h2 className='text-primary mt-2'>
                <Typewriter 
                        options={{
                            strings: ['At Our Own Space', 'For Further Expansion' ,'Expand Your Possibilities'],
                            autoStart: true,
                            loop: true,
                            
                        }}
                        />
                </h2>
            </h2>

            <p className='text-justify my-4 md:text-lg text-sm'>
            Learning is a life-long journey that in fact we never find the terminate  stop. Stop searching, enjoy the process.
            </p>

           <p>
           <button className='btn  btn-primary  rounded-sm gap-2 text-white'><AiOutlineDownload className='text-lg font-bold'></AiOutlineDownload> DownLoad Content</button>
           </p>
            </div>

            {/* //lottie */}
          
            <div className='container w-75 h-75' ref={container}></div>
           </div>
        </div>
    );
};

export default Banner;