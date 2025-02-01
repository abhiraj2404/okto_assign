"use client";
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';


const SearchDialog = dynamic(() => import('@/components/search')); // lazy load

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{
        SearchDialog
      }}>{children}</RootProvider>
      </body>
    </html>
  );
}
