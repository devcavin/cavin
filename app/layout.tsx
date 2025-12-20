/**
 * © 2025 Cavin
 * MIT License – https://opensource.org/licenses/MIT
 * Repo: https://github.com/devcavin/cavin
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteMetadata } from '@/data/content';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: 'Cavin Larry | Full Stack Developer & IT Professional',
  description: 'Portfolio of Cavin Larry - Full Stack Developer specializing in Kotlin, React, Next.js, and DevOps. Network Technician with expertise in system administration and infrastructure management.',
  keywords: [
    'Cavin Larry',
    'Full Stack Developer',
    'Kotlin Developer',
    'React Developer',
    'DevOps Engineer',
    'Network Technician',
    'IT Professional',
    'Spring Boot',
    'Ktor',
    'Next.js',
    'Portfolio',
    'Kenya Developer',
  ],
  authors: [{ name: 'Cavin Larry', url: 'https://devcavin.vercel.app' }],
  creator: 'Cavin Larry',
  publisher: 'Cavin Larry',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.siteUrl,
    title: 'Cavin Larry | Full Stack Developer & IT Professional',
    description: 'Full Stack Developer specializing in Kotlin, Spring, Ktor React, and DevOps. Building scalable systems and maintaining robust infrastructure.',
    siteName: 'Cavin Larry Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cavin Larry - Full Stack Developer & IT Professional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cavin Larry | Full Stack Developer',
    description: 'Full Stack Developer specializing in Kotlin, Spring, Ktor, React, and DevOps',
    images: ['/og-image.png'],
    creator: '@devcavin',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-slate-400 antialiased`}>
        {children}
      </body>
    </html>
  );
}
