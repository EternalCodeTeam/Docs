import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vitepress";

export default defineConfig({
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    lang: 'en-US',
    title: 'EternalCode.pl',
    description: 'All documentations of EternalCodeTeam Projects & Tutorials',

    lastUpdated: true,

    markdown: {
        lineNumbers: true,
    },

    vite: {
        plugins: [ SearchPlugin({
            previewLength: 10,
            buttonLabel: 'Search',
            placeholder: 'Search',
            allow: [],
            ignore: [],
            cache: true,
            tokenize: 'full',
            preset: 'score',
        }) ]
    },

    themeConfig: {
        nav: [
            { text: 'EternalCore', link: '/eternalcore/introduction' },
        ],

        logo: '/logo.png',

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
                { text: 'Notifications', link: '/eternalcore/notifications' },
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