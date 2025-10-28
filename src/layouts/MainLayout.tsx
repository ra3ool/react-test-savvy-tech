import { TheHeader } from '@/components/header';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex flex-col flex-1 bg-gray-50 text-gray-900">
      <TheHeader className="h-14 shrink-0" title="List Items Project" />
      <section className="flex-1 p-4">{children}</section>
    </main>
  );
}
