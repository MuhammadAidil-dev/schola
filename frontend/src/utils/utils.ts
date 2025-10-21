export const checkPathname = (
  pathnameParam: string,
  currentPathname: string
): string => {
  return pathnameParam.startsWith(currentPathname)
    ? 'bg-primary text-white'
    : 'bg-white text-primary';
};
