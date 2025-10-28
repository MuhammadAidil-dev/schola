'use client';

import InputContainer from '@/components/fragments/inputs/InputContainer';
import SelectContainer from '@/components/fragments/inputs/InputSelectContainer';
import { IStudent } from '@/types/StudentTypes';

import Link from 'next/link';
import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

export default function AddSiswaView() {
  const [payload, setPayload] = useState<Omit<IStudent, '_id'>>({
    fullname: '',
    nisn: '',
    gender: 'male',
    birthOfDate: '',
    placeOfBirth: '',
    address: '',
    email: '',
    phoneNumber: '',
  });

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

  console.log(payload);

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
          Tambah Data Siswa
        </h3>
      </div>

      <form className="flex flex-col w-full mt-8 gap-4">
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
          setValue={(value) => handleValueChange('nisn', value)}
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
      </form>
    </div>
  );
}
