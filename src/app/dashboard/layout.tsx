import { ReactNode } from 'react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const { userId } = await auth();

  if (!userId) {
    redirect('/auth/sign-in');
  }

  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">Dashboard Header</header>
      <aside className="dashboard-sidebar">Sidebar</aside>
      <main className="dashboard-content">{children}</main>
    </div>
  );
}
