'use client';

import { checkPathname } from '@/utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoGridOutline } from 'react-icons/io5';

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed left-0 bg-white w-[250px] min-h-screen shadow-sm transition-all duration-150 ease-in-out py-4 hidden md:flex flex-col p-4 z-50`}
    >
      <div className="flex items-center pb-4 gap-4 border-b-2 border-b-slate-200">
        <img
          src="/assets/icons/main-logo.svg"
          alt="logo scola"
          className="w-12 h-12"
        />
        <h1 className="font-bold text-black text-2xl">Scola</h1>
      </div>
      <div className="flex flex-col mt-4">
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
  );
}
