'use client';

import { updateStudent } from '@/app/actions/studentAction';
import InputContainer from '@/components/fragments/inputs/InputContainer';
import SelectContainer from '@/components/fragments/inputs/InputSelectContainer';
import { IGradeClass } from '@/types/GradeClassTypes';
import { IStudent, UpdateStudentDTO } from '@/types/StudentTypes';
import { formatDateForInput } from '@/utils/utils';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

type props = {
  studentData: IStudent;
  gradeClassList: IGradeClass[];
};

export default function EditStudentView({
  studentData,
  gradeClassList,
}: props) {
  const [payload, setPayload] = useState<UpdateStudentDTO>({
    fullname: studentData.fullname,
    nisn: studentData.nisn,
    gender: studentData.gender,
    birthOfDate: formatDateForInput(studentData.birthOfDate),
    placeOfBirth: studentData.placeOfBirth,
    address: studentData.address,
    email: studentData.email,
    phoneNumber: studentData.phoneNumber,
    academicData: {
      status: 'active',
      entryYear: studentData.academicData.entryYear,
      studentClass: studentData.academicData.studentClass._id,
    },
  });

  const router = useRouter();

  const handleValueChange = <K extends keyof typeof payload>(
    key: K,
    value: (typeof payload)[K]
  ) => {
    setPayload((prev) => ({ ...prev, [key]: value }));
  };

  const jenisKelaminOptions = [
    {
      value: 'male',
      option: 'Laki-Laki',
    },
    {
      value: 'female',
      option: 'Perempuan',
    },
  ];

  const gradeClassOption = gradeClassList.map((data) => ({
    value: data._id,
    option: data.className,
  }));

  const regexNumber = /^\d*$/;

  const handleSubmit = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();
    try {
      const res = await updateStudent({ payload, id: studentData._id });

      if (res.status !== 'success') {
        throw new Error(res.message);
      }

      alert(res.message || 'success');
      router.push('/admin/management-data/siswa');
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        alert(error.message);
      } else {
        console.error('Terjadi kesalahan');
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Link
          href="/admin/management-data/siswa"
          className="flex justify-center items-center border p-2 border-black rounded-full"
        >
          <FaChevronLeft size={20} />
        </Link>
        <h3 className="font-semibold text-primary text-lg ml-4">
          Edit Data Siswa
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col w-full mt-8 gap-4">
        <InputContainer
          label="Nama Lengkap"
          name="fullname"
          value={payload.fullname}
          setValue={(value) => handleValueChange('fullname', value)}
        />
        <InputContainer
          label="NISN"
          name="nisn"
          value={payload.nisn}
          setValue={(value) => {
            if (regexNumber.test(value)) {
              handleValueChange('nisn', value);
            }
          }}
        />
        <InputContainer
          label="Tanggal lahir"
          name="birthOfDate"
          value={payload.birthOfDate}
          setValue={(value) => handleValueChange('birthOfDate', value)}
          type="date"
        />
        <InputContainer
          label="Tempat lahir"
          name="placeOfBirth"
          value={payload.placeOfBirth}
          setValue={(value) => handleValueChange('placeOfBirth', value)}
          type="text"
        />

        <SelectContainer
          options={jenisKelaminOptions}
          value={payload.gender}
          setValue={(value) => handleValueChange('gender', value)}
          label="Jenis Kelamin"
          name="jenisKelamin"
        />
        <InputContainer
          label="Alamat"
          name="address"
          value={payload.address}
          setValue={(value) => handleValueChange('address', value)}
          type="text"
        />

        <InputContainer
          label="Email"
          name="email"
          value={payload.email}
          setValue={(value) => handleValueChange('email', value)}
          type="email"
        />
        <InputContainer
          label="Phone Number"
          name="phoneNumber"
          value={payload.phoneNumber}
          setValue={(value) => {
            if (regexNumber.test(value)) {
              handleValueChange('phoneNumber', value);
            }
          }}
          type="text"
        />
        <InputContainer
          label="Entry Year"
          name="entryYear"
          value={payload.academicData.entryYear}
          setValue={(value) => {
            if (regexNumber.test(value)) {
              setPayload((prev) => ({
                ...prev,
                academicData: {
                  ...prev.academicData,
                  entryYear: value,
                },
              }));
            }
          }}
          type="text"
        />
        <SelectContainer
          options={gradeClassOption}
          value={payload.academicData.studentClass}
          setValue={(value) => {
            setPayload((prev) => ({
              ...prev,
              academicData: {
                ...prev.academicData,
                studentClass: value,
              },
            }));
          }}
          label="Tingkatan Kelas"
          name="gradeClass"
        />

        <div className="mt-4">
          <button
            type="submit"
            className="bg-primary text-white font-semibold py-2 px-4 rounded-sm hover:cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
