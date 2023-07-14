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
            "/chatformatter/": configureChatFormatterSidebar(),
            "/eternalcombat/": configureEternalCombatSidebar(),
            "/eternalcore/": configureEternalCoreSidebar(),
            "/gitcheck/": configureGitCheckSidebar(),
            "/linuxtutorials/": configureLinuxTutorialSidebar()
        },

        socialLinks: [
            {icon: "github", link: "https://github.com/EternalCodeTeam/"},
            {icon: "discord", link: "https://discord.gg/FQ7jmGBd6c"},
        ]
        ,
    }
})
;

function configureEternalCoreSidebar() {
    return [
        {
            text: "EternalCore",
            collapsible: true,
            items: [
                {text: "🚀 Getting Started", link: "/eternalcore/introduction"},
                {text: "🔧 Installation", link: "/eternalcore/installation"},
                {text: "✨ Features", link: "/eternalcore/features"},
                {text: "🔔 Notifications", link: "/eternalcore/notifications"},
                {text: "🏠 Homes", link: "/eternalcore/homes"},
                {
                    text: "🤩 Contribute",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: "Step by step guide", link: "/contribute/contribute"},
                    ]
                }
            ],

        }
    ];
}

function configureChatFormatterSidebar() {
    return [
        {
            text: "ChatFormatter",
            collapsible: true,
            items: [
                {text: "🚀 Getting Started", link: "/chatformatter/introduction"},
                {text: "🔧 Installation", link: "/chatformatter/installation"},
                {text: "✨ Features", link: "/chatformatter/features"},
                {text: "✍️ Examples", link: "/chatformatter/examples"},
                {
                    text: "🤩 Contribute",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: "Step by step guide", link: "/contribute/contribute"},
                    ]
                }
            ]
        }
    ];
}

function configureEternalCombatSidebar() {
    return [
        {
            text: "EternalCombat",
            collapsible: true,
            items: [
                {text: "🚀 Getting Started", link: "/eternalcombat/introduction"},
                {text: "🔧 Installation", link: "/eternalcombat/installation"},
                {text: "✨ Features", link: "/eternalcombat/features"},
                {
                    text: "🤩 Contribute",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: "Step by step guide", link: "/contribute/contribute"},
                    ]
                }
            ]
        }
    ];
}

function configureGitCheckSidebar() {
    return [
        {
            text: "GitCheck",
            collapsible: true,
            items: [
                {text: "🚀 Getting Started", link: "/gitcheck/introduction"},
                {text: "✨ Usage", link: "/gitcheck/features"},
                {
                    text: "🤩 Contribute",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: "Step by step guide", link: "/contribute/contribute"},
                    ]
                }
            ]
        }
    ];
}


function configureLinuxTutorialSidebar() {
    return [
        {
            text: "Linux Tutorials",
            collapsible: true,
            items: [
                {text: "Getting Started", link: "/linuxtutorials/introduction"},
                {text: "Java", link: "/linuxtutorials/tutorials/java"},
                {text: "LAMP (Ubuntu 18.04-22.04)", link: "/linuxtutorials/tutorials/lamp"},
                {
                    text: "🤩 Contribute",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: "Step by step guide", link: "/contribute/contribute"},
                    ]
                }
            ]
        }
    ];
}

