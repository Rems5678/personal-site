import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Devon Vaccarino, Frontend Software Developer',
  description:
    'Skilled in creating websites, web apps, and design systems with React, Next.js, and Typescript/Javascript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={[inter.variable, outfit.variable].join(' ')}>
        {children}
      </body>
    </html>
  );
}
