import { SocialLink, ContactInfo } from '@/types';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/premal-katigar/',
    icon: FaLinkedin,
    label: 'Connect on LinkedIn',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/ipremalk/',
    icon: FaGithub,
    label: 'View GitHub Profile',
  },
  {
    platform: 'Email',
    url: 'mailto:ipremalk@gmail.com',
    icon: FaEnvelope,
    label: 'Send Email',
  },
  {
    platform: 'Phone',
    url: 'tel:+918320412584',
    icon: FaPhone,
    label: 'Call Me',
  },
];

export const contactInfo: ContactInfo = {
  email: 'ipremalk@gmail.com',
  phone: '+91-83204-12584',
  location: 'India',
};
