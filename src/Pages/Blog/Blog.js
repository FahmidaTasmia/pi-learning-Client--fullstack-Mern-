import React from 'react';

const Blog = () => {
    return (
       <div className='relative carousel'>
        <div className='overflow-hidden relative h-screen inset-0'>
        <div className='flex items-center justify-center transition-all duration-700 ease-in-out absolute inset-0 transform translate-x-0 z-20'>
        <div className="image-wrap absolute inset-0 -top-[350px] -bottom-[350px] -left-[100px] -right-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto z-1 bg-[url('https://i.ibb.co/kMPKJcp/thisisengineering-raeng-sz-Aaw9-Xo2lk-unsplash.jpg')] bg-top bg-no-repeat bg-cover"></div>
        </div>
        <div className="container z-3">
                        <div className="grid grid-cols-1 mt-10">
                            <div className="ltr:md:text-left rtl:md:text-right text-center">
                                <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Take Care of Your Future</h1>
                                <p className="text-white/70 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                                
                                <div className="mt-8">
                                    <a href="" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>

       </div>
    );
};

export default Blog;