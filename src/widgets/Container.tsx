import type { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='h-full w-screen px-4 mt-40'>
      <div className='mx-auto max-w-[1110px]'>
        <main>{children}</main>
      </div>
    </div>
  );
};
