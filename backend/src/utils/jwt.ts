import jwt from 'jsonwebtoken';
import { UserRole } from '../types/user/userType';

export const JWT_SECRET = process.env.JWT_SECRET!;
const ACCESS_EXPIRES = '15m';
const REFRESH_EXPIRES = '7d';

export type JwtPayload = {
  sub: string;
  role: UserRole;
};

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET missing');
}

export const generateAccessToken = (payload: JwtPayload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: ACCESS_EXPIRES });
};

export const generateRefreshToken = (payload: JwtPayload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: REFRESH_EXPIRES });
};
