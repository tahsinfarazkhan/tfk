import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: 'tahsin faraz khan',
    subtitle: 'cultures coexist, boundaries blur',
    author: 'tahsin faraz khan',
    description: 'cultures coexist, boundaries blur',
    website: 'https://tahsinfarazkhan.com/',
    pageSize: 5,
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/tahsinfarazkhan',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'twitter',
        href: 'https://x.com/twofirstkinds',
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
      primary: '#5b5e73',
      background: '#fafafa',
    },
    colorsDark: {
      primary: '#fafafa',
      background: '#262626',
    },
    fonts: {
      header: 'Yanone Kaffeesatz, serif',
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
