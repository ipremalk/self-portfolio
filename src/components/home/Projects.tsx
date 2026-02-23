import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { projects } from '@/data/projects';
import Card from '@/components/common/Card';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Projects = () => {
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and experience
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card hover className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <HiCode className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <SiGithub size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="View live project"
                      >
                        <HiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
