import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Resilient Human Collective - Building Places Where People and Planet Thrive',
  description: 'A practical network for resilient living—connecting people, places, and skills through community organizing, regenerative design, and shared learning.',
  keywords: 'resilient communities, sustainable living, community organizing, regenerative design, skill sharing',
  authors: [{ name: 'Resilient Human Collective' }],
  openGraph: {
    title: 'Resilient Human Collective',
    description: 'Building places where people and planet thrive',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}