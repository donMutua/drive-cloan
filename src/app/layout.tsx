import type React from 'react';
import type { Metadata } from 'next';
import { Manrope, Noto_Sans } from 'next/font/google'; // Import next/font
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
  variable: '--font-manrope',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans',
});

export const metadata: Metadata = {
  title: 'Cloud.io - A new home for your documents',
  description: 'Store, share, and collaborate on documents, spreadsheets, and presentations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${manrope.variable} ${notoSans.variable}`}>
        <body style={{ fontFamily: 'var(--font-manrope), var(--font-noto-sans), sans-serif' }}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
