import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import './article.styles.css';

interface ArticleContentProps {
  markdown: string;
}

export const ArticleContent: FC<ArticleContentProps> = ({ markdown }) => {
  return (
    <div className='article-content'>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};
