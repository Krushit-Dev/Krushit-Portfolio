import React from 'react';
import { motion } from 'framer-motion';
import myImg from "@/assets/img/my-img.jpg";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container max-w-7xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        >
        <img
          src={myImg}
          alt="Krushit - Full Stack Developer"
          className="rounded-2xl shadow-2xl w-full max-w-[280px] sm:max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"

          />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
            >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Full Stack Developer & Tech Enthusiast
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Hi! I'm Krushit, a passionate Full Stack Developer with expertise in web and mobile development.
              I love creating elegant solutions to complex problems and am dedicated to writing clean,
              efficient code that makes a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              With experience in both frontend and backend technologies, I enjoy building complete
              applications that deliver exceptional user experiences while maintaining robust server-side
              functionality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
              >
              <h4 className="font-semibold mb-1">Location</h4>
              <p>Gujarat, India</p>
              </motion.div>
              <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
              >
              <h4 className="font-semibold mb-1">Experience</h4>
              <p>2+ Years</p>
              </motion.div>
              <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
              >
              <h4 className="font-semibold mb-1">Email</h4>
              <a 
                href="mailto:krushitviradiya4@gmail.com"
                className="hover:text-purple-600 transition-colors duration-300"
              >
                krushitviradiya4@gmail.com
              </a>
              </motion.div>
              <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
              >
              <h4 className="font-semibold mb-1">Education</h4>
              <p>B.Tech in Computer Science</p>
              </motion.div>
            </div>
            <div className="pt-4">
              {/* <a
              href="/path-to-your-cv.pdf"
              download
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
              >
              Download CV
              </a> */}
            </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};