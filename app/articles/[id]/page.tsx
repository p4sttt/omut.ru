import { PrismaClient } from '@prisma/client';

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
  });

  if (!article) {
    return null;
  }

  return <div>{article.title}</div>;
}
