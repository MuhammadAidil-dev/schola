import InformationCard from '@/components/fragments/cards/InformationCard';
import { formattedDate } from '@/utils/utils';

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

const dummyActivities = [
  {
    id: 1,
    activity: 'Login ke sistem',
    date: '2025-10-9',
  },
  {
    id: 2,
    activity: 'Menambahkan data siswa',
    date: '2025-11-11',
  },
  {
    id: 3,
    activity: 'Mengubah data kelas',
    date: '2025-12-12',
  },
  {
    id: 4,
    activity: 'Menghapus data mata pelajaran',
    date: '2025-12-13',
  },
  {
    id: 5,
    activity: 'Logout dari sistem',
    date: '2025-12-13',
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
            {dummyActivities.map((data, index) => {
              return (
                <tr key={index} className="text-xs md:text-sm">
                  <td className=" text-primary text-center border border-slate-300 p-2">
                    {data.id}
                  </td>
                  <td className=" text-primary border border-slate-300 p-2">
                    {data.activity}
                  </td>
                  <td className=" text-primary border border-slate-300 p-2 text-center">
                    {formattedDate(data.date)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
