'use client';

import InformationCard from '@/components/fragments/cards/InformationCard';
import Link from 'next/link';
import { FaFilter, FaPlus, FaSearch } from 'react-icons/fa';

type Dummy = {
  total: number;
  title: string;
};

const dummyData: Dummy[] = [
  {
    total: 5,
    title: 'Guru',
  },
];

const dummyTeachers = [
  {
    id: 1,
    nip: '198705122010011001',
    name: 'Ahmad Fauzi, S.Pd',
    email: 'ahmad.fauzi@gmail.com',
    phone: '081234567890',
    status: 'Aktif',
  },
  {
    id: 2,
    nip: '198906222011021002',
    name: 'Siti Aminah, S.Pd',
    email: 'siti.aminah@gmail.com',
    phone: '082198765432',
    status: 'Aktif',
  },
  {
    id: 3,
    nip: '197812102009031003',
    name: 'Budi Santoso, M.Pd',
    email: 'budi.santoso@gmail.com',
    phone: '085312345678',
    status: 'Tidak Aktif',
  },
  {
    id: 4,
    nip: '199001152013041004',
    name: 'Rina Lestari, S.Pd',
    email: 'rina.lestari@gmail.com',
    phone: '081998877665',
    status: 'Aktif',
  },
  {
    id: 5,
    nip: '198305182008051005',
    name: 'Dedi Kurniawan, M.Pd',
    email: 'dedi.kurniawan@gmail.com',
    phone: '087712345678',
    status: 'Tidak Aktif',
  },
];

export default function ManagementGuruView() {
  return (
    <div className="flex flex-col py-2">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {dummyData.map((data, index) => (
          <InformationCard key={index} title={data.title} total={data.total} />
        ))}
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex justify-between gap-4">
          <div className="flex items-center bg-white shadow-sm rounded-sm p-4 w-full lg:max-w-[50%]">
            <label htmlFor="searchInput">
              <FaSearch />
            </label>
            <input
              type="text"
              id="searchInput"
              className="focus:outline-none px-2 text-xs text-primary w-full"
              placeholder="Cari data guru berdasarkan nip, nama..."
            />
          </div>

          <div className="flex items-center gap-4 text-white">
            <Link
              href="/admin/management-data/guru/add"
              className="cursor-pointer bg-primary flex justify-center items-center rounded-sm p-2"
            >
              <FaPlus />
            </Link>
            <div className="cursor-pointer bg-secondary flex justify-center items-center rounded-sm p-2">
              <FaFilter />
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="table-auto border-collapse mt-4 w-full mx-auto">
            <thead>
              <tr className="bg-secondary text-white font-semibold text-sm md:text-base">
                <th className="border border-slate-300 p-2 w-16">No</th>
                <th className="border border-slate-300 p-2">NIP</th>
                <th className="border border-slate-300 p-2">NAMA GURU</th>
                <th className="border border-slate-300 p-2">EMAIL</th>
                <th className="border border-slate-300 p-2">NOMOR HP</th>
                <th className="border border-slate-300 p-2">STATUS</th>
                <th className="border border-slate-300 p-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {dummyTeachers.map((data, index) => {
                return (
                  <tr key={index} className="text-xs md:text-sm">
                    <td className=" text-primary text-center border border-slate-300 p-2">
                      {data.id}
                    </td>
                    <td className=" text-primary border border-slate-300 p-2">
                      {data.nip}
                    </td>
                    <td className=" text-primary border border-slate-300 p-2">
                      {data.name}
                    </td>
                    <td className=" text-primary border border-slate-300 p-2">
                      {data.email}
                    </td>
                    <td className=" text-primary border border-slate-300 p-2">
                      {data.phone}
                    </td>
                    <td
                      className={`font-bold border border-slate-300 p-2 text-center ${
                        data.status === 'Aktif'
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {data.status}
                    </td>
                    <td className=" text-primary border border-slate-300 p-2 flex justify-center items-center">
                      <button className="bg-primary font-semibold text-xs rounded-sm cursor-pointer w-32 text-white py-2 px-4">
                        Detail
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
