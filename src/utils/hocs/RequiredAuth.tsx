'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import type { FC, ReactNode } from 'react';

import { routes } from '@omut/utils/constants';

type RequiredAuthProps =
  | {
      children: ReactNode;
    }
  | {
      withAuth: ReactNode;
      withoutAuth: ReactNode;
    };

export const RequiredAuth: FC<RequiredAuthProps> = (props) => {
  const { status } = useSession();

  if ('children' in props) {
    if (status !== 'authenticated') {
      return redirect(routes.home);
    }

    return props.children;
  } else if ('withAuth' in props && 'withoutAuth' in props) {
    if (status !== 'authenticated') {
      return props.withoutAuth;
    }

    return props.withAuth;
  }
};
