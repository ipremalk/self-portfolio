import { motion } from 'framer-motion';
import { HiOfficeBuilding, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { experiences } from '@/data/experience';
import { formatDate, getDuration } from '@/utils/helpers';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/utils/animations';
import Card from '@/components/common/Card';

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in software engineering and the impact I've made
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200 dark:bg-primary-900" />

          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-12 ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                  <Card className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <HiOfficeBuilding
                        className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1"
                        size={24}
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <HiCalendar size={16} />
                        <span>
                          {formatDate(exp.startDate)} -{' '}
                          {exp.current ? 'Present' : formatDate(exp.endDate as Date)}
                        </span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <HiLocationMarker size={16} />
                          <span>{exp.location}</span>
                        </div>
                      )}
                      <span className="text-gray-500">
                        ({getDuration(exp.startDate, exp.endDate)})
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-950" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
