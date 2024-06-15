import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/career", label: "Career" },
    { path: "/ourteam", label: "Our Team" },
    { path: "/signin", label: "Sign in" },
  ];

  return (
    <nav className="flex items-center justify-between bg-custom-100 px-6 lg:px-24 lg:py-6 py-4">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-[150px] lg:w-[200px] h-auto" />
      </div>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={30} className="text-white" /> : <FaBars size={30} className="text-white" />}
        </button>
      </div>
      <div className={`lg:flex lg:flex-row lg:items-center lg:gap-x-[60px] ${isOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full lg:w-auto bg-custom-100 lg:bg-transparent lg:static z-10`}>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
              <p className='text-white text-xl font-ptSans py-2 lg:py-0 px-6'>{link.label}</p>
            </Link>
          ))}
          <Link to="/signup" onClick={() => setIsOpen(false)}>
            <div className='w-[90px] border-2 border-white rounded-lg px-2 py-1 mt-2 lg:mt-0 mb-4 lg:mb-0 lg:ml-[24px]'>
              <p className='text-white text-xl font-ptSans'>Sign up</p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
