'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

import { Badge } from '@omut/ui';
import { routes } from '@omut/utils/constants';
import { useDisclosure } from '@omut/utils/hooks';
import { Drawer } from '@omut/widgets/Drawer';

export const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data: session } = useSession();

  return (
    <>
      <header className='fixed top-0 z-40 inline-flex h-fit w-screen flex-col items-center justify-center gap-2.5 border-b-2 border-dark-800 bg-dark-900 px-4 py-8'>
        <div className='inline-flex w-full max-w-[1110px] items-center justify-between'>
          <Link href={routes.home}>
            <Badge title='omut.ru' variant='logo' />
          </Link>
          <div className='flex h-6 items-center justify-start gap-2.5'>
            {session ? (
              <Link
                href={routes.profile}
                className='inline-flex items-center gap-2 text-xl font-medium leading-normal text-light-100'
              >
                акк
                <div className='h-2 w-2 rounded-full bg-light-100' />
              </Link>
            ) : (
              <button
                className='inline-flex items-center gap-2 text-xl font-medium leading-normal text-light-100'
                onClick={onOpen}
              >
                войти
                <div className='h-2 w-2 rounded-full bg-light-100' />
              </button>
            )}
          </div>
        </div>
      </header>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};
