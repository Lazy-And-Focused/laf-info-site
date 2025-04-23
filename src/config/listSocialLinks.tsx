import type { SocialLink } from '../types';

import DiscordIcon from '../assets/icons/DiscordIcon';
import GitHubIcon from '../assets/icons/GitHubIcon';
import GravatarIcon from '../assets/icons/GravatarIcon';
import TelegramIcon from '../assets/icons/TelegramIcon';
import WebsiteIcon from '../assets/icons/WebsiteIcon';
import YouTubeIcon from '../assets/icons/YouTubeIcon';
import PinterestIcon from '../assets/icons/PinterestIcon';
import TikTokIcon from '../assets/icons/TikTokIcon';
import TwitchIcon from '../assets/icons/TwitchIcon';
import TwitterIcon from '../assets/icons/TwitterIcon';
import VKIcon from '../assets/icons/VKIcon';

/**
 * Массив из объектов типа SocialLink. Каждый элемент содержит href (адрес сервиса), name (имя сервиса) и icon (иконка, React-компонент)
 */
const listSocialLinks: SocialLink[] = [
  {
    href: '(personal) ',
    name: 'Персональный сайт',
    icon: WebsiteIcon,
  },
  {
    href: 'https://github.com/',
    name: 'GitHub',
    icon: GitHubIcon,
  },
  {
    href: 'https://gravatar.com/',
    name: 'Gravatar',
    icon: GravatarIcon,
  },
  {
    href: 'https://vk.com/',
    name: 'VK',
    icon: VKIcon,
  },
  {
    href: 'https://discord.com/invite',
    name: 'Discord',
    icon: DiscordIcon,
  },
  {
    href: 'https://discord.gg/',
    name: 'Discord',
    icon: DiscordIcon,
  },
  {
    href: 'https://t.me/',
    name: 'Telegram',
    icon: TelegramIcon,
  },
  {
    href: 'https://tiktok.com/',
    name: 'TikTok',
    icon: TikTokIcon,
  },
  {
    href: 'https://twitch.tv/',
    name: 'Twitch',
    icon: TwitchIcon,
  },
  {
    href: 'https://pinterest.com/',
    name: 'Pinterest',
    icon: PinterestIcon,
  },
  {
    href: 'https://steamcommunity.com/profiles/',
    name: 'Steam',
  },
  {
    href: 'https://patreon.com/',
    name: 'Patreon',
  },
  {
    href: 'https://twitter.com/',
    name: 'Twitter',
    icon: TwitterIcon,
  },
  {
    href: 'https://bsky.app/profile/',
    name: 'Bluesky',
  },
  {
    href: 'https://www.youtube.com/',
    name: 'YouTube',
    icon: YouTubeIcon,
  },
];
export default listSocialLinks;
