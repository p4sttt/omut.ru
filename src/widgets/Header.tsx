import { Badge } from '@omut/ui';
import React from 'react';

export const Header = () => {
  return (
    <header className='top-0 fixed z-50 inline-flex h-fit w-screen flex-col items-center justify-center gap-2.5 border-b-2 border-dark-800 bg-dark-900 px-4 py-8'>
      <div className='inline-flex w-full max-w-[1110px] items-center justify-between'>
        <Badge title='omut.ru' variant='logo' />
        <div className='flex h-6 items-center justify-start gap-2.5'>
          <div className='text-xl font-medium leading-normal text-light-100'>
            войти
          </div>
          <div className='h-2.5 w-2.5 rounded-full bg-light-100' />
        </div>
      </div>
    </header>
  );
};
