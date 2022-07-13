const { description } = require('../../package.json')

module.exports = {
  title: 'EternalCodeTeam Docs',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: 'https://github.com/EternalCodeTeam/docs',
    editLinks: true,
    docsDir: '',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: true,
    nav: [
      {
        text: 'Documentation',
        link: '/docs/',
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Docs',
          collapsable: false,
          children: [
            '',
            'about',
          ]
        }
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-smooth-scroll',

    'vuepress-plugin-git-log',
    {
      additionalArgs: '--no-merge',
      onlyFirstAndLastCommit: true,
    },

    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    }

  ]
}
