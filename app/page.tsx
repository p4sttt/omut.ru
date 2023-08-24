import { ArticlesList } from '@omut/widgets';

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-2 mb-10'>
        <h1 className='text-5xl font-normal text-light-50'>
          Место, где говорят только правду.
        </h1>
        <p className='text-md font-normal text-light-300'>
          СМИ, основанные на принципах методологии объектно-ориентированного
          программирования, охватывее широкий спектр вопросов для развития
          осознанности.
        </p>
      </div>
      <ArticlesList />
    </div>
  );
}
