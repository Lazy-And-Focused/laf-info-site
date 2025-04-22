import { formatLinks } from '../utils';

/**
 * Ссылки социальны сетей команды.
 */
const teamSocialLinks: string[] = [
  '(personal) https://laf-info.netlify.app/',
  'https://github.com/Lazy-And-Focused',
  'https://t.me/laf_love',
];

const result = formatLinks(teamSocialLinks);

export default result;
