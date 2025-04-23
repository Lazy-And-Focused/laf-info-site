import { BaseMember, Member } from '../types';
import { formatLinks } from '../utils';

/**
 * Массив с именами пользователей GitHub, которые состоят в команде LAF.
 */
const originalTeam: BaseMember[] = [
  {
    tag: 'lanvalird',
    name: 'Valentin Bird',
    role: 'Team Lead, Frontend-разработчик',
    description:
      'Привет! Я интересовался программированием с 11 лет, в 13 начал изучать свой первый язык – PHP, а в данный момент занимаюсь веб-разработкой около трёх лет.\nПрограммирование для меня – не просто очередное хобби, как дизайн сайтов или писательства, а одно из моих любимых занятий, точнее веб-разработка, с которой я бы хотел связать свою дальнейшую жизнь.',
    socials: [
      '(personal) https://lanvalird.netlify.app/',
      'https://github.com/lanvalird',
      'https://gravatar.com/lanvalird',
      'https://t.me/lanvalird',
      'https://vk.com/lanvalird',
      'https://pinterest.com/acula_1/',
      'https://twitch.tv/acula_1',
      'https://tiktok.com/@acula_1',
    ],
  },
  {
    tag: 'fockusty',
    name: 'FOCKUSTY',
    role: 'CEO, Backend-разработчик',
    description:
      'Почему я начал изучать программирование? Всё просто, я просто начал, по приколу, да, вот такой вот я. На август 2024 года мне 15 лет. Мой первый язык - JavaScript, сначала я изучал HTML & CSS (Все мы знаем, что они не ЯП), а потом переключился на JS. Я нашел свой интерес в программировании. Раньше я снимал видео на платформу YouTube, но мне в один момент надоело и я начал изучать веб. Я начал изучать программирование с 13 лет (2023 год в июне).',
    socials: [
      '(personal) https://fockusty.netlify.app/',
      'https://github.com/FOCKUSTY',
      'https://gravatar.com/fockusty',
      'https://www.youtube.com/channel/UCONoOdImtgCZKih1nxDjxDg',
      'https://vk.com/fockusty',
      'https://t.me/FOCKUSTY',
      'https://twitch.tv/FOCKUSTY',
      'https://steamcommunity.com/profiles/76561198999835541/',
      'https://twitter.com/fockusty',
      'https://pinterest.com/fockusty/',
    ],
  },
  {
    tag: 'omonillo',
    name: 'Омонилло',
    role: 'Промоутер',
    avatar: '/images/avatars/omonillo.png',
    description:
      'Меня зовут Азамжанов Омонилло, а с остальными разработчиками вы, скорее всего, уже познакомились.\nМы активно работаем над проектами, которые позволяют нам улучшить наши навыки и применить полученные знания на практике.',
  },
  {
    tag: 'beyz1k',
    name: 'beyz1k',
    role: 'Промоутер',
    description:
      'Всем привет меня зовут Эмиль, я будущий промоутер и начинающий фронтенд-разработчик <3',
    socials: ['https://github.com/beyz1k'],
  },
  {
    tag: 'adelya',
    name: 'Adelya',
    role: 'Менеджер',
    description: '',
  },
];

const team: Member[] = originalTeam.map<Member>((p) => ({
  ...p,
  socials: p.socials ? formatLinks(p.socials) : [],
}));

export default team;
