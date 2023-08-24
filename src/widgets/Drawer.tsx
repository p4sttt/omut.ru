'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { signIn } from 'next-auth/react';
import type { FC } from 'react';
import { createPortal } from 'react-dom';


interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer: FC<DrawerProps> = ({ isOpen, onClose }) => {
  const wrapper: Variants = {
    hidden: {
      backgroundColor: 'rgba(10, 10, 10, 0)',
    },
    visible: {
      backgroundColor: 'rgba(10, 10, 10, 0.5)',
    },
  };

  const drawer: Variants = {
    hidden: {
      x: 400,
      transition: {
        ease: 'easeIn',
        duration: 0.16,
      },
    },
    visible: {
      x: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.24,
      },
    },
  };

  if (typeof window !== 'object') {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={wrapper}
          initial='hidden'
          animate='visible'
          exit='hidden'
          className='fixed right-0 top-0 z-50 inline-flex h-screen w-screen justify-end'
          onClick={onClose}
        >
          <motion.div
            variants={drawer}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='relative flex h-full w-[400px] items-end justify-end bg-dark-800 p-6'
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h1 className='mb-6 w-full text-xl font-medium text-light-100'>
                Войдите в аккаунт, чтобы получить возможность оставлять
                комментарии и писать статьи
              </h1>
              <button onClick={() => signIn('google')}>Sign in with Google</button>
            </div>
            <button onClick={onClose} className='p-2 absolute top-4 right-4 rounded hover:bg-light/10 transition-colors'>
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
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
