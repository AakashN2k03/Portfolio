import React from 'react';
import set1 from '../assets/img/stats-card_icon-1.png';
import set2 from '../assets/img/stats-card_icon-2.png';
import set3 from '../assets/img/stats-card_icon-3.png';

const Stats = () => {
  return (
    <section className="stats" id="stats">
      <div className="container mx-auto px-2 py-6">
        <ul className="stats-list flex flex-col md:flex-row gap-4 justify-center">
          <li className="flex-grow md:w-32">
            <a href="#" className="stats-card bg-slate-900 flex items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md transition-transform hover:translate-y-[-5px] border border-gray-300">
              <div className="card-icon bg-yellow-500 w-12 h-12 flex items-center justify-center rounded-full mr-4"> {/* Increased image size */}
                <img src={set1} alt="Badge icon" className="w-8 bg-gray-300 rounded-full" /> {/* Increased image size */}
              </div>
              <div className="text-left text-yellow-500"> {/* Changed to text-left for left alignment */}
                <h2 className="h2 text-5xl font-bold mb-2">3+</h2> {/* Increased font size and added margin bottom */}
                <p className="mb-0"><strong>Internship Experience</strong></p> {/* Added margin bottom */}
              </div>
              <ion-icon name="chevron-forward-outline" className="text-gray-500"></ion-icon>
            </a>
          </li>

          <li className="flex-grow md:w-32">
            <a href="#" className="stats-card bg-slate-900 flex items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md transition-transform hover:translate-y-[-5px] border border-gray-300">
              <div className="card-icon bg-green-500 w-12 h-12 flex items-center justify-center rounded-full mr-4"> {/* Increased image size */}
                <img src={set2} alt="Checkmark icon" className="w-8 bg-gray-300 rounded-full" /> {/* Increased image size */}
              </div>
              <div className="text-left text-green-500"> 
                <h2 className="h2 text-5xl font-bold mb-2">10+</h2>
                <p className="mb-0"><strong>Completed Projects</strong></p> 
              </div>
              <ion-icon name="chevron-forward-outline" className="text-gray-500"></ion-icon>
            </a>
          </li>

          <li className="flex-grow md:w-32 ">
            <a href="#" className="stats-card bg-slate-900 flex items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md transition-transform hover:translate-y-[-5px] border border-gray-300">
              <div className="card-icon  bg-blue-500 w-12 h-12  flex items-center justify-center rounded-full mr-4"> {/* Increased image size */}
                <img src={set3} alt="Peoples rating icon" className="w-8 bg-gray-300 rounded-full" /> {/* Increased image size */}
              </div>
              <div className="text-left text-blue-500"> {/* Changed to text-left for left alignment */}
                <h2 className="h2 text-5xl font-bold mb-2">7+</h2> {/* Increased font size and added margin bottom */}
                <p className="mb-0"><strong>Contributions on github</strong></p> {/* Added margin bottom */}
              </div>
              <ion-icon name="chevron-forward-outline" className="text-gray-500"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stats;
