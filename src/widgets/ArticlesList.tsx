import { PrismaClient } from '@prisma/client';

import { ArticleCard } from '@omut/components';

export const ArticlesList = async () => {
  const ArticlesClient = new PrismaClient().article;

  const articles = await ArticlesClient.findMany({
    select: {
      id: true,
      title: true,
      date: true,
    },
  });

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-10'>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          title={article.title}
          date={article.date}
        />
      ))}
    </div>
  );
};
