import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { ContactFormData } from '@/types';
import Button from '@/components/common/Button';
import { fadeInUp } from '@/utils/animations';

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form data:', data);

      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Send a Message</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Have a question or want to work together? Fill out the form below!
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Subject *
          </label>
          <input
            id="subject"
            type="text"
            {...register('subject', { required: 'Subject is required' })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
            })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            placeholder="Your message..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg"
          >
            <HiCheckCircle size={20} />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg"
          >
            <HiXCircle size={20} />
            <span>Something went wrong. Please try again or email me directly.</span>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
