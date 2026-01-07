import { getAllGradeClass } from '@/lib/api/gradeClass';
import AddSiswaView from '@/pages/admin/AddSiswaView';

export default async function AddSiswaPage() {
  const dataKelas = await getAllGradeClass();

  return <AddSiswaView gradeClassList={dataKelas} />;
}
