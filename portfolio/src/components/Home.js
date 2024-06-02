import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { ReactTyped as Typed } from 'react-typed'; // Import the ReactTyped component from react-typed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import specific brand icons from FontAwesome
import Profile from '../assets/img/profile.jpeg';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen pt-16'> {/* Add flex-col to align items vertically */}
      <div className='max-w-md mx-auto text-center'>
        <div className="flex flex-col items-center"> {/* border-dashed border-2 border-blue-400 */}
        <img
        src={Profile}
        alt="Profile"
        className="rounded-full mt-8 w-full h-auto "
        style={{
          minWidth: '100px',
          maxWidth: '300px',
          borderRadius: '20%',
          filter: 'drop-shadow(0px 4px 4px rgba(63, 150, 243, 0.9))' // Darker shade of blue drop shadow filter
        }}
      />
          <div className="flex items-center justify-center mt-8">
            <p className='text-white text-xl px-2'>Hi there👋
              <Typed
                strings={["Ml enthusiast", "Web Developer", "Programmer", "Data Analyst"]} // Strings to be typed
                typeSpeed={100} // Typing speed
                backSpeed={100} // Backspacing speed
                backDelay={1000} // Delay before starting to backspace
                loop // Loop infinitely
                className='text-blue-400 text-xl md:text-2xl lg:text-3xl' // Text color and size for different breakpoints
              />
            </p>
          </div>
        </div>
        <p className='text-white text-lg text-center'>Seeking a dynamic role in the above specific fields
          to apply diverse skills towards innovative solutions and contribute to organizational success.</p>
        
        {/* Add FontAwesome icons */}
        <div className="flex justify-center mt-4">
          <a href="https://www.linkedin.com/in/aakashn2003/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: 'rgb(59, 130, 246)' }} /> {/* Apply color styling */}
          </a>
          <a href="https://www.instagram.com/thanioruvan147?igsh=Y3F1b3E4bWZleWZy" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'rgb(59, 130, 246)'  }} /> {/* Apply color styling */}
          </a>
          <a href="https://github.com/AakashN2k03" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faGithub} size="2x"style={{ color: 'rgb(59, 130, 246)' }}   /> {/* Apply color styling */}
          </a>
          
        </div>
        
        {/* Add animated "Know more about me" button */}
        <motion.button
          whileHover={{ scale: 1.1 }} // Scale animation on hover
          whileTap={{ scale: 0.9 }} // Scale animation on tap
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 #about"
        >
          <a href="#about" >More about me</a>
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
