'use server';

type LoginPayload = {
  email: string;
  password: string;
};

export async function login(payload: LoginPayload) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/users/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error('Gagal login');
    }

    const data = await res.json();

    return {
      status: 'success',
      message: 'Berhasil login',
      data,
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
