'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  if (isLandingPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div className="flex-1 flex flex-col">
        <Navbar onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default ClientLayout;
