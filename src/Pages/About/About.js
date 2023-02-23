import React from 'react';
import { Link } from 'react-router-dom';

import background from '../../Asset/aboutus.jpg'
import amazone from '../../Asset/amazon.svg'
import google from '../../Asset/google.svg'
import lenovo from '../../Asset/lenovo.svg'
import paypal from '../../Asset/paypal.svg'
import shopify from '../../Asset/shopify.svg'
import spotify from '../../Asset/spotify.svg'
import Team from '../Home/Team/Team';
import Expert from './Expert';
import Features from './Features';

const About = () => {
    
    return (
       <div>
        <div className='mb-12 border-t border-t-primary rounded-sm'>
        <div className="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${background})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className='container z-30'>
        <div className='grid grid-cols-1 pb-8 text-center mt-10 text-white'>
        <h3 className='mb-6 md:text-4xl text-3xl font-medium text-white'> About Us</h3>
        <p className='text-white text-lg max-w-xl mx-auto'>Start working with PiLearning Team that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>
        </div>
        <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
                <div className='flex md:gap-8 gap-5 justify-center text-white'>
                    <Link to='/'>TechWind</Link>
                    <Link to='/'>Company</Link>
                    <Link to='/about'>About Us</Link>
                </div>
            </div>
        </div>
       
       </div>
       {/* //brand */}
       <div className='grid md:grid-cols-6 grid-cols-3 gap-3 py-5 px-5 md:px-10 m-auto'>
        <div><img className='w-20 h-20' src={amazone} alt="" /></div>
        <div><img className='w-20 h-20' src={google} alt="" /></div>
        <div><img className='w-20 h-20' src={lenovo} alt="" /></div>
        <div><img className='w-20 h-20' src={paypal} alt="" /></div>
        <div><img className='w-20 h-20' src={shopify} alt="" /></div>
        <div><img className='w-20 h-20' src={spotify} alt="" /></div>
        
       </div>
       {/* //team */}
       <div className='md:mt-12'></div>
       <div>
       <Team></Team>
       </div>
       <div className='md:mt-24'></div>
       <div>
        
        <Features></Features>
       </div>
       <div className='md:mt-24'></div>
       <div>
        
        <Expert></Expert>
       </div>
       </div>


    );
};

export default About;