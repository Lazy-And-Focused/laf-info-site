import { Link } from 'react-router-dom';

/**
 * Подвал сайта
 */
const Footer = () => {
  return (
    <footer
      className={
        'w-full border-t-2 border-t-green-300 bg-gray-900/30 dark:border-t-green-700 dark:bg-gray-800/30 dark:text-slate-300'
      }
    >
      <nav aria-label='Global' className='flex flex-wrap items-center justify-between p-6 lg:px-8'>
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
