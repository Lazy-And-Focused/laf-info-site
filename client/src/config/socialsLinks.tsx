import DiscordIcon from '../assets/icons/DiscordIcon';
import GravatarIcon from '../assets/icons/GravatarIcon';
import GitHubIcon from '../assets/icons/GitHubIcon';
import TelegramIcon from '../assets/icons/TelegramIcon';
import WebsiteIcon from '../assets/icons/WebsiteIcon';
import YouTubeIcon from '../assets/icons/YouTubeIcon';

import { SocialLink } from '../types';
import TikTokIcon from '../assets/icons/TikTokIcon';
import TwitchIcon from '../assets/icons/TwitchIcon';
import PinterestIcon from '../assets/icons/PinterestIcon';
import TwitterIcon from '../assets/icons/TwitterIcon';
import VKIcon from '../assets/icons/VKIcon';

const namedLinks: SocialLink[] = [
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
    href: 'https://twitter.com/',
    name: 'Twitter',
    icon: TwitterIcon,
  },
  {
    href: 'https://www.youtube.com/',
    name: 'YouTube',
    icon: YouTubeIcon,
  },
];
export default namedLinks;
