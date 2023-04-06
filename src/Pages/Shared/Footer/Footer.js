import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { TfiLinkedin } from 'react-icons/tfi'
import img from '../../../Asset/footer.png'
import { SlPaperPlane } from "react-icons/sl";

function Footer() {
  return (
    <div style={{backgroundImage:(`url(${img})`), backgroundPosition:'center ', backgroundSize:'cover'}}>
      <footer className="footer  lg:py-24 p-10" >
  <div>
    <h2 className='text-primary font-bold text-2xl'>PiLearning</h2>
    <p>Access to quality online learning is an<br/>important step in helping people   future-proof <br /> their skills and seek new opportunities for growth and development.</p>
    <div className='flex gap-5 mt-2 text-lg '>
      <p><BsFacebook></BsFacebook></p>
      
      <p><BsInstagram></BsInstagram></p>
      <p><TfiLinkedin></TfiLinkedin></p>
      <p><BsTwitter></BsTwitter></p>

    </div>
  </div> 
  <div >
    <span className="text-lg tracking-wider font-semibold text-primary">Services</span> 
    <a href=' # ' className="link link-hover"> Branding</a> 
    <a href=' # ' className="link link-hover">Design</a> 
    <a href=' # ' className="link link-hover">Marketing</a> 
    <a href=' # ' className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="text-lg tracking-wider font-semibold text-primary">Company</span> 
    <a href=' # ' className="link link-hover">About us</a> 
    <a href=' # ' className="link link-hover">Contact</a> 
    <a href=' # ' className="link link-hover">Jobs</a> 
    <a href=' # ' className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="text-lg tracking-wider font-semibold text-primary">Legal</span> 
    <a href=' # ' className="link link-hover">Terms of use</a> 
    <a href=' # ' className="link link-hover">Privacy policy</a> 
    <a href=' # ' className="link link-hover">Cookie policy</a>
    <div className='flex pb-8 mt-3'>
    <input type="text" placeholder="Type here" className="input input-bordered text-black border-primary w-full rounded-full" />
    <p className='text-lg border p-5 border-primary rounded-full relative right-10 z-30 bg-primary bottom-3 ' ><SlPaperPlane className='text-white'></SlPaperPlane></p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
