import InformationCard from '@/components/fragments/cards/InformationCard';

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
    total: 1000,
    title: 'Guru',
  },
  {
    total: 20,
    title: 'Kelas',
  },
  {
    total: 30,
    title: 'Mata Pelajaran',
  },
];

export default function DashboardView() {
  return (
    <div className="flex flex-col py-2">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {dummyData.map((data, index) => (
          <InformationCard key={index} total={data.total} title={data.title} />
        ))}
      </div>

      <div className="flex flex-col mt-8">
        <h2 className="text-xl font-semibold text-primary lg:text-2xl">
          Riwayat Aktivitas
        </h2>
        <table className="table-fixed border-collapse mt-4 w-full max-w-[1000px] mx-auto">
          <thead>
            <tr className="bg-secondary text-white font-semibold text-sm md:text-base">
              <th className="border border-slate-300 p-2 w-16">No</th>
              <th className="border border-slate-300 p-2">Aktivitas</th>
              <th className="border border-slate-300 p-2">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs md:text-sm">
              <td className=" text-primary text-center border border-slate-300 p-2">
                1
              </td>
              <td className=" text-primary border border-slate-300 p-2">
                Admin menambahkan data siswa baru
              </td>
              <td className=" text-primary border border-slate-300 p-2">
                21 Oktober 2025
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
