import { Link } from 'react-router-dom';
import TeamMemberCard from '../components/TeamMemberCard';
import team from '../config/team';

const About = () => {
  return (
    <main className='mx-auto h-full max-w-7xl'>
      <section className='flex h-2/5 min-h-max w-full flex-col items-center justify-center rounded-b-xl bg-emerald-200 px-6 pt-14 shadow-xl lg:px-8 dark:bg-emerald-800'>
        <div className='lg:py-46 mx-auto max-w-2xl py-16 sm:py-32'>
          <div className='hidden sm:flex sm:items-center sm:justify-center'></div>
          <div className='text-center'>
            <h1 className='text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-gray-100'>
              О нас
            </h1>
            <p className='mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8 dark:text-gray-400'>
              Немного информации о нас.
            </p>
          </div>
        </div>
      </section>

      <section
        id='members'
        className='flex min-h-full w-full flex-col items-center justify-center px-6 py-14 lg:px-8'
      >
        <ul
          role='list'
          className='mx-auto grid w-full max-w-7xl items-stretch gap-24 rounded-lg bg-white p-4 sm:grid-cols-2 xl:grid-cols-3 dark:bg-slate-800'
        >
          {team
            .filter((person) => !person.meta?.includes('leave'))
            .map((person) => (
              <li key={person.tag} className='flex h-full items-stretch'>
                <TeamMemberCard member={person} type='full' />
              </li>
            ))}
        </ul>
      </section>

      <section
        id='credits'
        className='flex min-h-full w-full flex-col items-center justify-center px-8 py-16 lg:px-12'
      >
        <h2 className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100'>
          Послесловие
        </h2>
        <p className='my-8 text-lg text-gray-600 dark:text-gray-400'>
          Мы использовали следующие ресурсы для создания сайта
        </p>
        <ul
          role='list'
          className='mx-auto w-full max-w-2xl list-inside list-disc space-y-4 rounded-lg bg-white p-6 text-sm font-medium dark:bg-slate-800'
        >
          <li className='list-disc'>
            <a
              href='https://icons.getbootstrap.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 transition-colors hover:text-blue-500 hover:underline'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={14}
                height={14}
                fill='currentColor'
                className='bi bi-bootstrap'
                viewBox='0 0 16 16'
              >
                <path d='M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z' />
                <path d='M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z' />
              </svg>
              Icons
            </a>
          </li>
          <li className='list-disc'>
            <a
              className='transition-colors hover:text-blue-500 hover:underline'
              href='https://www.svgrepo.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              SVG Repo
            </a>
            <span> (иконки Gravatar и VK)</span>
          </li>
          <li className='list-disc'>
            <Link to='#' className='transition-colors hover:text-blue-500 hover:underline'>
              Своё воображение
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};
export default About;
