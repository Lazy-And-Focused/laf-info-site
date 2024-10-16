import { createContext, useContext, useEffect, useState } from "react";
import style from "./team-member.module.css";
import { Member } from "../../types";

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
  const useGitHub = useContext(HasGitHub);
  const [direction, setDirection] = useState([0, 0]);

  let src = "/avatars/default.png";
  if (member.avatar) src = member.avatar;
  else if (useGitHub) src = `https://github.com/${member.name}.png?size=100`;

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
        src={src}
        alt={`${member.name}'s avatar`}
        style={{
          transform: `perspective(8px) rotateX(${direction[1]}deg) rotateY(${direction[0]}deg)`,
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

const namedLinks: { href: string; name: string }[] = [
  {
    href: "https://github.com/",
    name: "GitHub",
  },
  {
    href: "https://gravatar.com/",
    name: "Gravatar",
  },
  {
    href: "https://vk.com/",
    name: "VK",
  },
  {
    href: "https://discord.com/invite",
    name: "Discord",
  },
  {
    href: "https://discord.gg/",
    name: "Discord",
  },
  {
    href: "https://t.me/",
    name: "Telegram",
  },
  { href: "http://tiktok.com/", name: "TikTok" },
  { href: "https://twitch.tv/", name: "Twitch" },
  { href: "https://www.pinterest.com/", name: "Pinterest" },
  { href: "https://steamcommunity.com/profiles/", name: "Steam" },
  { href: "https://twitter.com/", name: "Twitter" },
  {
    href: "https://www.youtube.com/",
    name: "YouTube",
  },
];
const Socials = ({ member }: { member: Member }) => {
  const useGitHub = useContext(HasGitHub);
  const [links, setLinks] = useState(member.socials ?? []);

  useEffect(() => setLinks(member.socials ?? []), [member]);

  useEffect(() => {
    if (useGitHub && !links.includes(`https://github.com/${member.name}`)) {
      setLinks((s) => [`https://github.com/${member.name}`, ...s]);
    }
  }, [links, member, useGitHub]);

  return (
    <div className={style.socials}>
      {links.map((s) => (
        <a
          href={s}
          target="_blank"
          rel="noreferrer"
          key={s}
          className={
            style.social +
            (s.startsWith("https://github.com/") ? " " + style.special : "")
          }
        >
          {namedLinks.find((l) => s.startsWith(l.href))?.name ?? "Сайт"}
        </a>
      ))}
    </div>
  );
};

export default TeamMember;
