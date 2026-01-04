import { NextFunction, Request, Response } from 'express';
import { CreateUserDTO, IUser } from '../../types/user/userType';
import User from '../../models/userModel';
import { httpCode } from '../../config/http';
import AppError from '../../utils/appError';
import { checkPassword } from '../../utils/bcrypt';
import { generateAccessToken } from '../../utils/jwt';

type UserController = {
  register: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
  login: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
  logout: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>;
};

const userController: UserController = {
  register: async (req, res, next) => {
    try {
      const payload: CreateUserDTO = req.body;

      const alreadyUser = await User.findOne({
        email: payload.email,
      });

      if (alreadyUser) {
        return next(new AppError(409, 'email already use'));
      }

      const newUser = await User.create(payload);

      return res.status(httpCode.CREATED).json({
        status: 'success',
        message: 'successfuly create user',
        data: newUser,
      });
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password }: { email: string; password: string } = req.body;

      const user: IUser | null = await User.findOne({
        email,
      });

      if (!user) {
        return next(new AppError(404, 'User tidak ditemukan'));
      }

      const isMatch = await checkPassword(password, user.password);
      if (!isMatch) {
        return next(new AppError(401, 'Credential tidak valid'));
      }

      const accessToken = generateAccessToken({
        sub: user._id,
        role: user.role,
      });

      res.cookie('accessToken', accessToken, {
        sameSite: 'lax',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
      });

      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Berhasil login',
        data: { user, accessToken },
      });
    } catch (error) {
      next(error);
    }
  },
  logout: async (req, res, next) => {
    try {
      res.clearCookie('accessToken');

      return res.status(httpCode.OK).json({
        status: 'success',
        message: 'Berhasil logout',
        data: null,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default userController;
