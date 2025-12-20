'use client';

import { checkPathname } from '@/utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaChevronDown, FaListUl } from 'react-icons/fa';
import { IoGridOutline } from 'react-icons/io5';

export default function AdminSidebar() {
  const pathname = usePathname();
  const [linkUrl, setLinkUrl] = useState<string>('');
  const [linkListOpen, setLinkListOpen] = useState(false);

  console.log('pathname', pathname);
  console.log('linkUrl', linkUrl);

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
      <div className="flex flex-col gap-4 mt-4">
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

        <div className="flex flex-col">
          <div
            onClick={() => setLinkListOpen(!linkListOpen)}
            className={`flex items-center font-semibold  text-sm gap-2 py-2 px-2 bg-primary rounded-sm ${checkPathname(
              linkUrl,
              pathname
            )} cursor-pointer`}
          >
            <FaListUl size={20} color="primary" />
            <span>Management Data</span>
            <FaChevronDown
              className={`ml-auto ${
                linkListOpen ? 'rotate-180' : ''
              } transition-transform duration-100`}
            />
          </div>

          <ul
            className={`flex flex-col px-9 gap-4 mt-2 transform transition-transform origin-top ${
              linkListOpen ? 'scale-y-100' : 'scale-y-0'
            } duration-150 ease-in-out`}
          >
            <li
              onClick={() => setLinkUrl('/admin/management-data/siswa')}
              className={`text-sm font-semibold  ${
                pathname === '/admin/management-data/siswa'
                  ? 'text-secondary'
                  : 'text-primary'
              }`}
            >
              <Link href="/admin/management-data/siswa">Siswa</Link>
            </li>
            <li
              onClick={() => setLinkUrl('/admin/management-data/guru')}
              className={`text-sm font-semibold  ${
                pathname === '/admin/management-data/guru'
                  ? 'text-secondary'
                  : 'text-primary'
              }`}
            >
              <Link href="/admin/management-data/guru">Guru</Link>
            </li>
            <li
              onClick={() => setLinkUrl('/admin/management-data/kelas')}
              className={`text-sm font-semibold  ${
                pathname === '/admin/management-data/kelas'
                  ? 'text-secondary'
                  : 'text-primary'
              }`}
            >
              <Link href="/admin/management-data/kelas">Kelas</Link>
            </li>
            <li
              onClick={() =>
                setLinkUrl('/admin/management-data/mata-pelajaran')
              }
              className={`text-sm font-semibold  ${
                pathname === '/admin/management-data/mata-pelajaran'
                  ? 'text-secondary'
                  : 'text-primary'
              }`}
            >
              <Link href="/admin/management-data/mata-pelajaran">
                Mata Pelajaran
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
