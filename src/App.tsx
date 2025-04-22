import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './pages/Loading';

/**
 * Корневой компонент приложения
 */
const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className='base-100 base-content h-full min-h-screen'>
        <Header />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

export default App;
