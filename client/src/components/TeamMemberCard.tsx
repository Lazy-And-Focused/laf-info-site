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
const TeamMemberCard = ({ member, type }: { member: Member; type?: 'default' | 'full' }) => {
  const hasGitHub =
    member.socials.some((link) => link.href.startsWith('https://github.com/')) || false;

  return (
    <HasGitHub.Provider value={hasGitHub}>
      {type === 'full' ? <FullVariant member={member} /> : <DefaultVariant member={member} />}
    </HasGitHub.Provider>
  );
};

const DefaultVariant = ({ member }: { member: Member }) => {
  const hasGitHub = useContext(HasGitHub);

  const [avatarSrc, setAvatarSrc] = useState('/images/avatars/default.png');
  useEffect(() => {
    if (member.avatar) {
      setAvatarSrc(member.avatar);
    } else if (hasGitHub) {
      setAvatarSrc(`https://github.com/${member.tag}.png?size=120`);
    } else {
      setAvatarSrc('/images/avatars/default.png');
    }
  }, [member.avatar, member.tag, hasGitHub]);

  return (
    <div className={`flex items-center gap-x-6 rounded bg-green-50 p-2 dark:bg-slate-900`}>
      <CardAvatar src={avatarSrc} alt={`${member.name}'s avatar`} className='aspect-ratio w-24' />
      <div className='mr-2 w-full text-end'>
        <h3 className='align-center flex flex-row items-center justify-end gap-x-2 text-base/7 font-semibold tracking-tight text-gray-900 dark:text-gray-100'>
          {member.name}
          {hasGitHub ? (
            <a
              href={
                member.socials.find((link) => link.href.startsWith('https://github.com/'))?.href
              }
              target='_blank'
              rel='noreferrer'
              className='md:text-md dark:text-grenn-400 text-sm/6 font-semibold text-green-400 dark:text-green-700'
            >
              <GitHubIcon width={16} height={16} />
            </a>
          ) : null}
        </h3>
        <p className='text-sm/6 font-semibold text-green-600 dark:text-green-400'>{member.role}</p>
      </div>
    </div>
  );
};

const FullVariant = ({ member }: { member: Member }) => {
  const hasSocials = member.socials.length !== 0;
  const hasGitHub = useContext(HasGitHub);
  // For social links
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [avatarSrc, setAvatarSrc] = useState('/images/avatars/default.png');
  useEffect(() => {
    if (member.avatar) {
      setAvatarSrc(member.avatar);
    } else if (hasGitHub) {
      setAvatarSrc(`https://github.com/${member.tag}.png?size=360`);
    } else {
      setAvatarSrc('/images/avatars/default.png');
    }
  }, [member.avatar, member.tag, hasGitHub]);

  return (
    <div className='relative max-w-md rounded-md bg-green-50 px-2 py-4 text-center dark:bg-slate-900'>
      {/* HEADER */}
      <p className='dark:text-green:400 absolute left-0 right-0 top-0 rounded-t-md border-2 border-green-200 border-b-green-600 bg-green-100 px-1 py-2 text-xs font-semibold text-green-600 dark:border-green-800 dark:border-b-green-400 dark:bg-green-900'>
        {member.role}
      </p>

      {/* FOOTER */}
      <p className='absolute bottom-0 left-0 right-0 h-6 rounded-b-md border-2 border-green-200 border-t-green-600 bg-green-100 font-semibold text-green-600 dark:border-green-800 dark:border-b-green-400 dark:bg-green-900' />

      {/* CONTENT */}
      <div className='flex w-full flex-col gap-y-4 py-6'>
        <h3 className='mt-2 flex flex-col items-center text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100'>
          {member.name}
        </h3>

        <div className={`relative px-4 ${!hasSocials ? 'mb-12' : ''}`}>
          <CardAvatar
            src={avatarSrc}
            alt={`${member.name}'s avatar`}
            className='aspect-ratio w-full'
          />
          {hasSocials && (
            <div className='absolute bottom-3 left-3 right-3 flex items-center justify-center'>
              <ul className='flex max-w-max flex-row items-center justify-center gap-2 rounded-full border-2 border-green-200/25 bg-green-100/25 p-2 backdrop-blur-md dark:border-green-800/25 dark:bg-green-900/25'>
                {member.socials.slice(0, 5).map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target='_blank'
                      rel='noreferrer'
                      aria-label={`Ссылка на ${s.name}`}
                      title={s.name}
                      className='md:text-md text-sm/6 font-semibold text-green-400 dark:text-green-600'
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
              className='flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-md px-3 py-1 hover:bg-green-100 dark:hover:bg-slate-700'
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <ListIcon /> Все ссылки
            </button>
            {dropdownOpen && (
              <div className='absolute bottom-0 right-0 top-auto z-10 mt-1 w-full min-w-min rounded-md border bg-white shadow-lg dark:bg-slate-800'>
                {member.socials.map((s) => (
                  <a
                    href={s.href}
                    target='_blank'
                    rel='noreferrer'
                    key={s.name}
                    className='relative flex w-full min-w-max items-center justify-start gap-2 overflow-hidden text-ellipsis text-nowrap px-4 py-2 text-left first:rounded-t-md hover:bg-gray-100 dark:hover:bg-gray-700'
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
                  className='relative flex w-full min-w-max items-center gap-2 overflow-hidden text-ellipsis text-nowrap rounded-b-md px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700'
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

        <div className='w-full text-pretty rounded border-2 border-green-100 bg-white p-2 text-start text-sm font-medium text-gray-700 dark:border-green-900 dark:bg-slate-800 dark:text-gray-300'>
          {member.description.split('\n').map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
