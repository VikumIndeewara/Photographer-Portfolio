import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    const navItems = ["Home", "About", "Work", "Contact"];
    const [isOpen, setIsOpen] = useState("Home");
    useEffect(() => {}
    , [isOpen]);

  return (
    <div className=' bg-black w-dvw' >
        <div className='container flex justify-between py-5 px-10 mx-auto max-w-7xl'>
            <div className='Logo'>
              <Link to='/'>
                <h1 className='logo font-wosker text-white'>
                    KEVIN
                </h1>
                </Link>
            </div>
            <div className='gap-8 text-white hidden md:flex items-center '>
            {navItems.map((item, index) => (
                <a
                  key={index}
                  className={`nav-hover-btn relative hover:text-gray-300 font-poppins
                    ${isOpen === item ? "text-gray-300" : "text-white"}`}
                                    onClick={() => setIsOpen(item)}
                >
                  <Link to={`/#${item.toLocaleLowerCase()}`}> {item}</Link>
                  <div className={`absolute w-full transition-all ease-in-out duration-300  ${
                    isOpen === item ? " -top-9 border-4" : "top-0 border-0"
                  } `}>
                  </div>
                </a>
              ))}
              
            </div>
 
            <div className='md:hidden'>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>

            </div>
        </div>
        
    </div>
  )
}

export default Header