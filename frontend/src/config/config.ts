export function getConfig() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error('env path: NEXT_PUBLIC_API_URL must be required');
  }

  return {
    API_URL: apiUrl,
  };
}
