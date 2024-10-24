// ЭТОЙ СТРАНИЦЕ ТРЕБУЕТСЯ РЕФАКТОРИНГ

import TeamMember from "../components/4pages/TeamMember";
import Browser from "../components/Browser";
import team from "../config/team";
import style from "./home.module.css";

const Home = () => {
  return (
    <main className={style.main}>
      <p className={style.lore}>
        Команда молодых, очень ленивых, но увлеченных работой энтузиастов
        движется к вершинам этого мира.
      </p>

      <Browser
        title="LAF-ники"
        tabs={team.map((t) => ({
          name: t.name,
          favicon: t.meta?.includes("no-gh")
            ? "logo.png"
            : `https://github.com/${t.name}.png?size=14`,
          element: <TeamMember member={t} />,
        }))}
      >
        <p
          style={{
            textAlign: "center",
          }}
        >
          Пожалуйста, выберите одного из участников в верхнем списке.
        </p>
        <TeamMember
          member={{
            name: "LAF",
            description: "Пользователь не выбран и теперь тут пустышка",
            role: "Администратор",
            meta: ["no-gh"],
          }}
        />
      </Browser>
    </main>
  );
};
export default Home;
