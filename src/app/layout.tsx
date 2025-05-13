import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';

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
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?display=swap&family=Manrope%3Awght%40400%3B500%3B700%3B800&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
          />
        </head>
        <body style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
