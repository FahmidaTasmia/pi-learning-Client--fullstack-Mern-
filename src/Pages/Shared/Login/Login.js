import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from './../../../context/AuthProvider/AuthProvider';
import { useState } from 'react';

import { GoogleAuthProvider } from 'firebase/auth';

function Login() {
    const [error, setError]=useState(' ');
    const{signIn}=useContext(AuthContext);
    const {providerLogin}=useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace:true});
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
           
    }

    const handleGoogleSignIn=()=>{
      providerLogin(googleProvider)
      .then(result=>{
          const user = result.user;
          console.log(user);
      })
      .catch(error=>console.error(error));

  }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
            className="absolute inset-0 bg-gradient-to-r from-[#b2c4e9] to-[#4b6bfb] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
                <div>
                    <h1 className="text-2xl font-semibold tracking-wider">LOGIN TO YOUR ACCOUNT</h1>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
  <div className="rounded-md shadow-sm -space-y-px">
    <div>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
        placeholder="Email address"
      />
    </div>
    <div >
      <input 
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="my-5 appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
        placeholder="Password"
      />
    </div>
  </div>
  <div>
    <button
      type="submit"
      className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#b2c4e9] to-[#4b6bfb]"
    >
      Login
    </button>
    <div>
      {error}
    </div>
  </div>
  <div className="flex items-center justify-between">
    <div className="text-sm">
      <Link
        to="/register"
        className="text-primary font-bold hover:underline dark:text-blue-500"
      >
        Don't have an account? <span c>Register</span>
      </Link>
    </div>
  </div>
</form>
<div >
    <button onClick={handleGoogleSignIn} className="mt-5 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-gradient-to-r from-[#b2c4e9] to-[#4b6bfb]"><FaGoogle className='mr-2 self-center'></FaGoogle>SignIn with Google</button>
    </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login
