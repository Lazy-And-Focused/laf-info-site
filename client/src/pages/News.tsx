const News = () => {
  return (
    <main className='mx-auto h-full max-w-7xl'>
      <section className='flex h-2/5 min-h-max w-full flex-col items-center justify-center rounded-b-xl bg-primary/25 px-6 pt-14 shadow-xl lg:px-8'>
        <div className='lg:py-46 mx-auto max-w-2xl py-16 sm:py-32'>
          <div className='text-center'>
            <h1 className='text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl'>
              Новостная
            </h1>
            <p className='mt-8 text-pretty text-lg font-medium text-primary/75 sm:text-xl/8'>
              Все актуальные новости нашей команды.
            </p>
          </div>
        </div>
      </section>

      <section className='flex min-h-screen w-full flex-col items-center justify-center px-6 pt-14 lg:px-8'>
        <div className='mx-auto w-full max-w-2xl py-32 sm:py-48 lg:py-56'>
          <h2 className='text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl'>
            Новости
          </h2>
          <ul className='mt-8 space-y-8'>
            <li className='border-t border-gray-200 pt-8 dark:border-gray-800'>
              <p className='ml-4 text-lg font-medium text-gray-800 dark:text-gray-200'>
                Пример записи.{' '}
                <a
                  href='#'
                  target='_blank'
                  rel='noreferrer'
                  className='text-indigo-600 hover:underline'
                >
                  Ссылка
                </a>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default News;
