import AdminNavbar from '@/components/fragments/navbar/admin/AdminNavbar';
import AdminSidebar from '@/components/fragments/navbar/admin/AdminSidebar';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Scola | Admin',
  description: 'Scola admin page',
  icons: '/assets/icons/main-logo.svg',
};

export default function AdminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      {/* only on mobile */}
      <AdminNavbar />
      {/* only on tablet-desktop */}
      <AdminSidebar />
      <main className="pt-24 px-[5%] md:ml-[250px] md:pt-12 md:px-8">
        {children}
      </main>
      ;
    </>
  );
}
