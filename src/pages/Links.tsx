import { useRef } from 'react';
import teamSocialLinks from '../config/teamSocialLinks.ts';

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
      <section className='flex min-h-full w-full flex-col items-center justify-center px-8 py-16 lg:px-12'>
        <h2 className='text-3xl font-semibold tracking-tight text-base-content sm:text-4xl'>
          Lazy And Focused
        </h2>
        <p className='my-8 text-lg text-base-content/40'>
          Список офицальных страниц команды в социальных сетях
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
          className='btn btn-ghost mt-10 w-full rounded-full text-slate-200 md:max-w-80'
          onClick={copyLinkPage}
          ref={copyButtonRef}
        >
          Скопировать адрес страницы
        </button>
      </section>
    </main>
  );
};
export default Links;
