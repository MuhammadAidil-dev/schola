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
    title: 'Kelas',
  },
];

const dummyClasses = [
  {
    id: 1,
    className: 'X IPA 1',
    classLevel: 'X',
    studyProgram: 'IPA',
    description: 'Kelas X jurusan IPA dengan fokus dasar sains',
  },
  {
    id: 2,
    className: 'X IPA 2',
    classLevel: 'X',
    studyProgram: 'IPA',
    description: 'Kelas X IPA lanjutan',
  },
  {
    id: 3,
    className: 'XI IPA 1',
    classLevel: 'XI',
    studyProgram: 'IPA',
    description: 'Kelas XI IPA untuk penguatan materi sains',
  },
  {
    id: 4,
    className: 'XI IPS 1',
    classLevel: 'XI',
    studyProgram: 'IPS',
    description: 'Kelas XI IPS dengan fokus ilmu sosial',
  },
  {
    id: 5,
    className: 'XII IPA 1',
    classLevel: 'XII',
    studyProgram: 'IPA',
    description: 'Kelas XII IPA persiapan ujian akhir',
  },
  {
    id: 6,
    className: 'XII IPS 1',
    classLevel: 'XII',
    studyProgram: 'IPS',
    description: 'Kelas XII IPS persiapan kelulusan',
  },
];

export default function ManagementKelasView() {
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
              placeholder="Cari data kelas berdasarkan nama, studi program..."
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
                <th className="border border-slate-300 p-2">NAMA KELAS</th>
                <th className="border border-slate-300 p-2">TINGKAT KELAS</th>
                <th className="border border-slate-300 p-2">PROGRAM STUDI</th>
                <th className="border border-slate-300 p-2">DESKRIPSI</th>
                <th className="border border-slate-300 p-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {dummyClasses.map((data, index) => {
                return (
                  <tr key={index} className="text-xs md:text-sm">
                    <td className=" text-primary text-center border border-slate-300 p-2">
                      {data.id}
                    </td>
                    <td className=" text-primary text-center border border-slate-300 p-2">
                      {data.className}
                    </td>
                    <td className=" text-primary border text-center border-slate-300 p-2">
                      {data.classLevel}
                    </td>
                    <td className=" text-primary border text-center border-slate-300 p-2">
                      {data.studyProgram}
                    </td>
                    <td className=" text-primary border border-slate-300 p-2">
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
