import { PrismaClient } from '@prisma/client';

import { ArticleContent } from '@omut/components';

interface ArticleParams {
  params: {
    id: string;
  };
}

export default async function Article({ params }: ArticleParams) {
  const ArticleClient = new PrismaClient().article;

  const id = params.id;

  const article = await ArticleClient.findUnique({
    where: { id },
    select: {
      title: true,
      content: true,
    },
  });

  if (!article) {
    return null;
  }

  return (
    <div className='mx-auto max-w-[800px]'>
      <h1 className='text-3xl font-medium text-light lg:text-5xl'>
        {article.title}
      </h1>
      <ArticleContent markdown={article.content} />
    </div>
  );
}
