import { Link } from 'react-router-dom';
import TeamMemberCard from '../components/TeamMemberCard';
import team from '../config/listMembers.ts';

const About = () => {
  return (
    <main className='mx-auto h-full max-w-7xl'>
      <section className='flex h-2/5 min-h-max w-full flex-col items-center justify-center rounded-b-xl bg-primary/25 px-6 pt-14 shadow-xl lg:px-8'>
        <div className='lg:py-46 mx-auto max-w-2xl py-16 sm:py-32'>
          <div className='text-center'>
            <h1 className='text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl'>
              О нас
            </h1>
            <p className='mt-8 text-pretty text-lg font-medium text-primary/75 sm:text-xl/8'>
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
          className='mx-auto grid w-full max-w-7xl justify-center gap-16 rounded-lg bg-base-content/5 p-4 sm:grid-cols-2 md:grid-cols-3 md:gap-16'
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
        <h2 className='text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
          Послесловие
        </h2>
        <p className='my-8 text-lg text-base-content/40'>
          Мы использовали следующие ресурсы для создания сайта
        </p>
        <ul
          role='list'
          className='mx-auto w-full max-w-2xl list-inside list-disc space-y-4 rounded-lg bg-base-content/5 p-6 text-sm font-medium text-base-content/85'
        >
          <li className='list-disc'>
            <a
              href='https://icons.getbootstrap.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 transition-colors hover:text-primary hover:underline'
            >
              Boostrap Icons
            </a>
          </li>
          <li className='list-disc'>
            <a
              className='transition-colors hover:text-primary hover:underline'
              href='https://www.svgrepo.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              SVG Repo
            </a>
            <span className='text-base-content/50'> (иконки Gravatar и VK)</span>
          </li>
          <li className='list-disc'>
            <Link to='#' className='transition-colors hover:text-primary hover:underline'>
              Своё воображение
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};
export default About;
