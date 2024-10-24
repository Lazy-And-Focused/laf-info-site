import { createContext, useContext, useEffect, useState } from "react";
import style from "./team-member.module.css";
import { Member } from "../../types";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import formatLinks from "../../utils/formatLinks";
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
  const ww = useDeviceWidth();

  const [isLoading, setLoading] = useState(true);
  const useGitHub = useContext(HasGitHub);
  const [direction, setDirection] = useState([0, 0]);

  const [src, setImageSrc] = useState("/avatars/default.png");
  useEffect(() => {
    setLoading(true);

    const img = new Image();
    img.onload = () => setLoading(false);

    if (member.avatar) {
      img.src = member.avatar;
      setImageSrc(member.avatar);
    } else if (useGitHub) {
      img.src = `https://github.com/${member.name}.png?size=${
        ww > 690 ? 100 : 360
      }`;
      setImageSrc(img.src);
    } else {
      img.src = "/avatars/default.png";
      setImageSrc(img.src);
    }
  }, [member.avatar, member.name, useGitHub, ww]);

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
      {
        <img
          src={src}
          alt={`${member.name}'s avatar`}
          style={{
            transform: `perspective(${ww > 690 ? 8 : 20}px) rotateX(${
              direction[1]
            }deg) rotateY(${direction[0]}deg)`,
            filter: `opacity(${isLoading ? 0.8 : 1}) grayscale(${
              isLoading ? 1 : 0
            })`,
          }}
        />
      }
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
  const [finalLinks, setFL] = useState(formatLinks(links));

  useEffect(() => setLinks(member.socials ?? []), [member]);

  useEffect(() => {
    if (useGitHub && !links.includes(`https://github.com/${member.name}`)) {
      setLinks((link) => [`https://github.com/${member.name}`, ...link]);
    }

    setFL(formatLinks(links));
  }, [links, member, useGitHub]);

  return (
    <div className={style.socials}>
      {finalLinks.map((link) => (
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer"
          key={link.url}
          className={style.social + (link.special ? " " + style.special : "")}
        >
          {link.icon ? (
            <link.icon className={style.icon} />
          ) : (
            link?.display ?? "Сайт"
          )}
        </a>
      ))}
    </div>
  );
};

export default TeamMember;
