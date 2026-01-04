'use server';

import { cookies } from 'next/headers';

type LoginPayload = {
  email: string;
  password: string;
};

const API_URL = process.env.API_URL;

export async function login(payload: LoginPayload) {
  try {
    const res = await fetch(`${API_URL}/api/users/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error('Gagal login');
    }

    const data = await res.json();

    const cookieStore = await cookies();
    cookieStore.set('accessToken', data.data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 hari dalam detik
      path: '/',
    });

    return {
      status: 'success',
      message: 'Berhasil login',
      data: data.data.user,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 'error',
        message: error.message,
        data: null,
      };
    }
    console.error('Unknown error', error);
    return { success: 'error', message: 'Unexpected error', data: null };
  }
}

export async function logout() {
  try {
    const res = await fetch(`${API_URL}/api/users/auth/logout`, {
      method: 'POST',
    });

    if (!res.ok) {
      throw new Error('Gagal logout');
    }

    const cookieStore = await cookies();
    cookieStore.delete('accessToken');

    return {
      status: 'success',
      message: 'Berhasil logout',
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 'error',
        message: error.message,
        data: null,
      };
    }
    console.error('Unknown error', error);
    return { success: 'error', message: 'Unexpected error', data: null };
  }
}
