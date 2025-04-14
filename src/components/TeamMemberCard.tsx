import { createContext, useContext, useEffect, useState } from 'react';
import { Member } from '../types';
import CardAvatar from './CardAvatar';
import GitHubIcon from '../assets/icons/GitHubIcon';
import WebsiteIcon from '../assets/icons/WebsiteIcon';
import ListIcon from '../assets/icons/ListIcon';
const HasGitHub = createContext(false);

/**
 * Компонент, возвращающий карточку участника
 * @param {Member} member Объект с информацией об участнике команды
 */
const TeamMemberCard = ({
  member,
  type = 'default',
}: {
  member: Member;
  type?: 'default' | 'full';
}) => {
  const hasGitHub =
    member.socials.some((link) => link.href.startsWith('https://github.com/')) || false;

  const [avatarSrc, setAvatarSrc] = useState(getAvatarUrl(member, hasGitHub));

  useEffect(() => setAvatarSrc(getAvatarUrl(member, hasGitHub)), [member, hasGitHub]);

  return (
    <HasGitHub.Provider value={hasGitHub}>
      {type === 'full' ? (
        <FullVariant member={member} avatar={avatarSrc} />
      ) : (
        <DefaultVariant member={member} avatar={avatarSrc} />
      )}
    </HasGitHub.Provider>
  );
};

const getAvatarUrl = (member: Member, hasGitHub: boolean) => {
  if (member.avatar) {
    return member.avatar;
  } else if (hasGitHub) {
    return `https://github.com/${member.tag}.png?size=360`;
  }
  return '/images/avatars/default.png';
};

const DefaultVariant = ({ member, avatar }: { member: Member; avatar: string }) => {
  const hasGitHub = useContext(HasGitHub);

  return (
    <div className={`flex items-center gap-x-6 rounded bg-primary/15 p-2`}>
      <CardAvatar src={avatar} alt={`${member.name}'s avatar`} className='aspect-square w-24' />
      <div className='mr-2 w-full text-end'>
        <h3 className='align-center flex flex-row items-center justify-end gap-x-2 text-base/7 font-semibold tracking-tight text-base-content'>
          {member.name}
          {hasGitHub ? (
            <a
              href={
                member.socials.find((link) => link.href.startsWith('https://github.com/'))?.href
              }
              target='_blank'
              rel='noreferrer'
              className='md:text-md dark:text-grenn-400 text-sm/6 font-semibold text-primary'
              aria-label={`Ссылка на GitHub пользователя ${member.name}`}
            >
              <GitHubIcon width={16} height={16} />
            </a>
          ) : null}
        </h3>
        <p className='text-sm/6 font-semibold text-primary/75'>{member.role}</p>
      </div>
    </div>
  );
};

const FullVariant = ({ member, avatar }: { member: Member; avatar: string }) => {
  const hasSocials = member.socials.length !== 0;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='relative w-full max-w-md rounded-md bg-primary/15 px-2 py-4 text-center'>
      {/* HEADER */}
      <p className='absolute left-0 right-0 top-0 rounded-t-md border-2 border-primary/20 border-b-primary/60 bg-primary/10 px-1 py-2 text-xs font-semibold text-primary/85'>
        {member.role}
      </p>

      {/* FOOTER */}
      <p className='absolute bottom-0 left-0 right-0 h-6 rounded-b-md border-2 border-primary/20 border-t-primary/60 bg-primary/10 font-semibold text-primary/85' />

      {/* CONTENT */}
      <div className='flex w-full flex-col gap-y-4 py-6'>
        <h3 className='mt-2 flex flex-col items-center text-lg font-semibold tracking-tight text-base-content'>
          {member.name}
        </h3>

        <div className={`relative px-4 ${!hasSocials ? 'mb-12' : ''}`}>
          <CardAvatar
            src={avatar}
            alt={`${member.name}'s avatar`}
            className='aspect-square h-auto w-full'
          />
          {hasSocials && (
            <div className='absolute bottom-3 left-3 right-3 flex items-center justify-center'>
              <ul className='flex max-w-max flex-row items-center justify-center gap-2 rounded-full border-2 border-primary/25 bg-primary/55 p-2 backdrop-blur-md'>
                {member.socials.slice(0, 5).map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target='_blank'
                      rel='noreferrer'
                      aria-label={`Ссылка на ${s.name} пользователя ${member.name}`}
                      title={s.name}
                      className='md:text-md text-base-100/96 text-sm/6 font-semibold'
                    >
                      {s.icon ? (
                        <s.icon width={16} height={16} />
                      ) : (
                        <WebsiteIcon width={16} height={16} />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {hasSocials && (
          <div className='relative'>
            <button
              className='flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-md bg-primary/15 px-3 py-1 text-base-content/85 hover:bg-primary/20'
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <ListIcon /> Все ссылки
            </button>
            {dropdownOpen && (
              <div className='absolute bottom-0 right-0 top-auto z-10 mt-1 w-full min-w-min rounded-md border border-base-content bg-base-100 text-base-content backdrop-blur-sm'>
                {member.socials.map((s) => (
                  <a
                    href={s.href}
                    target='_blank'
                    rel='noreferrer'
                    key={s.name}
                    className='relative flex w-full min-w-max items-center justify-start gap-2 overflow-hidden text-ellipsis text-nowrap px-4 py-2 text-left first:rounded-t-md hover:bg-base-300/50'
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    {s.icon && (
                      <span className='flex aspect-square h-6 items-center justify-start overflow-clip rounded'>
                        <s.icon width={16} height={16} />
                      </span>
                    )}
                    {s.name}
                  </a>
                ))}
                <button
                  className='relative flex w-full min-w-max items-center gap-2 overflow-hidden text-ellipsis text-nowrap rounded-b-md px-4 py-2 text-left hover:bg-base-300/50'
                  onClick={() => {
                    setDropdownOpen(false);
                  }}
                >
                  <span className='block aspect-square h-6 overflow-clip rounded' />
                  Закрыть
                </button>
              </div>
            )}
          </div>
        )}

        <div className='w-full text-pretty rounded border-2 border-primary/10 bg-primary/20 p-2 text-start indent-2 text-sm font-medium text-base-content/90'>
          {member.description.split('\n').map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
