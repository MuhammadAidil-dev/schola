import { IStudent } from '@/types/StudentTypes';
import { fetcher } from '.';
import { getConfig } from '@/config/config';
import { ApiResponse } from '@/types/ApiResponseTypes';

const { API_URL } = getConfig();

export async function getAllStudents(): Promise<IStudent[]> {
  const res = await fetcher<ApiResponse<IStudent[]>>(
    `${API_URL}/api/students`,
    {
      method: 'GET',
    }
  );

  if (res.status !== 'success') {
    throw new Error(res.message || 'failed fetch all students');
  }

  return res.data;
}

export async function getStudentById({
  id,
}: {
  id: string;
}): Promise<IStudent> {
  const res = await fetcher<ApiResponse<IStudent>>(
    `${API_URL}/api/students/${id}`,
    {
      method: 'GET',
    }
  );

  if (res.status !== 'success') {
    throw new Error(res.message || 'failed fetch all students');
  }

  return res.data;
}
