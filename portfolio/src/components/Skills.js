import React, { useState } from 'react';

import js from '../assets/img/javascript.png';
import git from '../assets/img/git.png';
import vs from '../assets/img/vs-code.png';
import tailwind from '../assets/img/tailwind.jpg';
import dj from '../assets/img/dj.png';
import sql from '../assets/img/mysql.png';
import mongo from '../assets/img/mongodb.jpg';
import framermotion from '../assets/img/framer_motion.png';
import react from '../assets/img/react.png';
import nodejs from '../assets/img/nodejs.webp';
import github from '../assets/img/github-512.webp';
import lang from '../assets/img/langchain.webp';
import streamlit from '../assets/img/streamlit.jpg';
import spyder from '../assets/img/spyder.png';
import jupyter from '../assets/img/jupyter.jpg';
import opencv from '../assets/img/opencv.webp';
import scilearn from '../assets/img/scikit learn.png';
import pytorch from '../assets/img/pytorch.png';
import huggingface from '../assets/img/hugface.png';

const Skills = () => {
  const [showSkills, setShowSkills] = useState(true);
  const [showTools, setShowTools] = useState(false);

  const toggleSkills = () => {
    setShowSkills(true);
    setShowTools(false);
  };

  const toggleTools = () => {
    setShowSkills(false);
    setShowTools(true);
  };

  const skillsData = [
    { img: js, title: "JS", progress: 75 },
    { img: react, title: "React", progress: 90 },
    { img: nodejs, title: "NodeJS", progress: 71 },
    { img: tailwind, title: "Tailwind", progress: 90 },
    { img:  dj, title: "Django", progress: 70 },
    { img: sql, title: "mysql", progress: 80  },
    { img: mongo, title: "MongoDB", progress: 65  },
    { img: framermotion, title: "Framer Motion" , progress: 60 },
    { img: git, title: "Git", progress: 80 },
    { img: vs, title: "VS Code", progress: 90 },
    { img: github, title: "Github", progress: 80 },
  ];

  const toolsData = [
    { img: lang, title: "Langchain", progress: 70  },
    { img: spyder, title: "Spyder", progress: 75  },
    { img: streamlit, title: "Streamlit", progress: 88  },
    { img: jupyter, title: "Jupyter", progress: 85  },
    { img: opencv, title: "OpenCV", progress: 55  },
    { img: pytorch, title: "Pytorch", progress: 65  },
    { img: scilearn, title: "SciKitlearn", progress: 76  },
    { img: huggingface, title: "huggingface", progress: 70  },
  ];

  return (
    <div className="mt-16"  id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="text-white sm:3 mt-10 lg:px-10 xl:px-40">
            <h2 className="text-3xl px-2 text-blue-500 font-bold mb-4 sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl">What to know about my skills?</h2>
            <p className="mt-8 text-lg px-2">
              I leverage AI and Full Stack technologies to create streamlined, user-friendly interfaces, optimizing efficiency and user experience.
            </p>
            <div className="flex justify-between mt-12">
              <button 
                className={`bg-${showSkills ? 'blue' : 'black'}-500 text-white px-4 py-2 md:px-2 md:py-2 
                sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg mb-2 ml-4 mr-2`}
                onClick={toggleSkills}
              >
                WEB Skill
              </button>
              <div className="ml-2 mr-4">
                <button 
                  className={`bg-${showTools ? 'blue' : 'black'}-500 text-white 
                  px-4 py-2 md:px-2 md:py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full text-sm 
                  sm:text-base lg:text-lg mb-2 ml-2 mr-4`}
                  onClick={toggleTools}
                >
                  AI Skill
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1">
          {showSkills && (
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 p-6 rounded-lg shadow-lg">
              {/* Cards Content */}
              {skillsData.map((skill, index) => (
                <div key={index} className="bg-stone-800 p-4 flex flex-col items-center justify-center rounded-xl">
                  <img src={skill.img} alt={skill.title} title={skill.title} className="h-12 w-12 mb-2" />
                  <div className="bg-gray-200 w-full h-2 mt-2 rounded-full">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: `${skill.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Render Tools */}
          {showTools && (
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 p-6 rounded-lg shadow-lg">
              {/* Cards Content */}
              {toolsData.map((tool, index) => (
                <div key={index} className="bg-stone-800 p-4 flex flex-col items-center justify-center rounded-xl">
                  <img src={tool.img} alt={tool.title} title={tool.title} className="h-12 w-12 mb-2" />
                  <div className="bg-gray-200 w-full h-2 mt-2 rounded-full">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: `${tool.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
