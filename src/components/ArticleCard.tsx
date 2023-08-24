import type { FC } from 'react';

interface ArticleCardProps {
  date: Date;
  title: string;
}

export const ArticleCard: FC<ArticleCardProps> = ({ title, date }) => {
  return (
    <article className='inline-flex h-fit w-full flex-col items-start justify-start gap-3'>
      <div className='relative h-[200px] w-full'>
        <div className='absolute left-0 top-0 h-[200px] w-full rounded bg-dark-800' />
      </div>
      <div className='flex flex-col items-start justify-start gap-1 self-stretch'>
        <p className='text-light self-stretch text-base font-medium uppercase leading-tight'>
          {title.length > 40 ? title.slice(0, 40) + '...' : title}
        </p>
        <p className='self-stretch text-xs font-normal capitalize text-light-300'>
          {date.toLocaleDateString()}
        </p>
      </div>
    </article>
  );
};
