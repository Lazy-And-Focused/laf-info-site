import { Link, NavLink } from 'react-router-dom';
import routes from '../config/routes';
import { useState, useEffect } from 'react';
import GitHubIcon from '../assets/icons/GitHubIcon';
import clsx from 'clsx';

/**
 * Шапка сайта
 */
const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 z-50 w-full border-b-2 p-4 transition duration-500 ease-in-out',
        scrollY > 0 ? 'border-primary/75 bg-base-100/20 backdrop-blur-md' : 'border-transparent',
      )}
    >
      <nav
        className='container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:px-8'
        aria-label='Global'
      >
        <div className='flex flex-1 items-center'>
          <Link to='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>LAF</span>
            <img alt='logo' src='/logo.png' className='h-8 w-auto rounded shadow' />
          </Link>
        </div>
        <div className='flex flex-1 justify-center gap-x-8 lg:gap-x-12'>
          {routes[0].children?.map((r) => (
            <NavLink
              key={r.path}
              to={r.path}
              className={({ isActive, isPending }) =>
                clsx(
                  'btn btn-ghost h-8 min-h-8 text-nowrap rounded px-2 py-1 text-sm font-medium text-base-content transition-colors',
                  isActive && 'bg-primary/50 shadow',
                  isPending && 'animate-pulse',
                )
              }
            >
              {r.name}
            </NavLink>
          ))}
        </div>
        <div className='flex flex-1 justify-end gap-4 text-sm font-semibold text-base-content'>
          <a
            href='https://github.com/Lazy-And-Focused'
            className='flex items-center justify-center'
            target='_blank'
            rel='noreferrer'
          >
            <span className='hidden sm:inline'>Наш GitHub</span>
            <GitHubIcon className='ml-2 h-5 w-5' />
          </a>
          <ThemeSwitcher className='h-5 w-5' />
        </div>
      </nav>
    </header>
  );
};

const ThemeSwitcher = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [theme, setTheme] = useState(localStorage.theme ? localStorage.theme : 'emerald');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme: string) => (theme === 'emerald' ? 'forest' : 'emerald'));
  };

  return (
    <button onClick={toggleTheme} {...props}>
      {theme === 'emerald' ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          fill='currentColor'
          className='bi brightness-high-fill aspect-square'
          viewBox='0 0 16 16'
        >
          <path d='M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          fill='currentColor'
          className='bi bi-moon-fill aspect-square'
          viewBox='0 0 16 16'
        >
          <path d='M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278' />
        </svg>
      )}
    </button>
  );
};

export default Header;
