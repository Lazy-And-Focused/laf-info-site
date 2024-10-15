import { useState } from "react";
import style from "./team-member.module.css";
import { Member } from "../../config/team";

/**
 * Компонент, возвращающий карточку участника
 * @param member Имя пользователя GitHub
 */
const TeamMember = ({ member }: { member: Member }) => {
  return (
    <div className={style.container}>
      <Avatar member={member.name} />
      <div className={style.info}>
        <p className={style.title}>
          {member.name} <span>{member.role}</span>
        </p>
        <p className={style.description}>
          {member.description !== ""
            ? member.description
            : "Один из участников LAF."}
        </p>
      </div>
    </div>
  );
};

const Avatar = ({ member }: { member: string }) => {
  const [direction, setDirection] = useState([0, 0]);

  const rotate = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const rotateX = (clientX - centerX) / (width / 2);
    const rotateY = -(clientY - centerY) / (height / 2);

    setDirection([rotateX, rotateY]);
  };

  return (
    <div
      className={style.avatar}
      onMouseMove={rotate}
      onMouseOut={() => setDirection([0, 0])}
    >
      <img
        src={`https://github.com/${member}.png?size=100`}
        alt={`${member}'s avatar`}
        style={{
          transform: `perspective(10px) rotateX(${direction[1]}deg) rotateY(${direction[0]}deg)`,
        }}
      />
    </div>
  );
};

export default TeamMember;
