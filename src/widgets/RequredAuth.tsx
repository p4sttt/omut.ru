'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import type { FC, ReactNode } from 'react';

import { routes } from '@omut/utils/constants';

interface RequredAuthProps {
  children: ReactNode;
}

export const RequredAuth: FC<RequredAuthProps> = ({ children }) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {},
  });
  if (status === 'loading') {
    return redirect(routes.home);
  }

  return children;
};
