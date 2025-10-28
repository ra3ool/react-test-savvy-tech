import { TheHeader } from '@/components/header';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex flex-col flex-1 bg-gray-50 text-gray-900">
      <TheHeader
        className="h-14 shrink-0 sticky top-0 bg-background"
        title="List Items Project"
      />
      <section className="flex flex-1 self-center w-full max-w-4xl p-4">
        {children}
      </section>
    </main>
  );
}
