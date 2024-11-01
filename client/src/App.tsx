import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { useEffect } from 'react';

/**
 * Корневой компонент приложения
 */
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className='h-full min-h-min bg-slate-50 text-zinc-950 dark:bg-slate-950 dark:text-zinc-50'>
        <Outlet />
      </div>
    </>
  );
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

export default App;
