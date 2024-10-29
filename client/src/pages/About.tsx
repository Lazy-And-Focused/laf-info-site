import Browser from '../components/Browser';
import TeamMemberCard from '../components/TeamMemberCard';
import team from '../config/team';

const About = () => {
  return (
    <main className='mx-auto h-full max-w-7xl'>
      <section className='flex h-2/5 w-full flex-col items-center justify-center rounded-b-xl bg-emerald-200 px-6 pt-14 shadow-xl lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:flex sm:items-center sm:justify-center'></div>
          <div className='text-center'>
            <h1 className='text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl'>
              О нас
            </h1>
            <p className='mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8'>
              Немного информации о нас.
            </p>
          </div>
        </div>
      </section>

      <section className='flex h-full w-full flex-col items-center justify-center px-6 pt-14 lg:px-8'>
        <Browser
          tabs={[
            {
              name: 'Команда',
              favicon: 'logo.png',
              element: (
                <div className='flex flex-col gap-4'>
                  {team
                    .filter((person) => !person.meta?.includes('leave'))
                    .map((person) => (
                      <TeamMemberCard key={person.name} member={person} />
                    ))}
                </div>
              ),
            },
          ]}
        />
      </section>
    </main>
  );
};
export default About;
