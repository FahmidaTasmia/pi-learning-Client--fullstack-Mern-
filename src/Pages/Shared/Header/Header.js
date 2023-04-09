import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems = <React.Fragment>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li>
              
              <div  >
                          {
                              user?.uid?
                              <>
                             
                              <button onClick={ handleLogOut} >Log out</button>
                              </>
                              :
                              <>
                              <Link className='mr-3' to='/login'>Login</Link>
                              
                              </>
                          }
                          </div>
      
                          <div>
      
                             {
                              user?.photoURL ?
                              <img className='h-10 rounded-full' src={user.photoURL} alt="" />
                              :
                              <FaUser></FaUser>
                             } 
      
                           {
                           user?.displayName
                           }
                          </div>
              </li>
    
</React.Fragment>
    return (
        <div className="navbar md:top[-70] relative bg-gradient-to-r from-transparent to-indigo-600/10 text-primary font-bold flex justify-between">
        <div className="navbar-start">
        <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl"><span className=' font-bold text-2xl'>piLearning</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  p-0">
                {menuItems}
            </ul>
        </div>
      
    </div>
    );
};

export default Header;