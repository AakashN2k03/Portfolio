import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const zoomVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 1.05 }
  };

  return (
    <div id="services">
      <div className='text-center text-white'>
        <h1 className='text-3xl sm:text-4xl font-bold'>
          <span className='text-blue-500 mt-8'>Services</span> Offer
        </h1>
      </div>
      <div className="service">
        <div className="flex flex-col sm:flex-row justify-between mt-10 gap-6">
          <motion.div 
            variants={zoomVariants}
            whileHover="hover"
            whileTap="tap"
            className="border border-transparent bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 mb-4 sm:mb-0 sm:mr-4 mx-10 flex flex-col justify-center items-center"
            style={{ flex: '1', maxWidth: '100%' }}
          >
            <h3 className="text-xl font-bold text-blue-500 mb-2">Web Development</h3>
            <p className="text-white">Crafting bespoke web solutions tailored to your needs, I specialize in building responsive and intuitive websites that captivate audiences across all devices. With a focus on user-centric design and seamless functionality, I ensure your online presence leaves a lasting impression and drives tangible results for your business.</p>
           <a href='#contact'> <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">Engage it</button>      
           </a>
          </motion.div>
          <motion.div 
            variants={zoomVariants}
            whileHover="hover"
            whileTap="tap"
            className="border border-transparent bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 mx-10 flex flex-col justify-center items-center"
            style={{ flex: '1', maxWidth: '100%' }}
          >
            <h3 className="text-xl font-bold text-blue-500 mb-2">Machine Learning</h3>
            <p className="text-white">Leveraging advanced machine learning techniques, I empower businesses to extract actionable insights from their data, enabling informed decision-making and driving innovation. From predictive analytics to natural language processing and image recognition, I develop custom ML models that deliver tangible value and competitive advantage.</p>
            <a href='#contact'> <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">Engage it</button>
              </a>
              </motion.div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-10 gap-6">
          <motion.div 
            variants={zoomVariants}
            whileHover="hover"
            whileTap="tap"
            className="border border-transparent bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 mx-10 sm:mx-52 lg:mx-64 xl:mx-96 flex flex-col justify-center items-center"
            style={{ flex: '1', maxWidth: '100%' }}
          >
            <h3 className="text-xl font-bold text-blue-500 mb-2">Data Analyst</h3>
            <p className="text-white">Leveraging advanced machine learning techniques, I empower businesses to extract actionable insights from their data, enabling informed decision-making and driving innovation. From predictive analytics to natural language processing and image recognition, I develop custom ML models that deliver tangible value and competitive advantage.</p>
            <a href='#contact'> <button  className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">Engage it</button>
          </a></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
