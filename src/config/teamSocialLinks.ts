import { formatLinks } from '../utils';

/**
 * Ссылки социальны сетей команды.
 */
const teamSocialLinks: string[] = [
  '(personal) https://laf-info.netlify.app/',
  'https://patreon.com/LazyAndFocused',
  'https://t.me/laf_love',
  'https://github.com/Lazy-And-Focused',
];

const result = formatLinks(teamSocialLinks);

export default result;
