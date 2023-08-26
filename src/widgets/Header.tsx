'use client';

import Link from 'next/link';

import { Drawer } from '@omut/components';
import { Badge } from '@omut/ui';
import { routes } from '@omut/utils/constants';
import { RequiredAuth } from '@omut/utils/hocs';
import { useDisclosure } from '@omut/utils/hooks';

export const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <header className='fixed top-0 z-40 inline-flex h-fit w-screen flex-col items-center justify-center gap-2.5 border-b-2 border-dark-800 bg-dark-900 px-4 py-8'>
        <div className='inline-flex w-full max-w-[1110px] items-center justify-between'>
          <Link href={routes.home}>
            <Badge title='omut.ru' variant='logo' />
          </Link>
          <button
            className='inline-flex h-6 items-center justify-start gap-2 text-xl font-medium leading-normal text-light-100'
            onClick={onOpen}
          >
            <RequiredAuth withAuth={'акк'} withoutAuth={'войти'} />
            <div className='h-2 w-2 rounded-full bg-light-100' />
          </button>
        </div>
      </header>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};
