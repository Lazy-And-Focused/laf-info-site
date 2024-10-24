import DiscordIcon from "../assets/icons/DiscordIcon";
import GravatarIcon from "../assets/icons/GravatarIcon";
import GitHubIcon from "../assets/icons/GutHubIcon";
import TelegramIcon from "../assets/icons/TelegramIcon";
import WebsiteIcon from "../assets/icons/WebsiteIcon";
import YouTubeIcon from "../assets/icons/YouTubeIcon";

import { SocialLink } from "../types";

const namedLinks: SocialLink[] = [
  {
    href: "(personal) ",
    name: "Персональный сайт",
    icon: WebsiteIcon,
  },
  {
    href: "https://github.com/",
    name: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://gravatar.com/",
    name: "Gravatar",
    icon: GravatarIcon,
  },
  {
    href: "https://vk.com/",
    name: "VK",
  },
  {
    href: "https://discord.com/invite",
    name: "Discord",
    icon: DiscordIcon,
  },
  {
    href: "https://discord.gg/",
    name: "Discord",
    icon: DiscordIcon,
  },
  {
    href: "https://t.me/",
    name: "Telegram",
    icon: TelegramIcon,
  },
  {
    href: "http://tiktok.com/",
    name: "TikTok",
  },
  {
    href: "https://twitch.tv/",
    name: "Twitch",
  },
  {
    href: "https://pinterest.com/",
    name: "Pinterest",
  },
  {
    href: "https://steamcommunity.com/profiles/",
    name: "Steam",
  },
  {
    href: "https://twitter.com/",
    name: "Twitter",
  },
  {
    href: "https://www.youtube.com/",
    name: "YouTube",
    icon: YouTubeIcon,
  },
];
export default namedLinks;
