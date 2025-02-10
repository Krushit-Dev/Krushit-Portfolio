import React from 'react';
import { motion } from 'framer-motion';
import type { Experience } from '../types';

const experiences: Experience[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: '2021 - Present',
    description: [
      'Led development of multiple high-impact web applications',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines and improved deployment processes',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    title: 'Mobile App Developer',
    company: 'Mobile Solutions Ltd.',
    period: '2019 - 2021',
    description: [
      'Developed cross-platform mobile applications',
      'Optimized app performance and reduced load times by 40%',
      'Integrated third-party APIs and services',
    ],
    technologies: ['React Native', 'Flutter', 'Firebase'],
  },
  {
    title: 'Frontend Developer',
    company: 'Web Creators Co.',
    period: '2018 - 2019',
    description: [
      'Built responsive web interfaces',
      'Collaborated with designers to implement pixel-perfect designs',
      'Improved website performance and SEO',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-purple-600">
                <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-purple-600" />
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {exp.title}
                </h3>
                {/* <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                  {exp.company} | {exp.period}
                </p> */}
                <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300 space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};