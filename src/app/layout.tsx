import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Vishnu E J | Product & Performance Analyst | Data Scientist',
  description:
    'Portfolio of Vishnu E J — Product & Performance Analyst with a Master’s in Data Science. Specializing in Funnel Optimization, $850K+ Budget Modeling, Customized LPs & Self-Serve Experimentation.',
  keywords: [
    'Vishnu E J',
    'Product Analyst',
    'Performance Marketing',
    'Data Scientist',
    'Growth Analytics',
    'Great Learning',
    'MSc Data Science',
    'Funnel Optimization',
    'AI Automation',
    'RAG',
  ],
  authors: [{ name: 'Vishnu E J' }],
  openGraph: {
    title: 'Vishnu E J — Product & Performance Analyst | Data Scientist',
    description:
      'Explore projects, career milestones, $850K+ ad budget modeling, and interactive growth simulators.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} scroll-smooth`}>
      <body className={`${dmSans.className} min-h-screen bg-[#f4f4f5] text-[#09090b] antialiased`}>
        {children}
      </body>
    </html>
  );
}
