import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser, faMessage, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
   const form=useRef();
 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const sendEmail=(e)=>
    {
      e.preventDefault();
    
  emailjs
  .sendForm('service_ktg264a', 'template_e3y7msc', form.current, {
    publicKey: 'yPBHiU2TzGyneFln2',
  })
  .then(
    () => {
     
      form.current.reset();
    },
    (error) => {
      console.log('FAILED...', error.text);
    },
  );

}
  

  return (
    <div ref={ref} className="flex justify-center" id='contact'>
      <div className="w-full lg:w-2/3 xl:w-1/2">
        <div className="text-white mt-12">
          <h1 className="text-3xl text-center sm:text-4xl font-bold">
            <span className="text-blue-500">GET IN</span> Touch
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`flex flex-col md:flex-row justify-between lg:pl-16 mt-8 ${isVisible ? 'transition-all' : ''}`}
        >
          <div className='contact text-white md:w-1/2 md:pr-8'>
            <h2 className="text-lg sm:text-xl xl:text-3xl font-semibold "><span className='text-blue-500 ml-3'>Have You Any Project ? </span>  Please Drop a Message</h2>
            <p className="mt-4 ml-5">
              Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as soon as possible.
            </p>
            <div className="text-white mt-8">
              <h3 className="text-lg font-semibold xs:text-center xl:text-2xl text-blue-500">
              <FontAwesomeIcon icon={faLocationDot} size="1x" className='px-1 ml-3' style={{ color: 'white' }} />Address:</h3>
              <p className="mt-2 ml-12">
              Puzhal,Redhills,Chennai-600066</p>
            </div>
            <div className="text-white mt-4">
              <h3 className="text-lg font-semibold  xl:text-2xl text-blue-500">
              <FontAwesomeIcon icon={faPhone} className='px-1 ml-3' size="1x" style={{ color: 'white' }} />  Phone:</h3>
              <a href="tel:01234567789" className="mt-2 block ml-12">7010814070</a>
              
            </div>
            <div className="contact-item-icon text-white mt-4">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
          </div>
          <form ref={form} className="bg-neutral-900 p-6 md:w-1/2  md:ml-8 mt-8 md:mt-0 rounded-xl" onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="text-blue-500 block text-sm font-bold mb-2">Name</label>
              <div className="relative">
                <input
                  type="text"
                  
                  name="from_name"
                  className="shadow appearance-none bg-neutral-800 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline pl-8"
                  placeholder="Enter your name"
                />
                <FontAwesomeIcon
                  icon={faUser}
                  size="1x"
                  className="absolute inset-y-0 left-0 px-2 py-2 text-white "
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-blue-500 block text-sm font-bold mb-2">Email</label>
              <div className="relative">
                <input
                  type="email"
                 
                  name="from_email"
                  className="shadow appearance-none bg-neutral-800 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline pl-8"
                  placeholder="Enter your email"
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="1x"
                  className="absolute inset-y-0 left-0 px-2 py-2 text-white "
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-blue-500 block text-sm font-bold mb-2">Message</label>
              <div className="relative">
                <textarea
                
                  name="message"
                  className="shadow appearance-none border bg-neutral-800 rounded w-full py-2 px-8 text-white leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
                <FontAwesomeIcon
                  icon={faMessage}
                  size="1x"
                  className="absolute inset-y-0 left-0 px-2 py-3 text-white "
                />
              </div>
            </div>
            <button type="submit" value="Send" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded focus:outline-none focus:shadow-outline">Send</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
