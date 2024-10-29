import { createContext, useEffect, useState } from 'react';
import { Member } from '../types';
import CardAvatar from './CardAvatar';
import useDeviceWidth from '../hooks/useDeviceWidth';
import GitHubIcon from '../assets/icons/GutHubIcon';
const HasGitHub = createContext(false);

/**
 * Компонент, возвращающий карточку участника
 * @param {Member} member Объект с информацией об участнике команды
 */
const TeamMemberCard = ({ member }: { member: Member }) => {
  const ww = useDeviceWidth();
  const ngh = !member.meta?.includes('no-gh') || false;

  const [avatarSrc, setAvatarSrc] = useState('/avatars/default.png');
  useEffect(() => {
    if (member.avatar) {
      setAvatarSrc(member.avatar);
    } else if (ngh) {
      setAvatarSrc(`https://github.com/${member.name}.png?size=${ww > 690 ? 100 : 360}`);
    } else {
      setAvatarSrc('/avatars/default.png');
    }
  }, [member.avatar, member.name, ngh, ww]);

  return (
    <HasGitHub.Provider value={ngh}>
      <div className={`flex items-center gap-x-6 rounded bg-cyan-100 p-2`}>
        <CardAvatar src={avatarSrc} alt={`${member.name}'s avatar`} className='aspect-ratio w-24' />
        <div className='mr-2 w-full text-end'>
          <h3 className='align-center flex flex-row items-center justify-end gap-x-2 text-base/7 font-semibold tracking-tight text-gray-900'>
            {member.name}
            {ngh ? (
              <a
                href={`https://github.com/${member.name}`}
                target='_blank'
                rel='noreferrer'
                className='md:text-md text-sm/6 font-semibold text-indigo-600'
              >
                <GitHubIcon width={16} height={16} />
              </a>
            ) : null}
          </h3>
          <p className='text-sm/6 font-semibold text-indigo-600'>{member.role}</p>
        </div>
      </div>
    </HasGitHub.Provider>
  );
};

export default TeamMemberCard;
