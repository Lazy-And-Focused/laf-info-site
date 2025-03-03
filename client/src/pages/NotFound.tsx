import { Link } from 'react-router-dom';
import HeartBreakIcon from '../assets/icons/HeartBreakIcon';
import ListIcon from '../assets/icons/ListIcon';

const NotFound = () => {
  return (
    <main className='h-full max-h-screen w-full overflow-clip bg-[#418d76] bg-[url("/images/backgrounds/pink.png")] bg-cover bg-center bg-no-repeat dark:bg-[#205848] dark:bg-none'>
      <section className='relative flex h-screen w-full skew-x-6 skew-y-6 flex-col items-center justify-center px-6 pt-8 lg:px-8'>
        <div className='mx-auto flex max-w-2xl flex-col items-center justify-center text-center text-slate-200 sm:text-xl/8'>
          <HeartBreakIcon height={128} width={128} className='mb-14 text-slate-100' />
          <h1 className='rotate-12 text-balance text-5xl font-semibold tracking-tight text-slate-100 drop-shadow-md sm:text-7xl'>
            Без котика!
          </h1>
          <p className='mt-8 text-pretty text-lg font-medium'>
            Наш пушистик прошерстил весь сайт, но даже его шустрые лапки с острыми коготками не
            сумели закотить эту страницу!
          </p>
          <Link
            to={'/'}
            className='btn btn-outline btn-neutral mt-8 text-sm/6 font-semibold transition-opacity hover:opacity-50'
          >
            <ListIcon /> Na glavnuyu
          </Link>
        </div>
      </section>
    </main>
  );
};
export default NotFound;
