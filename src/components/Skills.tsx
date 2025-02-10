import React, { useRef, useMemo } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
  Code2, Palette, Database, Globe, Layout, Smartphone, Server, Monitor,
  Box, Layers, FileJson, AppWindow, Blocks, Binary, Network, Boxes
} from 'lucide-react';
import type { Skill } from '../types';

const skills: Skill[] = [
  // Web Development
  { name: 'HTML5', icon: Globe, category: 'web' },
  { name: 'CSS3', icon: Palette, category: 'web' },
  { name: 'JavaScript', icon: Code2, category: 'web' },
  { name: 'TypeScript', icon: FileJson, category: 'web' },
  { name: 'React', icon: Layout, category: 'web' },
  { name: 'Next.js', icon: AppWindow, category: 'web' },
  { name: 'Vue.js', icon: Layers, category: 'web' },
  { name: 'Tailwind CSS', icon: Blocks, category: 'web' },

  // App Development
  { name: 'React Native', icon: Smartphone, category: 'app' },
  { name: 'Flutter', icon: Monitor, category: 'app' },
  { name: 'Kotlin', icon: Binary, category: 'app' },
  { name: 'Swift', icon: AppWindow, category: 'app' },
  { name: 'Android SDK', icon: Smartphone, category: 'app' },
  { name: 'iOS Development', icon: Monitor, category: 'app' },
  { name: 'Expo', icon: Boxes, category: 'app' },
  { name: 'App Store Connect', icon: AppWindow, category: 'app' },

  // Backend & Databases
  { name: 'Node.js', icon: Server, category: 'backend' },
  { name: 'Express', icon: Network, category: 'backend' },
  { name: 'MongoDB', icon: Database, category: 'backend' },
  { name: 'PostgreSQL', icon: Database, category: 'backend' },
];

const categories = [
  { id: 'web', name: 'Web Development' },
  { id: 'app', name: 'App Development' },
  { id: 'backend', name: 'Backend & Databases' },
] as const;

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Memoizing categorized skills
  const categorizedSkills = useMemo(() => {
    return categories.map(category => ({
      ...category,
      skills: skills.filter(skill => skill.category === category.id),
    }));
  }, []);

  return (
    <section id="skills" className="py-20" ref={containerRef}>
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="space-y-16">
          {categorizedSkills.map((category, categoryIndex) => (
            <div key={category.id} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => {
                  const delay = (categoryIndex * category.skills.length + index) * 0.05;
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay, duration: 0.5 }}
                      className="group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="card p-4 text-center hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300"
                      >
                        <div className="mb-3 flex justify-center">
                          <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="text-sm font-medium text-gray-800 dark:text-white">
                          {skill.name}
                        </h4>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
