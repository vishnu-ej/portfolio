import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
