import React from 'react';
import react from './assets/img/react.png';
import tailwind from './assets/img/tailwind.jpg';
import framermotion from './assets/img/framer_motion.png';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 mt-16 text-white">
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Contact Me</h3>
            <p>Feel free to reach out for collaborations or just to say hello!</p>
            <ul className="mt-4">
              <li>Email: aakofficial007@gmail.com</li>
              <li>Phone: 7010814070</li>
            </ul>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <h3 className="text-xl font-bold mb-2">Connect With Me</h3>
            <ul className="flex">
              <li className="mr-4"><a href="https://www.instagram.com/thanioruvan147?igsh=Y3F1b3E4bWZleWZy" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li className="mr-4"><a href="https://www.linkedin.com/in/aakashn2003/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/AakashN2k03" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-sm text-gray-500">&copy; 2024 Aakash. All rights reserved.</p>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex flex-col items-center">
            <img src={react} alt="React Logo" className="w-16 h-16 mb-2" />
            <p className="text-xs">Crafted with React</p>
          </div>
          <div className="flex flex-col items-center mx-8">
            <img src={tailwind} alt="Tailwind CSS Logo" className="w-16 h-16 mb-2" />
            <p className="text-xs">Styled with Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={framermotion} alt="Framer Motion Logo" className="w-16 h-16 mb-2" />
            <p className="text-xs">Animated with Framer Motion</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
