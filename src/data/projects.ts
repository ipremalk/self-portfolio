import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Enterprise Dashboard Platform',
    description:
      'A comprehensive dashboard solution for enterprise clients with real-time data visualization, advanced filtering, and export capabilities. Built with React, TypeScript, and Tailwind CSS.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'React Query'],
    githubUrl: 'https://github.com/ipremalk',
  },
  {
    id: '2',
    title: 'E-Commerce Application',
    description:
      'Full-featured e-commerce platform with product catalog, shopping cart, payment integration, and order management. Includes admin panel for inventory management.',
    technologies: ['Next.js', 'TypeScript', 'Redux', 'Stripe API', 'MongoDB'],
    githubUrl: 'https://github.com/ipremalk',
  },
  {
    id: '3',
    title: 'Component Library',
    description:
      'Reusable React component library with comprehensive documentation, built using TypeScript and Storybook. Published as npm package for internal team use.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Rollup', 'CSS Modules'],
    githubUrl: 'https://github.com/ipremalk',
  },
  {
    id: '4',
    title: 'Real-time Chat Application',
    description:
      'WebSocket-based real-time messaging application with group chats, file sharing, and message notifications. Features responsive design for mobile and desktop.',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/ipremalk',
  },
];
