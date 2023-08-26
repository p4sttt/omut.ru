import Link from 'next/link';
import type { FC } from 'react';

import { routes } from '@omut/utils/constants';

interface ArticleCardProps {
  date: Date;
  title: string;
  id: string;
}

export const ArticleCard: FC<ArticleCardProps> = ({ id, title, date }) => {
  return (
    <Link href={routes.article(id)} className='inline-flex h-fit w-full flex-col items-start justify-start gap-3'>
        <div className='relative h-[200px] w-full'>
          <div className='absolute left-0 top-0 h-[200px] w-full rounded bg-dark-800' />
        </div>
        <div className='flex flex-col items-start justify-start gap-1 self-stretch'>
          <p className='inlien-block w-full self-stretch overflow-x-hidden text-ellipsis whitespace-nowrap text-base font-medium uppercase leading-tight text-light'>
            {title.slice(0, 40)}
          </p>
          <p className='self-stretch text-xs font-normal capitalize text-light-300'>
            {date.toLocaleDateString()}
          </p>
        </div>
    </Link>
  );
};
