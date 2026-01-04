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
    total: 6,
    title: 'Mata Pelajaran',
  },
];

const dummySubjects = [
  {
    id: 1,
    subjectCode: 'MTK-01',
    subjectName: 'Matematika',
    description:
      'Mata pelajaran dasar untuk melatih logika dan kemampuan berhitung',
  },
  {
    id: 2,
    subjectCode: 'BIN-01',
    subjectName: 'Bahasa Indonesia',
    description:
      'Mata pelajaran untuk meningkatkan kemampuan berbahasa dan sastra',
  },
  {
    id: 3,
    subjectCode: 'BIG-01',
    subjectName: 'Bahasa Inggris',
    description: 'Mata pelajaran untuk melatih kemampuan berbahasa Inggris',
  },
  {
    id: 4,
    subjectCode: 'FIS-01',
    subjectName: 'Fisika',
    description: 'Mata pelajaran yang mempelajari gejala alam dan hukum fisika',
  },
  {
    id: 5,
    subjectCode: 'KIM-01',
    subjectName: 'Kimia',
    description: 'Mata pelajaran tentang struktur, sifat, dan reaksi zat',
  },
  {
    id: 6,
    subjectCode: 'BIO-01',
    subjectName: 'Biologi',
    description:
      'Mata pelajaran yang mempelajari makhluk hidup dan lingkungannya',
  },
];

export default function ManagementMataPelajaranView() {
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
              placeholder="Cari data Mata pelajaran berdasarkan nama, kode..."
            />
          </div>

          <div className="flex items-center gap-4 text-white">
            <Link
              href="/admin/management-data/mata-pelajaran/add"
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
                <th className="border border-slate-300 p-2">KODE PELAJARAN</th>
                <th className="border border-slate-300 p-2">NAMA PELAJARAN</th>
                <th className="border border-slate-300 p-2">DESKRIPSI</th>
                <th className="border border-slate-300 p-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {dummySubjects.map((data, index) => {
                return (
                  <tr key={index} className="text-xs md:text-sm">
                    <td className=" text-primary text-center border border-slate-300 p-2">
                      {data.id}
                    </td>
                    <td className=" text-primary text-center border border-slate-300 p-2">
                      {data.subjectCode}
                    </td>
                    <td className=" text-primary border text-center border-slate-300 p-2">
                      {data.subjectName}
                    </td>
                    <td className=" text-primary border text-center border-slate-300 p-2">
                      {data.description}
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
