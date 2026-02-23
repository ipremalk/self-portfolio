import { IconType } from 'react-icons';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconType;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location?: string;
}
