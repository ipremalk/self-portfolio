import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { formatDate } from '@/utils/helpers';
import Card from '@/components/common/Card';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { HiCheckCircle } from 'react-icons/hi';

const Timeline = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Career Timeline
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey and key milestones
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={fadeInUp}>
              <Card className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-48 flex-shrink-0">
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {formatDate(exp.startDate)} -{' '}
                      {exp.current ? 'Present' : formatDate(exp.endDate as Date)}
                    </div>
                    {exp.current && (
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <HiCheckCircle
                            className="text-green-500 flex-shrink-0 mt-0.5"
                            size={18}
                          />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
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

export default Timeline;
