import { ApiError } from '@/types/ApiResponseTypes';

export async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    cache: 'no-store',
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiError(
      data?.message || `Request failed with status ${response.status}`,
      response.status,
      data
    );
  }

  return data;
}
