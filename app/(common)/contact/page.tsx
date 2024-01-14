import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact MadeInCo',
  description: 'Contact with MadeInCo?',
  keywords: ['MadeInCo', 'Colombia', 'Contact'],
};

const ContactPage = () => {
  return (
    <>
      <span className='text-7xl'>Contact Page</span>
    </>
  );
};

export default ContactPage;
