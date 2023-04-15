import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'EternalCode.pl',
    description: 'All documentations of EternalCodeTeam Projects & Tutorials',

    lastUpdated: true,
    cleanUrls: true,

    markdown: {
        lineNumbers: true,
    },

    themeConfig: {
        nav: [
            { text: 'EternalCore', link: '/eternalcore/introduction' },
        ],

        logo: 'https://i.imgur.com/L30zyfc.png',

        search: {
            provide: 'local'
        },

        sidebar: {
            '/eternalcore/': configureEternalCoreSidebar(),
            '/linuxtutorials/': configureLinuxTutorialSidebar(),
        },

        editLink: {
            pattern: 'https://github.com/EternalCodeTeam/docs/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/EternalCodeTeam/' },
            { icon: 'discord', link: 'https://discord.gg/FQ7jmGBd6c' },
        ],

        footer: {
            message: 'Made by Martin Sulikowski with ❤️',
            copyright: 'Copyright © 2021-present EternalCodeTeam'
        },
    }
})

function configureEternalCoreSidebar() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'Getting Started', link: '/eternalcore/introduction' },
                { text: 'Installation', link: '/eternalcore/installation' },
                { text: 'Features', link: '/eternalcore/features' },
            ]
        }
    ]
}

function configureLinuxTutorialSidebar() {
    return [
        {
            text: 'Linux Tutorials',
            collapsible: true,
            items: [
                { text: 'Getting Started', link: '/linuxtutorials/introduction' },
                { text: 'Java', link: '/linuxtutorials/tutorials/java' },
                { text: 'LAMP (Ubuntu 18.04-22.04)', link: '/linuxtutorials/tutorials/lamp' },
            ]
        }
    ]
}