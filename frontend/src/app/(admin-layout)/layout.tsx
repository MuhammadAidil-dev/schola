import AdminNavbar from '@/components/fragments/navbar/admin/AdminNavbar';
import AdminSidebar from '@/components/fragments/navbar/admin/AdminSidebar';
import { ReactNode } from 'react';

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
