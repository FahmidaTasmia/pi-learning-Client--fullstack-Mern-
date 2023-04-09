import React from 'react';
import useTitle from '../../hooks/useTitle';


const Blog = () => {
    useTitle('Blog')
    return (
        <div >
            <div className='h-screen w-screen bg-blue-700 my-12'>
            <div className='grid grid-cols-2'>
                <div className='text-center m-auto container'data-aos="fade-up-right">
                <div className='lg:border-l-2 lg:p-40 lg:border-t-2 lg:border-b-2' >
                    <h1 className='text-white font-sans mb-5 uppercase font-bold'>PI Learning</h1>
                    <p  className='text-white font-serif uppercase font-bold lg:text-2xl'>Best Online Education Expertise</p>
                    <p className='text-white font-sans mt-8 text-xs lg:text-lg'>PI Learning is a Spiritualist organization dedicated to the study, application, and dissemination of The Living Light philosophy </p>
                </div>
                </div>
                <div className='' data-aos="fade-up-left">
                    <img className='h-screen w-full' src="https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbXB1dGVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
            </div>

            <div className='mt-24' >
            <h1 className='text-center md:text-3xl font-serif mb-8 uppercase font-bold' data-aos="fade-up-right">Learn Somthing More</h1>
            <p className='text-center mb-16 md:mx-24 lg:text-lg' data-aos="fade-up-left">In order to create an engaging learning experience, the role of instructor is optional, but the role of learner is essential.eLearning shouldn’t be a casual joy ride on a Sunday afternoon with the cruise control engaged. The sole purpose of eLearning is to teach.</p>
            <div className='grid md:grid-cols-2 md:gap-12 gap-4  md:container md:m-auto'>
           
            <div className="card w-full bg-base-100 shadow-xl rounded-none m-auto" data-aos="zoom-in-up">
                <figure><img  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvbXB1dGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Cors" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">
                What is Cors?
                   
                    </h2>
                    <p>In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there. </p>
                   <a className='text-blue-600' href="https://developer.mozilla.org/en-US/docs/Glossary/CORS"> Read More...</a>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl rounded-none m-auto" data-aos="zoom-in-up">
                <figure><img className='w-100' src="https://1qkeyv41u1op36vgbm47q0i6-wpengine.netdna-ssl.com/wp-content/uploads/2021/12/Firebase-Architecture.png" alt="Cors" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">
                    Why are you using firebase? What other options do you have to implement authentication?
                   
                    </h2>

                    <p>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why you should use it! Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps.  </p>
                   <a className='text-blue-600' href="https://www.makeuseof.com/what-is-google-firebase-why-use-it/"> Read More...</a>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl rounded-none m-auto" data-aos="zoom-in-up">
                <figure><img className='w-100' src="https://i.ytimg.com/vi/y6S26FiwEy4/maxresdefault.jpg" alt="Cors" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">
                    How does the private route work?
                   
                    </h2>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).  </p>
                   <a className='text-blue-600' href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources"> Read More...</a>
                </div>
            </div>


            <div className="card w-full bg-base-100 shadow-xl rounded-none m-auto" data-aos="zoom-in-up">
                <figure><img className='w-100' src="https://www.websoptimization.com/blog/wp-content/uploads/2022/03/node_work.jpg" alt="Cors" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">
                    What is Node? How does Node work?
                   
                    </h2>
                    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.  </p>
                   <a className='text-blue-600' href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources"> Read More...</a>
                </div>
            </div>

            </div>
            </div>


            {/* news-letter */}
            <div className='container mx-auto grid grid-cols-2 bg-gray-100 shadow-lg my-24 p-32 ' data-aos="fade-up">
                <div className='m-auto'>
                    <p className='font-bold md:text-2xl font-serif uppercase'>Are you ready For learning adventure !</p>
                    <p className='font-bold mt-3 font-sans uppercase'>Do Not Miss Any Update</p>
                </div>

                <div className='mx-12' >
                <div className="form-control ">
                    <label className="label">
                        <span className='font-bold mt-3 font-sans uppercase'>Enter your email address</span>
                    </label> 
                    <div className="relative ">
                        <input type="text" placeholder="" className="input input-bordered w-full pr-16" /> 
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
                </div>

            </div>
            
        </div>
    );
};

export default Blog;