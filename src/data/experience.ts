import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Speridian Technologies',
    role: 'Lead React Engineer',
    location: 'India',
    startDate: new Date('2020-01-01'),
    current: true,
    description:
      'Leading the frontend development team in building scalable and performant React applications. Architecting complex web solutions using modern technologies and best practices.',
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Redux',
      'Next.js',
      'GraphQL',
      'REST APIs',
      'Git',
      'Webpack',
      'Jest',
      'React Testing Library',
    ],
    achievements: [
      'Led migration of legacy codebase to modern React with TypeScript',
      'Improved application performance by 40% through code optimization and lazy loading',
      'Mentored junior developers and established coding standards for the team',
      'Implemented comprehensive testing strategy increasing code coverage to 85%',
      'Architected reusable component library used across multiple projects',
    ],
  },
  {
    id: '2',
    company: 'Previous Organization',
    role: 'Senior Frontend Developer',
    location: 'India',
    startDate: new Date('2017-06-01'),
    endDate: new Date('2019-12-31'),
    current: false,
    description:
      'Developed and maintained multiple client-facing web applications with focus on user experience and performance.',
    technologies: [
      'React',
      'JavaScript',
      'CSS3',
      'HTML5',
      'Redux',
      'Node.js',
      'MongoDB',
      'Git',
    ],
    achievements: [
      'Built responsive web applications serving over 100K users',
      'Collaborated with UX designers to implement pixel-perfect interfaces',
      'Optimized frontend builds reducing load time by 50%',
      'Contributed to open-source React ecosystem',
    ],
  },
];
