import jwt from 'jsonwebtoken';
import { UserRole } from '../types/user/userType';

const JWT_SECRET = process.env.JWT_SECRET!;
const ACCESS_EXPIRES = '15m';
const REFRESH_EXPIRES = '7d';

export type JwtPayload = {
  sub: string;
  role: UserRole;
};

export const generateAccessToken = (payload: JwtPayload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: ACCESS_EXPIRES });
};

export const generateRefreshToken = (payload: JwtPayload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: REFRESH_EXPIRES });
};
