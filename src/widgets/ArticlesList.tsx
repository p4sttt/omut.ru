import { ArticleCard } from '@omut/components';

export const ArticlesList = () => {
  return (
    <div className='grid grid-cols-3 gap-x-3 gap-y-10'>
      {[0, 1, 2, 3, 4, 5, 6].map((number) => (
        <ArticleCard
          key={number}
          title='this is some random title for post'
          date={new Date(Date.now())}
        />
      ))}
    </div>
  );
};
