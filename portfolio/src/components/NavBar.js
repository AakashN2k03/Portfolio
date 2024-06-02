import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div  className="flex items-center">
          <a  href='' className="text-white font-bold text-xl">
            <b className='text-blue-400 font-bold text-3xl' >A</b>AKASH
          </a>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <a href="#about" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
            About
          </a>
          <a href="#services" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
            Services
          </a>
          <a href="#skills" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
            Skills
          </a>
          <a href="#projects" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
            Projects
          </a>
        </div>
        <div className="flex items-center">
          <div className="border border-blue-400 rounded-md mt-2 p-2">
           <a href='#contact'> <span className="text-white hover:text-blue-300 px-2 py-2 rounded-md text-xl font-medium">
              Let's Connect
            </span></a>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="#services" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
          Services
          </a>
          <a href="#skills" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
             Skills
          </a>
          <a href="#projects" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
