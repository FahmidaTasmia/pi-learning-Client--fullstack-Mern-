import React from 'react';
import { BsPhone } from 'react-icons/bs';
import { TfiEmail, TfiLocationPin } from 'react-icons/tfi';

const Contact = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='m-auto'>
                <h2 className='font-bold text-2xl lg:text-4xl tracking-wider'>GET IN TOUCH !</h2>
                <p className='my-2'>Fill in the form to start a conversation</p>
                <p className='flex gap-2'><TfiLocationPin className='self-center text-xl'></TfiLocationPin> Sylhet, Bangladesh</p>
                <p className='flex gap-2 my-2'><BsPhone className='self-center text-xl'></BsPhone>+8801789368876</p>
                <p className='flex gap-2'><TfiEmail className='self-center text-xl'></TfiEmail >tasmia@gmail.com</p>
            </div>
            <div className='p-10 shadow-sm my-10 border-gray-50 border'>
            <form className=" scale-90">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Fahmida Tasmia" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="text" name='email' placeholder="name@company.com" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" name='password' placeholder="Let us Know how we can help you" className="input input-bordered" required/>
                        
                    </div>
                    <div>
                    <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                    <textarea name="message" className="textarea textarea-bordered h-24 w-full " placeholder="Write Your message here..." required></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn border-none bg-blue-500 hover:bg-blue-500" type="submit" value="Sign Up" />
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Contact;