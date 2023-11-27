import { WorkHistoryItemProps } from '@/components/features/WorkHistoryItem/types';

export const WORK_HISTORY_ITEMS: WorkHistoryItemProps[] = [
  {
    yearStart: 2021,
    yearEnd: 2023,
    employer: 'Statespace (Aimlabs)',
    employerImgSrc: '/assets/aimlabs-logo.svg',
    employerImgAlt: 'Aimlabs logo',
    positionTitle: 'Sr Frontend Engineer',
    description:
      'Created and maintained several applications including a greenfield Next.js app, a CSR React app, and a Vue/PHP app to support the core Aim Trainer Video Game on Steam. Among the features I worked on, I created 2 separate design systems, optimized our SEO and core web vital performance, and implemented analytics, marketing email opt-in flows, personal video feeds, a custom currency system, and more.',
    skills: [
      'React',
      'Typescript',
      'Next.js',
      'GraphQL',
      'Apollo',
      'SEO optimization',
      'Design System',
      'Vue',
      'PHP',
      'AWS',
    ],
  },
  {
    yearStart: 2019,
    yearEnd: 2021,
    employer: 'mPulse Mobile',
    employerImgSrc: '/assets/mpulse_mobile_logo.webp',
    employerImgAlt: 'mPulse Mobile logo',
    positionTitle: 'Software Engineer',
    description:
      'Worked on an existing internal tool to help our client success team send and manage messaging campaigns for clients. Built with React/Redux on the FE and Python/Flask at the API level, I helped maintain and contribute to several features and created an internal Design System NPM package.',
    skills: [
      'React',
      'Redux',
      'Typescript',
      'Design System',
      'Python',
      'Flask',
      'Django',
      'Postgres',
      'Jest',
    ],
  },
  {
    yearStart: 2019,
    yearEnd: 2019,
    employer: 'Reactionaries - (Hookd)',
    employerImgSrc: '/assets/reactionaries_logo.webp',
    employerImgAlt: 'Reactionaries logo',
    positionTitle: 'Software Engineer',
    description:
      'Collaborated with a group of other React specialists to help create an open-source templating tool, Hookd, to convert React class components to components with hooks.',
    skills: ['React', 'Typescript', 'Babel-parser', 'ASTs', 'Jest'],
  },
  {
    yearStart: 2018,
    yearEnd: 2019,
    employer: 'Deepwork Branding',
    employerImgSrc: '/assets/deep_work_branding_icon.webp',
    employerImgAlt: 'Deepwork Branding logo',
    positionTitle: 'Web Developer',
    description:
      'Created a React/Firebase app for idea generation used in content marketing based on the specifications of the client.',
    skills: ['React', 'Firebase', 'SCSS'],
  },
];

export const TECHNOLOGIES = [
  'Javascript',
  'Typescript',
  'React',
  'Redux',
  'Next.js',
  'GraphQL',
  'Apollo',
  'Jest',
  'Vue',
  'Vuex',
  'Angular',
  'Storybook',
  'Styled Components',
  'SCSS',
  'Tailwind',
  'Python',
  'Flask',
  'PHP',
  'Docker',
  'Webpack',
  'Rollup',
  'Babel-Parser',
  'Wordpress',
  'HTML5',
  'AWS',
];
export const WEBSITES = [
  {
    href: 'https://aimlabs.com/',
    imgSrc: '/assets/aimlabs-img.png',
    siteName: 'aimlabs.com',
    description:
      'Join over 30 million players improving their skills in competitive gaming genres like FPS & MOBA. Aimlabs is the best way to get better at the games you love to compete in with features like...',
  },
  {
    href: 'https://proguides.com/',
    imgSrc: '/assets/proguides-img.png',
    siteName: 'proguides.com',
    description:
      'Learn From The Best. The biggest names in esports teach you everything they know in our exclusive master class series.',
  },
];
