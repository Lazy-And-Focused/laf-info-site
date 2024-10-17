import { createContext, useContext, useEffect, useState } from "react";
import style from "./team-member.module.css";
import { Member, SocialLink } from "../../types";
import namedLinks from "../../config/socialsLinks";
const HasGitHub = createContext(false);

/**
 * Компонент, возвращающий карточку участника
 * @param {Member} member Объект с информацией об участнике команды
 */
const TeamMember = ({ member }: { member: Member }) => {
  const ngh = !member.meta?.includes("no-gh") ?? false;
  return (
    <HasGitHub.Provider value={ngh}>
      <div className={style.container}>
        <Avatar member={member} />
        <Information member={member} />
      </div>
    </HasGitHub.Provider>
  );
};

const Avatar = ({ member }: { member: Member }) => {
  const [ww, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => setWindowWidth(window.innerWidth);

  const useGitHub = useContext(HasGitHub);
  const [direction, setDirection] = useState([0, 0]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let src = "/avatars/default.png";
  if (member.avatar) src = member.avatar;
  else if (useGitHub)
    src = `https://github.com/${member.name}.png?size=${ww > 690 ? 100 : 360}`;

  const rotate = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const rotateX = ww < 690 ? 0 : (clientX - centerX) / (width / 2);
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
        src={src}
        alt={`${member.name}'s avatar`}
        style={{
          transform: `perspective(${ww > 690 ? 8 : 20}px) rotateX(${
            direction[1]
          }deg) rotateY(${direction[0]}deg)`,
        }}
      />
    </div>
  );
};

const Information = ({ member }: { member: Member }) => {
  // const useGitHub = useContext(HasGitHub);

  return (
    <div className={style.info}>
      {/* {!useGitHub && (
        <span className={`${style.hint} ${style.warning}`}>
          Этот пользователь не имеет GitHub профиль!
        </span>
      )} */}

      <p className={style.title}>
        {member.name} <span>{member.role}</span>
      </p>

      <Socials member={member} />
      <p className={style.description}>
        {member.description !== ""
          ? member.description
          : "Один из участников LAF."}
      </p>
    </div>
  );
};

const Socials = ({ member }: { member: Member }) => {
  const useGitHub = useContext(HasGitHub);
  const [links, setLinks] = useState(member.socials ?? []);

  useEffect(() => setLinks(member.socials ?? []), [member]);

  useEffect(() => {
    if (useGitHub && !links.includes(`https://github.com/${member.name}`)) {
      setLinks((link) => [`https://github.com/${member.name}`, ...link]);
    }
  }, [links, member, useGitHub]);

  return (
    <div className={style.socials}>
      {links.map((link) => {
        const named = namedLinks.find((nl: SocialLink) =>
          link.startsWith(nl.href)
        );
        return (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            key={link}
            className={
              style.social +
              (link.startsWith("https://github.com/")
                ? " " + style.special
                : "")
            }
          >
            {named?.icon ? (
              <named.icon className={style.icon} />
            ) : (
              named?.name ?? "Сайт"
            )}
          </a>
        );
      })}
    </div>
  );
};

export default TeamMember;
