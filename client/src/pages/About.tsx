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
    </main>
  );
};
export default About;
