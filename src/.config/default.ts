import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: 'tahsin faraz khan',
    subtitle: 'cultures coexist, boundaries blur',
    author: 'tahsin faraz khan',
    description: 'Rediscory the beauty of typography',
    website: 'https://astro-theme-typography.vercel.app/',
    pageSize: 5,
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/moeyua/astro-theme-typography',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'twitter',
        href: 'https://github.com/moeyua/astro-theme-typography',
      },
      {
        name: 'mastodon',
        href: 'https://github.com/moeyua/astro-theme-typography',
      },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    categoryMap: [{ name: '胡适', path: 'hu-shi' }],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
    ],
  },
  appearance: {
    theme: 'light',
    locale: 'en-us',
    colorsLight: {
      primary: '#262626',
      background: '#fafafa',
    },
    colorsDark: {
      primary: '#fafafa',
      background: '#262626',
    },
    fonts: {
      header: 'Playwrite CO Guides, serif',
      ui: 'Yanone Kaffeesatz, serif',
    },
  },
  seo: {
    twitter: '@twofirstkinds',
    meta: [],
    link: [],
  },
  rss: {
    fullText: true,
  },
  comment: {
    // disqus: { shortname: "typography-astro" },
  },
  analytics: {
    googleAnalyticsId: '',
    umamiAnalyticsId: '',
  },
  latex: {
    katex: false,
  },
}
