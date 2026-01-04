import bcrypt from 'bcrypt';

export const hashPassword = async (
  value: string,
  saltRounds: number = 10
): Promise<string> => {
  return bcrypt.hash(value, saltRounds);
};

export const checkPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};
