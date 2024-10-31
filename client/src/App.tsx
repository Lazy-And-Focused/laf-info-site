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
      <div className='h-screen'>
        <Outlet />
      </div>
    </>
  );
};

const ScrollToTop = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return null;
};

export default App;
