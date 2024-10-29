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
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export default App;
