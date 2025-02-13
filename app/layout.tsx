import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/utils/cn';
import { Header } from '@/components/ui/Header';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('antialiased flex flex-col h-dvh', inter.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
