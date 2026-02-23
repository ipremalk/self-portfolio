import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { contactInfo } from '@/data/socialLinks';
import Card from '@/components/common/Card';
import { fadeInUp } from '@/utils/animations';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: HiMail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: contactInfo.location,
      href: null,
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Information
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Feel free to reach out through any of these channels
        </p>
      </div>

      <div className="space-y-4">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Icon className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            </div>
          );

          if (item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                className="block"
              >
                <Card hover className="p-4">
                  {content}
                </Card>
              </a>
            );
          }

          return (
            <Card key={item.label} className="p-4">
              {content}
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
