export const createLessonCode = (): string => {
  const randomCode = 'LSN-' + Date.now();
  return randomCode;
};
