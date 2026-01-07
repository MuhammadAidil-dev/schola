import { deleteStudent } from '@/app/actions/studentAction';
import { IStudent } from '@/types/StudentTypes';
import { formattedDate } from '@/utils/utils';
import Link from 'next/link';

type props = {
  student: IStudent;
  closeModal: () => void;
};

export default function DetailStudentModal({ student, closeModal }: props) {
  const handleDelete = async () => {
    try {
      const res = await deleteStudent({ id: student._id });
      if (res.status !== 'success') {
        throw new Error(res.message);
      }

      alert(res.message);
      closeModal();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.log('Terjadi kesalahan');
      }
    }
  };

  return (
    <div className="fixed bg-black/30 inset-0 flex justify-center items-center z-50">
      <div className="relative bg-white w-[400px] rounded-sm flex flex-col p-4 md:w-[600px]">
        {/* close button */}
        <div
          onClick={closeModal}
          className="w-8 h-8 rounded-full bg-white font-semibold absolute -top-3 -right-3 cursor-pointer flex justify-center items-center"
        >
          X
        </div>

        <h3 className="text-lg font-semibold text-primary mb-4 ml-2">Detail</h3>

        <div className="flex gap-2">
          <div className="flex-1 flex flex-col gap-4 pl-2">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-primary md:text-lg">
                Nama Lengkap
              </p>
              <p className="text-xs text-primary md:text-sm">
                {student.fullname}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-primary md:text-lg">
                NISN
              </p>
              <p className="text-xs text-primary md:text-sm">{student.nisn}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-primary md:text-lg">
                Jenis Kelamin
              </p>
              <p className="text-xs text-primary md:text-sm">
                {student.gender}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-primary md:text-lg">
                Tanggal Lahir
              </p>
              <p className="text-xs text-primary md:text-sm">
                {formattedDate(student.birthOfDate)}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-primary md:text-lg">
                Tempat Lahir
              </p>
              <p className="text-xs text-primary md:text-sm">
                {student.placeOfBirth}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-primary md:text-lg">
                Alamat
              </p>
              <p className="text-xs text-primary md:text-sm">
                {student.address}
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 pl-2">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-primary md:text-lg">
                Email
              </p>
              <p className="text-xs text-primary md:text-sm">{student.email}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-primary md:text-lg">
                Nomor Hp
              </p>
              <p className="text-xs text-primary md:text-sm">
                {student.phoneNumber}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-primary md:text-lg">
                Kelas
              </p>
              <p className="text-xs text-primary md:text-sm">
                {student.academicData.studentClass.className}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-primary md:text-lg">
                Program Studi
              </p>
              <p className="text-xs text-primary md:text-sm">
                {student.academicData.studentClass.studyProgram}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-primary md:text-lg">
                Tahun Masuk
              </p>
              <p className="text-xs text-primary md:text-sm">
                {student.academicData.entryYear}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-primary md:text-lg">
                Status
              </p>
              <p className="text-xs text-primary md:text-sm">
                {student.academicData.status}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          <Link
            href={`/admin/management-data/siswa/edit/${student._id}`}
            className="bg-primary text-center text-sm font-semibold rounded-sm text-white py-2"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="cursor-pointer bg-red-500 text-sm font-semibold rounded-sm text-white py-2"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
