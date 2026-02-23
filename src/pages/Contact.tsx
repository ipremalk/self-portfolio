import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import SocialLinks from '@/components/contact/SocialLinks';

const Contact = () => {
  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <div>
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
