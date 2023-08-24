'use client';

import { signOut } from 'next-auth/react';

import { RequredAuth } from '@omut/widgets';

export default function Profile() {
  return (
    <RequredAuth>
      <div className=''>
        <h1>Кароче только для залогиненных</h1>
        <button onClick={() => signOut()}>Выйти</button>
      </div>
    </RequredAuth>
  );
}
