import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import mobile from '../assets/img/mobile_shopee.jpeg';
import mern  from '../assets/img/mern.jpeg';
import oil from '../assets/img/oil_prediction.jpeg';
import yolo from '../assets/img/yolo.jpeg';
import hotel from '../assets/img/hotel.jpeg';
import resume from '../assets/img/resume.jpeg';




const Project = () => {
  return (
    <div className="Projects mt-16" id="projects">
      <div className="text-center mt-12 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="text-blue-500">Creations</span> Developed
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {/* First row */}
        <motion.div 
          className="relative w-64 sm:w-72 lg:w-96 bg-white shadow-lg mx-4 my-4 overflow-hidden"
          whileHover={{ scaleY: 1.1, translateY: -20, transition: { duration: 0.5 } }}
          whileTap={{ scaleY: 1.1, translateY: -20, transition: { duration: 0.5 } }}
        >
          {/* Image */}
          <img src={resume} alt="Project 1" className="w-full h-full object-cover" />
          {/* Gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-700 via-blue-600 via-transparent to-transparent opacity-0 text-white py-4 px-6 transition-opacity duration-500 hover:opacity-70 flex flex-col items-center justify-center"
          >
            <h2 className="sm:text-md lg:text-lg xl:text-lg font-bold">Resume Analysis</h2>
            <p className="font-medium">Domain: GenAI</p>
            <p className="font-medium">Resume analysis with LLM model validates resumes by comprehensively assessing
             their content, ensuring accuracy and relevance for specific job roles</p>
             <a href="https://github.com/AakashN2k03/AakashN2k03-Conversational-Resume-Analysis.git" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faGithub} size="2x"style={{ color: 'white' }}   /> {/* Apply color styling */}
          </a>

          </motion.div>
        </motion.div>
        <motion.div 
          className="relative w-64 sm:w-72 lg:w-96 bg-white shadow-lg mx-4 my-4 overflow-hidden"
          whileHover={{ scaleY: 1.1, translateY: -20, transition: { duration: 0.5 } }}
          whileTap={{ scaleY: 1.1, translateY: -20, transition: { duration: 0.5 } }}
        >
          {/* Image */}
          <img src={mobile} alt="Project 1" className="w-full h-full object-cover" />
          {/* Gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-700 via-blue-600 via-transparent to-transparent opacity-0 text-white py-4 px-6 transition-opacity duration-500 hover:opacity-70 flex flex-col items-center justify-center"
          >
            <h2 className="sm:text-md lg:text-lg xl:text-lg font-bold">Mobile web Application</h2>
            <p className="font-medium">Domain: FullStack</p>
            <p className="font-medium">Discover the latest updates and  offers with our dynamic mobile platform.
            Seamlessly browse, purchase, and stay ahead  with intuitive website.</p>
            <a href="https://github.com/AakashN2k03/django_mobile_web_application.git" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faGithub} size="2x"style={{ color: 'white' }}   /> {/* Apply color styling */}
          </a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="relative w-64 sm:w-72 lg:w-96 bg-white shadow-lg mx-4 my-4 overflow-hidden"
          whileHover={{ scaleY: 1.1, translateY: -20, transition: { duration: 0.5 } }}
          whileTap={{ scaleY: 1.1, translateY: -20, transition: { duration: 0.5 } }}
        >
          {/* Image */}
          <img src={yolo} alt="Project 1" className="w-full h-full object-cover" />
          {/* Gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-700 via-blue-600 via-transparent to-transparent opacity-0 text-white py-4 px-6 transition-opacity duration-500 hover:opacity-70 flex flex-col items-center justify-center"
          >
            <h2 className="sm:text-md lg:text-lg xl:text-lg font-bold">Facial expression detection</h2>
            <p className="font-medium">Domain:Deep Learning</p>
            <p className="font-medium">Dive into the realm of emotion recognition with our YOLOv5-powered solution,
             accurately detecting and categorizing seven distinct facial expressions.</p>
             <a href="https://github.com/AakashN2k03/Facial_expression_using_yolov5.git" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faGithub} size="2x"style={{ color: 'white' }}   /> {/* Apply color styling */}
          </a>
          </motion.div>
        </motion.div>
        {/* Second row */}
        <motion.div 
          className="relative w-64 sm:w-72 lg:w-96 bg-white shadow-lg mx-4 my-4 overflow-hidden"
          whileHover={{ scaleY: 1.1, translateY: -20, transition: { duration: 0.5 } }}
          whileTap={{ scaleY: 1.1, translateY: -20, transition: { duration: 0.5 } }}
        >
          {/* Image */}
          <img src={oil} alt="Project 1" className="w-full h-full object-cover" />
          {/* Gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-700 via-blue-600 via-transparent to-transparent opacity-0 text-white py-4 px-6 transition-opacity duration-500 hover:opacity-70 flex flex-col items-center justify-center"
          >
            <h2 className="sm:text-md lg:text-lg xl:text-lg font-bold">Oil price prediction</h2>
            <p className="font-medium">Domain:Data Analyst</p>
            <p className="font-medium">Navigate the volatile world of oil markets confidently with our advanced prediction model, offering insightful forecasts based on
             comprehensive data analysis and market trends.</p>
             <a href="https://github.com/AakashN2k03/Predictive-Insights-ML.git" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faGithub} size="2x"style={{ color: 'white' }}   /> {/* Apply color styling */}
          </a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="relative w-64 sm:w-72 lg:w-96 bg-white shadow-lg mx-4 my-4 overflow-hidden"
          whileHover={{ scaleY: 1.1, translateY: -20, transition: { duration: 0.5 } }}
          whileTap={{ scaleY: 1.1, translateY: -20, transition: { duration: 0.5 } }}
        >
          {/* Image */}
          <img src={hotel} alt="Project 1" className="w-full h-full object-cover" />
          {/* Gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-700 via-blue-600 via-transparent to-transparent opacity-0 text-white py-4 px-6 transition-opacity duration-500 hover:opacity-70 flex flex-col items-center justify-center"
          >
            <h2 className="sm:text-md lg:text-lg xl:text-lg font-bold">Recommendation System</h2>
            <p className="font-medium">Domain:Ml</p>
            <p className="font-medium">Unlock unforgettable travel experiences with  my sophisticated
             hotel recommendation system, meticulously curated to showcase the finest accommodations. 
             
       </p>
       <a href="https://github.com/AakashN2k03/Predictive-Insights-ML.git" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faGithub} size="2x"style={{ color: 'white' }}   /> {/* Apply color styling */}
          </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative w-64 sm:w-72 lg:w-96 bg-white shadow-lg mx-4 my-4 overflow-hidden"
          whileHover={{ scaleY: 1.1, translateY: -20, transition: { duration: 0.5 } }}
          whileTap={{ scaleY: 1.1, translateY: -20, transition: { duration: 0.5 } }}
        >
          {/* Image */}
          <img src={mern} alt="Project 1" className="w-full h-full object-cover" />
          {/* Gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-700 via-blue-600 via-transparent to-transparent opacity-0 text-white py-4 px-6 transition-opacity duration-500 hover:opacity-70 flex flex-col items-center justify-center"
          >
            <h2 className="sm:text-md lg:text-lg xl:text-lg font-bold">Event Organizer</h2>
            <p className="font-medium">Domain:MERN</p>
            <p className="font-medium">Experience seamless event planning and coordination with our MERN-based organizer website, streamlining the allocation and organization of events. 
             </p>
            <a href="https://github.com/AakashN2k03/Predictive-Insights-ML.git" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faGithub} size="2x"style={{ color: 'white' }}   /> 
          </a>
          </motion.div>
        </motion.div>
       
      </div>
    </div>
  );
};

export default Project;
