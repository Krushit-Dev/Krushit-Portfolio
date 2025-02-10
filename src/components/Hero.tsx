import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Twitter, Instagram, Download } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/krushitviradiya' },
  { icon: Linkedin, href: 'https://linkedin.com/in/krushitviradiya' },
  { icon: Twitter, href: 'https://twitter.com/krushitviradiya' },
  { icon: Instagram, href: 'https://instagram.com/krushitviradiya' },
];

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
        <div className="section-container max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 sm:space-y-8"
        >
          <div className="space-y-2 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            <span className="text-gray-800 dark:text-white block sm:inline">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block sm:inline">
            Krushit
            </span>
          </h1>
          <div className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 h-[40px]">
            <TypeAnimation
            sequence={[
              'Mern Stack Developer',
              2000,
              'Android Developer',
              2000,
              'Full Stack Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
          </div>
          </div>

          <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
          >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Download Resume
          </a>
          </motion.div>

          <div className="flex justify-center gap-4 sm:gap-6 pt-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            );
          })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
