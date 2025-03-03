import Browser from '../components/Browser';

const Projects = () => {
  return (
    <main className='h-full w-full'>
      <section className='flex min-h-screen w-full flex-col items-center justify-center bg-[#418d76] bg-[url("/images/background.png")] bg-cover bg-center bg-no-repeat px-6 pt-14 shadow-xl dark:bg-[#205848] dark:bg-none lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 pt-16 sm:pt-12'>
          <div className='text-center'>
            <h1 className='mb-8 text-balance text-5xl font-semibold tracking-tight text-slate-100 drop-shadow-md sm:text-7xl'>
              Сделано с LAF
            </h1>

            <Browser
              tabs={[
                {
                  name: 'LAFka',
                  favicon: '/images/logo.png',
                  element:
                    'В разработке. Сайт-форум, где Вы сможете постить свои вопросы или отвечать на них. Также у Вас будет возможность вести свой блог и общаться с людьми!',
                },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Projects;
