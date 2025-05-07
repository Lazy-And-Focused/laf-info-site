import clsx from 'clsx';
import { useState, useEffect } from 'react';

const ThemeSwitcher = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [matches, setMatches] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.theme ?? (matches ? 'forest' : 'emerald'),
  );

  useEffect(() => {
    const mm = window.matchMedia('(prefers-color-scheme: dark)');

    const listener = () => setMatches(mm.matches);
    mm.addEventListener('change', listener);

    return () => mm.removeEventListener('change', listener);
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      currentTheme === 'system' ? (matches ? 'forest' : 'emerald') : currentTheme,
    );
    localStorage.theme = currentTheme;
  }, [matches, currentTheme]);

  const toggleTheme = () => {
    const themes = ['system', 'emerald', 'forest'];

    setCurrentTheme(themes[(themes.indexOf(currentTheme) + 1) % themes.length]);
  };

  const icon =
    currentTheme === 'system' ? (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        fill='currentColor'
        className='bi bi-brilliance'
        viewBox='0 0 16 16'
      >
        <path d='M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7' />
      </svg>
    ) : (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        fill='currentColor'
        className={clsx(
          'bi',
          currentTheme === 'emerald' ? 'bi-brightness-high-fill' : 'bi-moon-fill',
        )}
        viewBox='0 0 16 16'
      >
        {currentTheme === 'emerald' ? (
          <path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708' />
        ) : (
          <path d='M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278' />
        )}
      </svg>
    );

  return (
    <button onClick={toggleTheme} {...props} aria-label='Переключить тему'>
      {icon}
    </button>
  );
};

export default ThemeSwitcher;
