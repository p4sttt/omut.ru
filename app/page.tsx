import { ArticlesList } from '@omut/widgets';

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mb-10 lg:gap-6 gap-4 auto-rows-min'>
        <h1 className='lg:text-5xl text-4xl font-normal text-light-50'>
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
