import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Plane, Code, Ticket as Cricket } from 'lucide-react';

const hobbies = [
  { icon: Plane, name: 'Traveling', description: 'Exploring new places and cultures' },
  { icon: Gamepad2, name: 'Gaming', description: 'Strategy and adventure games' },
  { icon: Cricket, name: 'Cricket', description: 'Playing and watching matches' },
  { icon: Code, name: 'Coding', description: 'Building side projects' },
];

export const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">Hobbies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="inline-block mb-4"
                >
                  <Icon className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {hobby.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {hobby.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};