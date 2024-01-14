import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MadeInCo',
  description: 'What is MadeInCo?',
  keywords: ['MadeInCo', 'Colombia', 'About'],
};

const AboutPage = () => <span className='text-7xl'>About Page</span>;

export default AboutPage;
