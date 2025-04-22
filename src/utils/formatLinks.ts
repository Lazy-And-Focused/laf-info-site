import WebsiteIcon from '../assets/icons/WebsiteIcon';
import listSocialLinks from '../config/listSocialLinks';
import { SocialLink } from '../types';

/**
 * Функция, преобразующая строковые ссылки в массив SocialLink[]
 */
export const formatLinks = (links: string[]): SocialLink[] => {
  const special = ['(personal)', 'https://github.com/'];
  return links
    .map((l, i) => {
      const link = listSocialLinks.find((nl) => l.startsWith(nl.href));
      return {
        name: link?.name || `link_user_${i}`,
        href: l.replace(/\([a-z]+\)/g, '').trim(),
        icon: link?.icon || WebsiteIcon,
        special: special.some((s) => l.startsWith(s)),
      };
    })
    .sort((a, b) => (a.special === b.special ? 0 : a.special ? -1 : 1));
};

export default { formatLinks };
