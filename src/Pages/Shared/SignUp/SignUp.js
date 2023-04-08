import React, { useContext, useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }



    const container =useRef(null);
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
          
            autoplay:true,
            animationData:require('./login.json')
        })
        return () => instance.destroy();
     
    },[])
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">

           <div className="text-center lg:text-left"
            ref={container}
            >
            </div>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:py-20 py-5">
                <h1 className="md:text-5xl text-2xl text-blue-500 text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn border-none bg-blue-500 hover:bg-blue-500" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link className='text-blue-500 font-bold' to="/login">Login</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;