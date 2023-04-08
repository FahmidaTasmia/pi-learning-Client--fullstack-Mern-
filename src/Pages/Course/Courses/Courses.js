import React, { useEffect, useState } from 'react';
import CourseDetail from '../CourseDetail/CourseDetail';

const Courses = () => {
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        fetch('https://learning-platform-server-gold.vercel.app/course')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
       <div>
        <div className='text-center md:text-4xl ' data-aos="fade-up">
            <h2>Our Latest Courses</h2>
            <h4>Decide which course is best for you.</h4>
        </div>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:my-12 lg:my-16 my-5'>
            {
                courses.map(course=><CourseDetail
                key={course._id}
                course={course}

                ></CourseDetail>)
            }
        </div>
       </div>
    );
};

export default Courses;