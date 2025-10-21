'use client';

import InformationCard from '@/components/fragments/cards/InformationCard';
import { FaFilter, FaPlus, FaSearch } from 'react-icons/fa';

type Dummy = {
  total: number;
  title: string;
};

const dummyData: Dummy[] = [
  {
    total: 1000,
    title: 'Siswa',
  },
  {
    total: 500,
    title: 'Laki-Laki',
  },
  {
    total: 500,
    title: 'Perempuan',
  },
];

export default function ManagementSiswaView() {
  return (
    <div className="flex flex-col py-2">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {dummyData.map((data, index) => (
          <InformationCard key={index} title={data.title} total={data.total} />
        ))}
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex justify-between">
          <div className="flex items-center bg-white shadow-sm rounded-sm p-4 w-full lg:max-w-[50%]">
            <label htmlFor="searchInput">
              <FaSearch />
            </label>
            <input
              type="text"
              id="searchInput"
              className="focus:outline-none px-2 text-xs text-primary w-full"
              placeholder="Cari data siswa berdasarkan nisn, nama..."
            />
          </div>

          <div className="flex items-center gap-4 text-white">
            <div className="cursor-pointer bg-primary flex justify-center items-center rounded-sm p-2">
              <FaPlus />
            </div>
            <div className="cursor-pointer bg-secondary flex justify-center items-center rounded-sm p-2">
              <FaFilter />
            </div>
          </div>
        </div>

        <table className="table-fixed border-collapse mt-4 w-full mx-auto">
          <thead>
            <tr className="bg-secondary text-white font-semibold text-sm md:text-base">
              <th className="border border-slate-300 p-2 w-16">No</th>
              <th className="border border-slate-300 p-2">NISN</th>
              <th className="border border-slate-300 p-2">NAMA SISWA</th>
              <th className="border border-slate-300 p-2">TAHUN MASUK</th>
              <th className="border border-slate-300 p-2">KELAS</th>
              <th className="border border-slate-300 p-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs md:text-sm">
              <td className=" text-primary text-center border border-slate-300 p-2">
                1
              </td>
              <td className=" text-primary border border-slate-300 p-2">
                1010101010
              </td>
              <td className=" text-primary border border-slate-300 p-2">
                Muhammad Aidil
              </td>
              <td className=" text-primary border border-slate-300 p-2">
                2022
              </td>
              <td className=" text-primary border border-slate-300 p-2">
                IPA 2
              </td>
              <td className=" text-primary border border-slate-300 p-2 flex justify-center items-center">
                <button className="bg-primary font-semibold text-xs rounded-sm cursor-pointer w-32 text-white py-2 px-4">
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
