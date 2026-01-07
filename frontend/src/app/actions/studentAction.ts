'use';

import { getConfig } from '@/config/config';
import { fetcher } from '@/lib/api';
import { ApiError, ApiResponse } from '@/types/ApiResponseTypes';
import { CreateStudentDTO, IStudent } from '@/types/StudentTypes';
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
