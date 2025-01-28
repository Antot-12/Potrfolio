const siteMetadata = {
  title: "Anton's Blog - Coding Adventure",
  author: 'Anton Shyrko',
  fullName: 'Anton Shyrko',
  headerTitle: "Anton's Blog",
  description:
    'Writing helps me better understand new technologies and ideas, and I hope this blog will also be helpful to other developers exploring similar challenges...',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://google.com/',
  analyticsURL: ' ',
  siteRepo: ' ',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  email: 'antottoturial@gmail.com',
  github: 'https://github.com/Antot-12',
  linkedin: 'https://www.linkedin.com/in/anton-shyrko/',
  youtube: 'https://youtube.com',
  locale: 'en-US',
  stickyNav: false,
  socialAccounts: {
    github: 'Antot-12',
    linkedin: 'anton-shyrko',
  },
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.UMAMI_WEBSITE_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'bottom',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
};

module.exports = siteMetadata;
