import { useState } from "react";
import style from "./browser.module.css";

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

  return (
    <div className={style.container}>
      <div className={style.tabs}>
        <div className={style.title}>{title ?? "Браузер"}</div>
        {tabs.map((t) => (
          <div
            key={t.name}
            className={style.tab + (openTab === t ? " " + style.active : "")}
            onClick={() => setOpenTab(t)}
          >
            {t.favicon && (
              <span className={style.favicon}>
                <img src={t.favicon} alt={t.name} />
              </span>
            )}
            {t.name}
          </div>
        ))}
      </div>
      <div className={style.content}>
        {openTab?.element ?? children ?? "Вкладка не выбрана"}
      </div>
    </div>
  );
};

export default Browser;
