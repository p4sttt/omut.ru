'use client';

import { signIn } from 'next-auth/react';

export const LoginForm = () => {
  return (
    <div className='flex flex-col items-start justify-end h-full'>
      <h1 className='mb-6 w-full text-xl font-medium text-light-100 max-w-[350px]'>
        Войдите в аккаунт, чтобы получить возможность оставлять комментарии и
        писать статьи
      </h1>
      <button
        className='inline-flex items-center gap-2 rounded bg-dark-700 p-4 text-light-100'
        onClick={() => signIn('google')}
      >
        Войти через Google
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
          />
        </svg>
      </button>
    </div>
  );
};
