export const checkPathname = (
  pathnameParam: string,
  currentPathname: string | null
): string => {
  return pathnameParam === currentPathname
    ? 'bg-primary text-white'
    : 'bg-white text-primary';
};
