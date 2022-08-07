import { defineConfig } from "vitepress";


export default defineConfig({
    lang: 'en-US',
    title: 'EternalCode.pl',
    description: 'All documentations of EternalCodeTeam Projects & Tutorials',

    lastUpdated: true,

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/documentation/': sidebarGuide(),
            '/linuxtutorials/': linuxTutorials(),
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
            copyright: 'Copyright © 2022'
        },

        algolia: {
            appId: 'H1OE3WGSU8',
            apiKey: 'b001d687f84c24a0c1568281b037a05f',
            indexName: 'dev_eternalcode'
        },
    }
})

function nav() {
    return [
        { text: 'EternalCode.pl', link: 'https://eternalcode.pl/' }
    ]
}

function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'Getting Started', link: '/documentation/introduction' },
            ]
        }
    ]
}

function linuxTutorials() {
    return [
        {
            text: 'Linux Tutorials',
            collapsible: true,
            items: [
                { text: 'Getting Started', link: '/linuxtutorials/introduction' },
                { text: 'Java', link: '/linuxtutorials/tutorials/java' },
            ]
        }
    ]
}