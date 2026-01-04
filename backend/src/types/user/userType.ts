export type UserRole = 'admin' | 'user';

export interface IUser {
  _id: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface IUserDocument extends Omit<IUser, '_id'>, Document {}
export type CreateUserDTO = Omit<IUser, '_id'>;
