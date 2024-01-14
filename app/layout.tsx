import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'First Steps',
  description: 'Created with love by Madeinco team',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
