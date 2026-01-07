'use server';

import { getConfig } from '@/config/config';
import { fetcher } from '@/lib/api';
import { ApiError, ApiResponse } from '@/types/ApiResponseTypes';
import { CreateStudentDTO, IStudent } from '@/types/StudentTypes';
import { revalidatePath } from 'next/cache';
const { API_URL } = getConfig();

export async function createStudent(
  payload: CreateStudentDTO
): Promise<ApiResponse<IStudent | null>> {
  try {
    const response = await fetcher<ApiResponse<IStudent>>(
      `${API_URL}/api/students`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (response.status !== 'success') {
      throw new Error(response.message || 'Gagal create student');
    }

    return response;
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        status: 'error',
        message: error.message || 'Failed create student',
        data: null,
      };
    }

    return {
      status: 'error',
      message: 'Failed create student',
      data: null,
    };
  }
}

export async function deleteStudent({
  id,
}: {
  id: string;
}): Promise<ApiResponse<IStudent | null>> {
  try {
    const response = await fetcher<ApiResponse<IStudent>>(
      `${API_URL}/api/students/${id}`,
      {
        method: 'DELETE',
      }
    );

    if (response.status !== 'success') {
      throw new Error(response.message || 'Gagal Hapus student');
    }

    revalidatePath('admin/management-data/siswa');

    return response;
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        status: 'error',
        message: error.message || 'Failed delete student',
        data: null,
      };
    }

    return {
      status: 'error',
      message: 'Failed delete student',
      data: null,
    };
  }
}

export async function updateStudent({
  payload,
  id,
}: {
  payload: CreateStudentDTO;
  id: string;
}): Promise<ApiResponse<IStudent | null>> {
  try {
    const response = await fetcher<ApiResponse<IStudent>>(
      `${API_URL}/api/students/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (response.status !== 'success') {
      throw new Error(response.message || 'Gagal update student');
    }

    revalidatePath('/admin/management-data/siswa');

    return response;
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        status: 'error',
        message: error.message || 'Failed update student',
        data: null,
      };
    }

    return {
      status: 'error',
      message: 'Failed update student',
      data: null,
    };
  }
}
