import { getAllStudents } from '@/lib/api/studentApi';
import ManagementSiswaView from '@/pages/admin/ManagementSiswaView';

export default async function ManagementSiswaPage() {
  const studentList = await getAllStudents();

  return <ManagementSiswaView studentList={studentList} />;
}
