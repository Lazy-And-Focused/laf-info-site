import { Link, NavLink } from 'react-router-dom';
import routes from '../config/routes';
import { useState, useEffect } from 'react';
import GitHubIcon from '../assets/icons/GitHubIcon';

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
      className={`fixed inset-x-0 top-0 z-50 border-b-green-300 transition duration-500 ease-in-out dark:border-b-green-700 dark:text-slate-300 ${
        scrollY > 0 ? 'border-b-2 bg-gray-900/30 backdrop-blur-md dark:bg-gray-800/30' : ''
      }`}
    >
      <nav aria-label='Global' className='flex flex-wrap items-center justify-between p-6 lg:px-8'>
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
                `text-nowrap px-2 py-1 text-sm/6 font-medium transition-colors ${isActive ? 'rounded bg-slate-50/75 text-slate-900/85 shadow' : isPending ? 'animate-pulse' : ''} ${scrollY > 0 && !isActive ? 'text-slate-100' : ''}`
              }
            >
              {r.name}
            </NavLink>
          ))}
        </div>
        <div className='flex flex-1 justify-end'>
          <a
            href='https://github.com/Lazy-And-Focused'
            className={`flex items-center justify-center text-sm font-semibold ${scrollY > 0 ? 'text-slate-100' : ''}`}
            target='_blank'
            rel='noreferrer'
          >
            <span className='hidden sm:inline'>Наш GitHub</span>
            <GitHubIcon className='ml-2 h-5 w-5' />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
