import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsDownload, BsFillCircleFill } from "react-icons/bs";
import Content from '../Content/Content';
import ReactToPdf from "react-to-pdf";
const Course = () => {
  const ref = React.createRef();
    const courseDetail = useLoaderData();
    const{name,Image,tImage,teacher,detail,detail2,details,Li1,Li2,Li3,Li4}=courseDetail;
    // console.log(courseDetail);
    return (
        <div ref={ref}>
             {/* //hero */}
             <div className="hero " style={{ backgroundImage: `url(${Image})`, height:'60vh', backgroundRepeat: 'no-repeat', backgroundPosition:'center',  backgroundSize:"cover" }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div >
                    <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                    <div className='flex gap-5 justify-center'>
                      <p><img className='rounded-full w-20 h-20 ' src={tImage} alt="#" /></p>
                      <p className='self-center'>{teacher}</p>
                      
                    </div>
                  </div>
                </div>
              </div>

             

              <div className='my-8'>
                
                <div className='flex justify-between'>
                <h1 className='my-5 md:text-4xl text-2xl'>Course Overview</h1>
              <ReactToPdf targetRef={ref} filename="course.pdf">
                  {({ toPdf }) => <button className='btn gap-2 mb-8 btn-primary rounded-full' onClick={toPdf}><BsDownload></BsDownload>Download PDF</button>}
                </ReactToPdf>
   
              </div>
                <p className='text-justify'>{detail}</p>
                <p className='my-5 text-justify'>{detail2}</p>
                <p className='text-justify'>{details}</p>
                <div>
                  <h2 className='text-xl font-bld mt-3'>WHAT YOU WILL LEARN:</h2>
                        <ul >
                          <li className='flex gap-3 my-3 '><BsFillCircleFill className='self-center'></BsFillCircleFill>{Li1}</li>
                          <li className='flex gap-3 mb-3 '><BsFillCircleFill className='self-center'></BsFillCircleFill>{Li2}</li>
                          <li className='flex gap-3 mb-3 '><BsFillCircleFill className='self-center'></BsFillCircleFill>{Li3}</li>
                          <li className='flex gap-3 mb-3'><BsFillCircleFill className='self-center'></BsFillCircleFill>{Li4}</li>
                        </ul>
                    </div>
                    
                    <div className='mt-8 grid grid-cols-2 gap-8'>

                    <img className='rounded-md'  src="https://i.ibb.co/kMPKJcp/thisisengineering-raeng-sz-Aaw9-Xo2lk-unsplash.jpg" alt="#" />
                    <img className='rounded-md'  src="https://i.ibb.co/kMPKJcp/thisisengineering-raeng-sz-Aaw9-Xo2lk-unsplash.jpg" alt="#" />
                    </div>

                    <div>
                      <Content></Content>
                    </div>
              </div>
        </div>
    );
};

export default Course;