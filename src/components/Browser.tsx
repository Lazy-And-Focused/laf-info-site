import { useState } from 'react';
import ListIcon from '../assets/icons/ListIcon';

type Tab = { name: string; favicon?: string; element: React.ReactNode };

/**
 * Компонент в стилистике web-обозревателя
 *
 * @param title Заголовок окна
 * @param tabs Вкладки
 *
 * @example <Browser title="Браузер" tabs={tabs} />
 * @example <Browser title="Браузер" tabs={tabs}>Заполнитель, если не выбрана вкладка</Browser>
 */
const Browser = ({
  title,
  tabs,
  children,
}: {
  title?: string;
  tabs: Tab[];
  children?: React.ReactNode;
}) => {
  const [openTab, setOpenTab] = useState<Tab | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='flex min-h-[400px] min-w-full flex-col rounded-lg bg-white shadow-lg dark:bg-gray-900 md:min-w-[600px]'>
      <div className='flex flex-row items-center justify-between gap-3 rounded-t-lg border-b border-gray-200 bg-emerald-200/15 px-4 py-2 dark:border-gray-800 dark:bg-emerald-800/15'>
        <div className={'text-lg font-semibold text-gray-900 dark:text-gray-200'}>
          {title ?? 'Браузер'}
        </div>
        <div className='relative'>
          <button
            className='flex min-w-40 max-w-max cursor-pointer items-center justify-end gap-x-2 rounded-md px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-900'
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {openTab ? openTab.name : 'Выберите вкладку'}
            <ListIcon />
          </button>
          {dropdownOpen && (
            <div className='absolute right-0 z-10 mt-1 w-full min-w-min overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900'>
              <button
                className={`w-full text-ellipsis text-nowrap px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  openTab === null ? 'bg-gray-100 dark:bg-gray-800' : ''
                }`}
                onClick={() => {
                  setOpenTab(null);
                  setDropdownOpen(false);
                }}
              >
                Не выбрано
              </button>
              {tabs.map((t) => (
                <button
                  key={t.name}
                  className={`relative flex w-full min-w-max items-center gap-4 overflow-hidden text-ellipsis text-nowrap px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    openTab === t ? 'bg-gray-100 dark:bg-gray-800' : ''
                  }`}
                  onClick={() => {
                    setOpenTab(t);
                    setDropdownOpen(false);
                  }}
                >
                  {t.favicon && (
                    <span className='block aspect-square h-6 overflow-clip rounded'>
                      <img src={t.favicon} alt={t.name} className='h-full w-full' />
                    </span>
                  )}
                  {t.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='flex-1 overflow-y-auto p-4 text-gray-900 dark:text-gray-200'>
        {openTab?.element ?? children ?? 'Вкладка не выбрана'}
      </div>
    </div>
  );
};

export default Browser;
