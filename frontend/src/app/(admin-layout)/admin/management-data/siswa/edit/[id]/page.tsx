import { getAllGradeClass } from '@/lib/api/gradeClass';
import { getStudentById } from '@/lib/api/studentApi';
import EditStudentView from '@/pages/student/EditStudentView';

type PageProps = {
  params: {
    id: string;
  };
};

export default async function EditSiswaPage({ params }: PageProps) {
  const { id } = params;

  const student = await getStudentById({ id });
  const dataKelas = await getAllGradeClass();

  return <EditStudentView studentData={student} gradeClassList={dataKelas} />;
}
