import style from "./team-member.module.css";

/**
 * Компонент, возвращающий карточку участника
 * @param member Имя пользователя GitHub
 */
const TeamMember = ({ member }: { member: string }) => {
  return (
    <a
      href={`https://github.com/${member}`}
      className={style.avatar}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`https://github.com/${member}.png?size=100`}
        alt={`${member}'s avatar`}
      />
      <span>{member}'s Github</span>
    </a>
  );
};

export default TeamMember;
