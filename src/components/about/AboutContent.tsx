import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import Button from '@/components/common/Button';
import { slideInLeft, slideInRight } from '@/utils/animations';

const AboutContent = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="order-2 md:order-1"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-primary-600 dark:text-primary-400">
                  PK
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-20" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-20" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="order-1 md:order-2"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
              <p>
                I'm Premal Katigar, a Lead React Engineer at Speridian Technologies with a passion
                for creating exceptional web experiences. With expertise in modern frontend
                technologies, I specialize in building scalable, performant, and user-friendly
                applications.
              </p>

              <p>
                My journey in web development has been driven by a commitment to writing clean,
                maintainable code and staying current with the latest industry trends. I believe in
                the power of TypeScript for type safety, React for component-driven development, and
                Tailwind CSS for rapid UI development.
              </p>

              <p>
                When I'm not coding, I enjoy contributing to open-source projects, writing technical
                blog posts to share knowledge with the community, and mentoring junior developers to
                help them grow in their careers.
              </p>

              <p>
                I'm always excited to work on challenging projects that push the boundaries of
                what's possible on the web. Let's build something amazing together!
              </p>
            </div>

            <div className="mt-8">
              <a href="/resume.pdf" download>
                <Button size="lg" className="group">
                  Download Resume
                  <HiDownload
                    className="ml-2 group-hover:translate-y-1 transition-transform"
                    size={20}
                  />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
