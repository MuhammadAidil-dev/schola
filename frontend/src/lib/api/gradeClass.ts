import { IGradeClass } from '@/types/GradeClassTypes';
import { fetcher } from '.';
import { ApiResponse } from '@/types/ApiResponseTypes';
import { getConfig } from '@/config/config';

const { API_URL } = getConfig();

export async function getAllGradeClass(): Promise<IGradeClass[]> {
  const res = await fetcher<ApiResponse<IGradeClass[]>>(
    `${API_URL}/api/grade-class`,
    {
      method: 'GET',
    }
  );

  if (res.status !== 'success') {
    throw new Error(res.message || 'Error fetch grade class');
  }

  return res.data;
}
