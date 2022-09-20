import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: 'About',
    ariaLabel: 'About Menu',
    link: '/about/aboutUs.html',
  },
  {
    text: 'News',
    link: '/news/Q2_2022.html',
  },
  {
    text: 'Handbook',
    link: '/handbook/intro.html',
  },
  {
    text: 'Learn',
    link: '/learn/',
  },
  {
    text: 'AI/ML',
    link: '/aiml/aimlStart.md',
  },
  {
    text: 'DDAP',
    ariaLabel: 'DDAP Menu',
    link: '/ddap/',
  },
  // {
  //   text: 'Handbook',
  //   ariaLabel: 'Developer Handbook',
  //   link: '/handbook/',
  // },
  // {
  //   text: 'Blog',
  //   link: '/blog/',
  // },
  // {
  //   text: 'Category',
  //   link: '/category/',
  // },
  // {
  //   text: 'Tag',
  //   link: '/tag/',
  // },
  // {
  //   text: 'Timeline',
  //   link: '/timeline/',
  // },
]
