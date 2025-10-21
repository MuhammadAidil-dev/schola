'use client';

import { checkPathname } from '@/utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoGridOutline } from 'react-icons/io5';

export default function AdminNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const closeSidebar = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest('header') && !target.closest('aside')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', closeSidebar);

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 py-4 px-[5%] bg-white shadow-sm z-50 md:hidden">
      <nav className="flex justify-between items-center">
        <div onClick={toggleSidebar} className="cursor-pointer">
          <FiMenu size={20} color="black" />
        </div>
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-black text-xl">Scola</h1>
          <img
            src="/assets/icons/main-logo.svg"
            alt="logo scola"
            className="w-10 h-10"
          />
        </div>
      </nav>
      <aside
        className={`${
          isSidebarOpen ? 'left-0' : '-left-full'
        } bg-white w-[200px] absolute top-full min-h-screen shadow-sm transition-all duration-150 ease-in-out py-4`}
      >
        <div className="flex flex-col p-4">
          <Link
            href="/admin"
            className={`flex items-center font-semibold  text-sm gap-2 py-2 px-2 bg-primary rounded-sm ${checkPathname(
              '/admin',
              pathname
            )} cursor-pointer`}
          >
            <IoGridOutline size={20} color="primary" />
            <span>Dashboard</span>
          </Link>
        </div>
      </aside>
    </header>
  );
}
