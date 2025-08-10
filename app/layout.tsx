import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import TanStackProvider from '../components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
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
  title: 'NextJS Homework - 7',
  description: 'NoteHub - manage your notes',
};

export default function RootLayout({
  children,
  preview,
}: Readonly<{
  children: React.ReactNode;
  preview: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {preview}
          </main>
          <div id="note-modal-root"></div>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
