import TeamMemberCard from '../components/TeamMemberCard';
import team from '../config/team';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='h-full w-full'>
      <section className='flex h-screen w-full flex-col items-center justify-center bg-[#418d76] bg-[url("/images/background.png")] bg-cover bg-center bg-no-repeat px-6 pt-14 shadow-xl lg:px-8 dark:bg-[#205848] dark:bg-none'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-balance text-5xl font-semibold tracking-tight text-slate-100 drop-shadow-md sm:text-7xl'>
              Сделано с LAF
            </h1>
            <p className='mt-8 text-pretty text-lg font-medium text-slate-300 sm:text-xl/8'>
              Мы – команда молодых, очень ленивых, но увлеченных работой энтузиастов, двигуящаяся к
              вершинам этого мира.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                to='/#members'
                className='rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-slate-200 shadow-sm transition-[shadow,_color,_background-color,_border-color] hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'
              >
                Узнать больше
              </Link>
              <Link to='/news' className='text-sm/6 font-semibold text-slate-200'>
                События <span aria-hidden='true'>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id='members'
        className='flex min-h-screen w-full flex-col items-center justify-center px-6 py-14 lg:px-8'
      >
        <div className='mx-auto grid max-w-7xl gap-16 px-6 md:gap-20 lg:px-8 xl:grid-cols-3'>
          <div className='max-w-xl'>
            <h2 className='text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100'>
              Давайте познакомимся
            </h2>
            <p className='mt-6 text-lg/8 text-gray-600 dark:text-gray-400'>
              Пока что совсем молоды, но готовые собраться вместе, чтобы покорить ваши сердца общими
              продуктами.
            </p>
            <div className='mt-8'>
              <Link
                to='/about'
                className='rounded-md p-2 text-sm font-semibold text-emerald-600 transition-[shadow,_color,_background-color] hover:bg-emerald-600 hover:text-white hover:shadow-md dark:text-emerald-400 dark:hover:bg-emerald-800'
              >
                Продолжить знакомство <span aria-hidden='true'>→</span>
              </Link>
            </div>
          </div>
          <ul
            role='list'
            className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'
          >
            {team
              .filter((person) => !person.meta?.includes('leave'))
              .map((person) => (
                <li key={person.tag}>
                  <div key={person.tag}>
                    <TeamMemberCard member={person} />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Home;
