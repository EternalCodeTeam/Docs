import {defineConfig} from "vitepress";

export default defineConfig({
    head: [
        ["link", {rel: "icon", href: "/logo.png"}]
    ],

    lang: "en-US",
    title: "EternalCode.pl",
    description: "All documentations of EternalCodeTeam Projects & Tutorials",

    lastUpdated: true,

    markdown: {
        lineNumbers: true,
    },

    vite: {
        plugins: [],
    },

    themeConfig: {
        editLink: {
            pattern: "https://github.com/EternalCodeTeam/docs/edit/master/docs/:path",
            text: "Edit this page on GitHub"
        },

        footer:
            {
                message: "Made by Martin Sulikowski with ❤️",
                copyright: "Copyright © 2021-present EternalCodeTeam"
            },

        logo: "/logo.png",

        nav: [
            {text: "EternalCore", link: "/eternalcore/introduction"},
            {text: "ChatFormatter", link: "/chatformatter/introduction"},
            {text: "EternalCombat", link: "/eternalcombat/introduction"},
            {text: "GitCheck", link: "/gitcheck/introduction"}
        ],


        search: {
            provider: "local"
        }
        ,

        sidebar: {
            "/chatformatter/": configureSidebar( "ChatFormatter"),
            "/eternalcombat/": configureSidebar( "EternalCombat"),
            "/eternalcore/": configureSidebar( "EternalCore"),
            "/gitcheck/": configureSidebar( "GitCheck"),
            "/linuxtutorials/": configureSidebar( "LinuxTutorials"),
            "/contribute/": configureSidebar( "Contribute"),
        },

        socialLinks: [
            {icon: "github", link: "https://github.com/EternalCodeTeam/"},
            {icon: "discord", link: "https://discord.gg/FQ7jmGBd6c"},
        ]
        ,
    }
})
;

function configureSidebar( currentPath: string ) {
    return [
        {
            text: "EternalCore",
            collapsible: true,
            collapsed: currentPath != "EternalCore",
            items: [
                {text: "🚀 Getting Started", link: "/eternalcore/introduction"},
                {text: "🔧 Installation", link: "/eternalcore/installation"},
                {text: "✨ Features", link: "/eternalcore/features"},
                {text: "🔔 Notifications", link: "/eternalcore/notifications"},
                {text: "🏠 Homes", link: "/eternalcore/homes"},
            ],
        },
        {
            text: "ChatFormatter",
            collapsible: true,
            collapsed: currentPath != "ChatFormatter",
            items: [
                {text: "🚀 Getting Started", link: "/chatformatter/introduction"},
                {text: "🔧 Installation", link: "/chatformatter/installation"},
                {text: "✨ Features", link: "/chatformatter/features"},
                {text: "✍️ Examples", link: "/chatformatter/examples"},
            ]
        },
        {
            text: "EternalCombat",
            collapsible: true,
            collapsed: currentPath != "EternalCombat",
            items: [
                {text: "🚀 Getting Started", link: "/eternalcombat/introduction"},
                {text: "🔧 Installation", link: "/eternalcombat/installation"},
                {text: "✨ Features", link: "/eternalcombat/features"},
            ]
        },
        {
            text: "GitCheck",
            collapsible: true,
            collapsed: currentPath != "GitCheck",
            items: [
                {text: "🚀 Getting Started", link: "/gitcheck/introduction"},
                {text: "✨ Usage", link: "/gitcheck/features"},
            ]
        },
        {
            text: "Linux Tutorials",
            collapsible: true,
            collapsed: currentPath != "LinuxTutorials",
            items: [
                {text: "Getting Started", link: "/linuxtutorials/introduction"},
                {text: "Java", link: "/linuxtutorials/tutorials/java"},
                {text: "LAMP (Ubuntu 18.04-22.04)", link: "/linuxtutorials/tutorials/lamp"},

            ]
        },
        {
            text: "🤩 Contribute",
            collapsible: true,
            collapsed: currentPath != "Contribute",
            items: [
                {text: "🪜 Guide", link: "/contribute/guide"},
            ]
        }
    ];
}


