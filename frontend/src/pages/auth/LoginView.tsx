'use client';

import { login } from '@/app/actions/authAction';
import InputContainer from '@/components/fragments/inputs/InputContainer';
import { useState } from 'react';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-secondary">
      <div className="bg-white w-[80%] p-4 rounded-sm flex flex-col md:max-w-[500px]">
        <img
          src="/assets/icons/main-logo.svg"
          alt="logo scola"
          className="w-24 h-24 mx-auto"
        />
        <h3 className="text-secondary font-semibold text-center text-xl">
          LOGIN
        </h3>
        <p className="text-sm text-primary text-center">
          Please login your account
        </p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <InputContainer
            label="Email"
            name="email"
            type="email"
            value={email}
            setValue={setEmail}
          />
          <InputContainer
            label="Password"
            name="password"
            type="password"
            value={password}
            setValue={setPassword}
          />

          <div className="mt-4">
            <button
              type="submit"
              className="w-full rounded-sm cursor-pointer py-2 px-4 bg-secondary font-semibold text-white text-sm"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
