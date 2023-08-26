'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <div className='flex h-full flex-col items-start justify-end'>
      <div className='mb-6 inline-flex w-full gap-3'>
        <Image
          src={session?.user?.image as string}
          height={64}
          width={64}
          alt='user profile picture'
          className='h-16 w-16 rounded'
        />
        <div className='flex flex-col items-start'>
          <h1 className='text-lg font-medium text-light-100'>
            {session?.user?.name}
          </h1>
          <h2 className='text-sm font-normal text-light-300'>
            {session?.user?.email}
          </h2>
        </div>
      </div>
      <button
        className='inline-flex items-center gap-2 rounded bg-dark-700 p-4 text-light-100'
        onClick={() => signOut()}
      >
        Разлогиниться
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
