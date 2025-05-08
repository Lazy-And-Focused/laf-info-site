// ----- Временно (надеюсь). Когда времени станет чуть больше, реализую сам.
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
// -----
import { Link } from 'react-router-dom';
import HeartBreakIcon from '../assets/icons/HeartBreakIcon';
import ListIcon from '../assets/icons/ListIcon';

const NotFound = () => {
  return (
    <main className='h-full max-h-screen w-full overflow-clip bg-[#418d76] bg-[url("/images/backgrounds/pink.png")] bg-cover bg-center bg-no-repeat dark:bg-[#205848] dark:bg-none'>
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        className='relative flex h-screen w-full skew-x-6 skew-y-6 flex-col items-center justify-center px-6 pt-8 lg:px-8'
      >
        <MouseParallaxChild
          factorX={0.8}
          factorY={0.5}
          className='mx-auto flex max-w-2xl flex-col items-center justify-center text-center text-slate-200 sm:text-xl/8'
        >
          <HeartBreakIcon height={128} width={128} className='mb-14 text-slate-100' />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.5}
          factorY={0.3}
          className='mx-auto flex max-w-2xl flex-col items-center justify-center text-center text-slate-200 sm:text-xl/8'
        >
          <h1 className='rotate-12 text-balance text-5xl font-semibold tracking-tight text-slate-100 drop-shadow-md sm:text-7xl'>
            Без котика!
          </h1>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.3}
          factorY={0.4}
          className='mx-auto flex max-w-2xl flex-col items-center justify-center text-center text-slate-200 sm:text-xl/8'
        >
          <p className='mt-8 text-pretty text-lg font-medium'>
            Наш пушистик прошерстил весь сайт, но даже его шустрые лапки с острыми коготками не
            сумели закотить эту страницу!
          </p>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.7}
          factorY={0.2}
          className='mx-auto flex max-w-2xl flex-col items-center justify-center text-center text-slate-200 sm:text-xl/8'
        >
          <Link
            to={'/'}
            className='btn btn-outline btn-neutral mt-8 text-sm/6 font-semibold transition-opacity hover:opacity-50'
          >
            <ListIcon /> Na glavnuyu
          </Link>
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </main>
  );
};
export default NotFound;
