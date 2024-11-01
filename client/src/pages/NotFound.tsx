import { Link } from 'react-router-dom';
import HeartBreakIcon from '../assets/icons/HeartBreakIcon';

const Home = () => {
  return (
    <main className='h-full w-full'>
      <section className='relative flex h-screen w-full flex-col items-center justify-center bg-[#418d76] bg-[url("/images/background.png")] bg-cover bg-center bg-no-repeat px-6 pt-8 shadow-xl lg:px-8 dark:bg-[#205848] dark:bg-none'>
        <div className='mx-auto flex max-w-2xl flex-col items-center justify-center text-center text-slate-300 sm:text-xl/8'>
          <HeartBreakIcon height={128} width={128} className='mb-14 text-slate-100' />
          <h1 className='text-balance text-5xl font-semibold tracking-tight text-slate-100 drop-shadow-md sm:text-7xl'>
            Без котика!
          </h1>
          <p className='mt-8 text-pretty text-lg font-medium'>
            Наш пушистик прошерстил весь сайт, но даже его шустрые лапки с острыми коготками не
            сумели закотить эту страницу!
          </p>
          <Link
            to={'/'}
            className='mt-8 text-sm/6 font-semibold transition-opacity hover:opacity-50'
          >
            На главную
          </Link>
        </div>
      </section>
    </main>
  );
};
export default Home;
