import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering React Performance Optimization',
    excerpt:
      'Learn advanced techniques to optimize React applications for better performance, including code splitting, memoization, and lazy loading.',
    content: `
# Mastering React Performance Optimization

React is a powerful library for building user interfaces, but as applications grow, performance can become a concern. In this comprehensive guide, we'll explore proven techniques to optimize your React applications.

## 1. Code Splitting

Code splitting is one of the most effective ways to reduce initial bundle size. React.lazy() and Suspense make this incredibly easy:

\`\`\`jsx
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

## 2. Memoization with useMemo and useCallback

Prevent unnecessary re-renders by memoizing expensive calculations and callback functions:

\`\`\`jsx
const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
\`\`\`

## 3. React.memo for Component Memoization

Wrap functional components with React.memo to prevent re-renders when props haven't changed:

\`\`\`jsx
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
\`\`\`

## 4. Virtualization for Long Lists

Use libraries like react-window or react-virtualized to render only visible items in long lists.

## Conclusion

Performance optimization is an ongoing process. Always measure before optimizing, and focus on the bottlenecks that provide the most impact for your users.
    `,
    category: 'React',
    tags: ['React', 'Performance', 'Optimization', 'Best Practices'],
    publishedDate: new Date('2024-01-15'),
    readTime: 8,
    author: 'Premal Katigar',
  },
  {
    id: '2',
    title: 'TypeScript Best Practices for React Developers',
    excerpt:
      'Discover how to leverage TypeScript effectively in React projects to catch bugs early and improve developer experience.',
    content: `
# TypeScript Best Practices for React Developers

TypeScript has become the de facto standard for modern React development. Let's explore best practices that will make your code more maintainable and bug-free.

## 1. Proper Component Typing

Always type your component props explicitly:

\`\`\`tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', disabled = false }) => {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
};
\`\`\`

## 2. Use Generics for Reusable Components

Create flexible, type-safe components with generics:

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <>{items.map(renderItem)}</>;
}
\`\`\`

## 3. Leverage Union Types

Use union types for component variants and states:

\`\`\`tsx
type Status = 'idle' | 'loading' | 'success' | 'error';
\`\`\`

## 4. Strict Mode Configuration

Enable strict mode in tsconfig.json for maximum type safety.

## Conclusion

TypeScript is a powerful tool that, when used correctly, can dramatically improve code quality and developer productivity.
    `,
    category: 'TypeScript',
    tags: ['TypeScript', 'React', 'Best Practices', 'Type Safety'],
    publishedDate: new Date('2024-02-01'),
    readTime: 6,
    author: 'Premal Katigar',
  },
  {
    id: '3',
    title: 'Building Accessible React Components',
    excerpt:
      'A practical guide to creating accessible React components that work for everyone, including users with disabilities.',
    content: `
# Building Accessible React Components

Accessibility should be a core consideration in every React application. Let's explore how to build components that work for everyone.

## 1. Semantic HTML

Always use semantic HTML elements:

\`\`\`jsx
// Good
<button onClick={handleClick}>Click me</button>

// Bad
<div onClick={handleClick}>Click me</div>
\`\`\`

## 2. ARIA Attributes

Use ARIA attributes when semantic HTML isn't sufficient:

\`\`\`jsx
<button aria-label="Close dialog" onClick={onClose}>
  <CloseIcon />
</button>
\`\`\`

## 3. Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

\`\`\`jsx
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick();
  }
};
\`\`\`

## 4. Focus Management

Manage focus properly, especially in modals and dynamic content:

\`\`\`jsx
const dialogRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (isOpen) {
    dialogRef.current?.focus();
  }
}, [isOpen]);
\`\`\`

## Conclusion

Accessibility is not optional. By following these practices, you create better experiences for all users.
    `,
    category: 'Accessibility',
    tags: ['Accessibility', 'React', 'A11y', 'Best Practices'],
    publishedDate: new Date('2024-02-20'),
    readTime: 7,
    author: 'Premal Katigar',
  },
  {
    id: '4',
    title: 'Modern State Management in React',
    excerpt:
      'Explore different state management solutions in React, from useState to Redux, and learn when to use each approach.',
    content: `
# Modern State Management in React

State management is a critical aspect of React development. Let's explore modern approaches and when to use them.

## 1. Local State with useState

For simple component-level state:

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## 2. Context API

For sharing state across multiple components without prop drilling:

\`\`\`jsx
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Component />
    </ThemeContext.Provider>
  );
}
\`\`\`

## 3. Zustand

A lightweight state management solution:

\`\`\`jsx
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
\`\`\`

## 4. Redux

For complex applications with extensive state requirements.

## Choosing the Right Solution

- Local state: Component-specific UI state
- Context: Theme, user preferences, authentication
- Zustand/Redux: Complex application state, cross-cutting concerns

## Conclusion

Choose the simplest solution that meets your needs. Don't over-engineer your state management.
    `,
    category: 'React',
    tags: ['React', 'State Management', 'Redux', 'Zustand'],
    publishedDate: new Date('2024-03-05'),
    readTime: 9,
    author: 'Premal Katigar',
  },
  {
    id: '5',
    title: 'Testing React Applications Like a Pro',
    excerpt:
      'Master the art of testing React applications with Jest and React Testing Library for robust, maintainable code.',
    content: `
# Testing React Applications Like a Pro

Comprehensive testing is essential for building reliable React applications. Let's explore effective testing strategies.

## 1. Unit Testing Components

Test components in isolation:

\`\`\`jsx
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="Click me" onClick={() => {}} />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
\`\`\`

## 2. Testing User Interactions

Use userEvent for realistic user interactions:

\`\`\`jsx
import userEvent from '@testing-library/user-event';

test('calls onClick when clicked', async () => {
  const handleClick = jest.fn();
  render(<Button label="Click" onClick={handleClick} />);

  await userEvent.click(screen.getByText('Click'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
\`\`\`

## 3. Testing Async Behavior

Handle asynchronous operations properly:

\`\`\`jsx
test('loads and displays data', async () => {
  render(<UserList />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  const users = await screen.findByText('John Doe');
  expect(users).toBeInTheDocument();
});
\`\`\`

## 4. Integration Tests

Test how components work together.

## 5. E2E Testing with Playwright

Cover critical user flows with end-to-end tests.

## Conclusion

A well-tested application is a maintainable application. Invest time in writing good tests.
    `,
    category: 'Testing',
    tags: ['Testing', 'Jest', 'React Testing Library', 'Playwright'],
    publishedDate: new Date('2024-03-18'),
    readTime: 10,
    author: 'Premal Katigar',
  },
  {
    id: '6',
    title: 'Tailwind CSS: Utility-First Styling in React',
    excerpt:
      'Learn how to build beautiful, responsive user interfaces quickly using Tailwind CSS in your React projects.',
    content: `
# Tailwind CSS: Utility-First Styling in React

Tailwind CSS has revolutionized how we style React applications. Let's explore why it's so popular and how to use it effectively.

## 1. Benefits of Utility-First CSS

- Rapid development with pre-built utilities
- Consistent design system out of the box
- No naming conventions needed
- Excellent tree-shaking for small bundle sizes

## 2. Responsive Design Made Easy

\`\`\`jsx
<div className="
  w-full
  md:w-1/2
  lg:w-1/3
  p-4
  md:p-6
  lg:p-8
">
  Content
</div>
\`\`\`

## 3. Custom Configuration

Extend Tailwind with your design system:

\`\`\`js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
      },
    },
  },
};
\`\`\`

## 4. Component Extraction

Create reusable components to avoid repetition:

\`\`\`jsx
const Card = ({ children }) => (
  <div className="rounded-lg shadow-lg p-6 bg-white">
    {children}
  </div>
);
\`\`\`

## 5. Dark Mode Support

Built-in dark mode with the dark: prefix:

Code example:
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  Content
</div>

## Conclusion

Tailwind CSS enables rapid UI development while maintaining consistency and performance.
    `,
    category: 'CSS',
    tags: ['Tailwind CSS', 'CSS', 'Styling', 'React'],
    publishedDate: new Date('2024-04-02'),
    readTime: 7,
    author: 'Premal Katigar',
  },
];
