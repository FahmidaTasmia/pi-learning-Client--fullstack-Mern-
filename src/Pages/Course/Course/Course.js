import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const courseDetail = useLoaderData();
    const{title,name,Image,tImage,teacher}=courseDetail;
    // console.log(courseDetail);
    return (
        <div>
             {/* //hero */}
             <div className="hero " style={{ backgroundImage: `url(${Image})`, height:'60vh', backgroundRepeat: 'no-repeat', backgroundPosition:'center', backgroundSize:"cover" }}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div >
      <h1 className="mb-5 text-5xl font-bold">{name}</h1>
      <div className='flex gap-5 justify-center'>
        <p><img className='rounded-full w-20 h-20' src={tImage} alt="#" /></p>
        <p className='self-center'>{teacher}</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;