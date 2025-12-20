export const checkPathname = (
  pathnameParam: string,
  currentPathname: string | null
): string => {
  return pathnameParam === currentPathname
    ? 'bg-primary text-white'
    : 'bg-white text-primary';
};

export const formattedDate = (param: string): string => {
  const date = new Date(param);

  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};
