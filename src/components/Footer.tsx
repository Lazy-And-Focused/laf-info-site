import { Link } from 'react-router-dom';

/**
 * Подвал сайта
 */
const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-primary/75 bg-neutral/20 p-4 backdrop-blur-md transition duration-500 ease-in-out'>
      <nav
        className='container mx-auto flex flex-wrap items-center justify-center px-4 py-2 sm:justify-start lg:px-8'
        aria-label='Global'
      >
        <Link
          to='/about/#credits'
          className='inline-flex items-center gap-2 text-nowrap px-2 py-1 text-sm/6 font-medium transition-colors hover:animate-pulse'
        >
          Авторские права
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
