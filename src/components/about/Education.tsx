import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';
import Card from '@/components/common/Card';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const educationData = [
  {
    id: '1',
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'University Name',
    year: '2012 - 2016',
    description: 'Focused on software engineering, algorithms, and data structures',
  },
  {
    id: '2',
    degree: 'Professional Certifications',
    institution: 'Various Platforms',
    year: '2017 - Present',
    description: 'React, TypeScript, AWS, and other modern web technologies',
  },
];

const Education = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Academic background and continuous learning
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {educationData.map((edu) => (
            <motion.div key={edu.id} variants={fadeInUp}>
              <Card className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <HiAcademicCap className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{edu.year}</p>
                    <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
