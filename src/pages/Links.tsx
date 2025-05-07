import { useRef } from 'react';
import TeamMemberCard from '../components/TeamMemberCard.tsx';
import teamSocialLinks from '../config/teamSocialLinks.ts';
import team from '../config/listMembers.ts';

const Links = () => {
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  const copyLinkPage = () => {
    navigator.clipboard.writeText(window.location.href);
    if (copyButtonRef.current?.innerText) {
      copyButtonRef.current.innerText = 'Скопировано!';

      setTimeout(() => {
        copyButtonRef.current!.innerText = 'Скопировать адрес страницы';
      }, 1000);
    }
  };

  return (
    <main className='mx-auto mt-16 h-full min-h-screen max-w-7xl'>
      <section className='flex w-full flex-col items-center justify-center px-8 py-16 lg:px-12'>
        <h2 className='text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
          Lazy And Focused
        </h2>
        <p className='my-8 text-center text-lg text-base-content/40'>
          Список официальных страниц команды в социальных сетях
        </p>

        <ul className='mx-auto grid w-full max-w-2xl list-inside list-disc grid-cols-1 justify-start gap-3 rounded-lg bg-base-content/5 p-6 text-sm font-medium text-base-content/85 md:grid-cols-2'>
          {teamSocialLinks.map((s) => (
            <li
              className='list-none items-center gap-2 transition-colors hover:text-primary hover:underline'
              key={s.name}
            >
              <a
                href={s.href}
                target='_blank'
                rel='noreferrer'
                className='relative flex w-full min-w-max items-center justify-start gap-2 overflow-hidden text-ellipsis text-nowrap rounded-md px-4 py-2 text-left hover:bg-base-300/50'
              >
                {s.icon && (
                  <span className='flex aspect-square h-6 items-center justify-start overflow-clip rounded'>
                    <s.icon width={16} height={16} />
                  </span>
                )}
                {s.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className='btn btn-ghost mt-10 w-full rounded-full text-slate-800 dark:text-slate-200 md:max-w-80'
          onClick={copyLinkPage}
          ref={copyButtonRef}
        >
          Скопировать адрес страницы
        </button>

        <p className='mt-12 text-base text-base-content/40'>Пс-с, ты можешь прокрутить ниже</p>
      </section>

      <section className='flex min-h-screen w-full flex-col items-center justify-center px-6 py-14 lg:px-8'>
        <div className='mx-auto flex max-w-7xl flex-col gap-16 px-6 md:gap-14 lg:px-8 xl:grid-cols-3'>
          <div className='max-w-xl'>
            <h2 className='text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
              А вот это мы
            </h2>
            <p className='mt-6 text-lg/8 text-base-content/40'>
              Если вы тут впервые, но вам интересна команда, то глядите!
            </p>
          </div>
          <ul
            role='list'
            className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 xl:col-span-2'
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
export default Links;
