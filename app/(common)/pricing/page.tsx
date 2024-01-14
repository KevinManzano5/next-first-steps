import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing MadeInCo',
  description: 'Pricing of MadeInCo?',
  keywords: ['MadeInCo', 'Colombia', 'Pricing'],
};

const PricingPage = () => {
  return (
    <>
      <span className='text-7xl'>Pricing Page</span>
    </>
  );
};

export default PricingPage;
