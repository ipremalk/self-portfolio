import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiGit,
  SiJest,
  SiDocker,
} from 'react-icons/si';
import Card from '@/components/common/Card';
import { skills } from '@/data/skills';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const iconMap: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'JavaScript (ES6+)': SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  GraphQL: SiGraphql,
  MongoDB: SiMongodb,
  'Git / GitHub': SiGit,
  Jest: SiJest,
  Docker: SiDocker,
};

const Skills = () => {
  const topSkills = skills.filter((skill) => skill.proficiency >= 80);

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks for building scalable applications
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
        >
          {topSkills.map((skill) => {
            const Icon = iconMap[skill.name];
            return (
              <motion.div key={skill.name} variants={fadeInUp}>
                <Card hover className="p-6">
                  <div className="flex items-start space-x-4">
                    {Icon && (
                      <div className="flex-shrink-0">
                        <Icon
                          className="text-primary-600 dark:text-primary-400"
                          size={32}
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h3>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary-600 to-accent-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 capitalize">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
