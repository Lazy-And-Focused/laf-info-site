import TeamMemberCard from '../components/TeamMemberCard';
import team from '../config/listMembers.ts';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='h-full w-full'>
      <section className='flex h-screen w-full flex-col items-center justify-center bg-[#418d76] bg-[url("/images/backgrounds/green.png")] bg-cover bg-center bg-no-repeat px-6 pt-14 shadow-xl dark:bg-[#205848] dark:bg-none lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-balance text-5xl font-semibold tracking-tight text-slate-100 drop-shadow-md sm:text-7xl'>
              Разработка с LAF
            </h1>
            <p className='mt-8 text-pretty text-lg font-medium text-slate-200 sm:text-xl/8'>
              Мы – команда молодых, очень ленивых, но увлеченных работой энтузиастов, двигуящихся к
              вершинам этого мира.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link to='/#info' className='btn btn-primary rounded-full'>
                Узнать больше
              </Link>
              <Link to='/projects' className='btn btn-ghost rounded-full text-slate-200'>
                Проекты <span aria-hidden='true'>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id='info'
        className='flex min-h-screen w-full flex-col items-center justify-center px-6 py-14 lg:px-8'
      >
        <div className='flex max-w-xl flex-col items-center justify-center text-center'>
          <h2 className='text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
            Чем мы занимаемся
          </h2>
          <p className='mt-6 text-lg/8 text-base-content/40'>
            Разрабатываем малые и средние IT-продукты, независимо от их типа: веб-, натив-приложения
            и игры
          </p>
          <div className='mt-8 flex flex-row gap-4'>
            <Link to='/#members' className='btn btn-outline btn-primary rounded-md'>
              А кто вы такие?
            </Link>
            <Link to='/projects' className='btn btn-ghost btn-primary rounded-md'>
              К проектам <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id='members'
        className='flex min-h-screen w-full flex-col items-center justify-center px-6 py-14 lg:px-8'
      >
        <div className='mx-auto grid max-w-7xl gap-16 px-6 md:gap-20 lg:px-8 xl:grid-cols-3'>
          <div className='max-w-xl'>
            <h2 className='text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
              А «мы» это кто?
            </h2>
            <p className='mt-6 text-lg/8 text-base-content/40'>
              Юная команда из тех, кто готов покорять ваши сердца!
            </p>
            <div className='mt-8'>
              <Link to='/about' className='btn btn-outline btn-primary rounded-md'>
                Давай дальше <span aria-hidden='true'>→</span>
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
