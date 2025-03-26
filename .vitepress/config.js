import {defineConfig} from 'vitepress'
import {pagefindPlugin} from 'vitepress-plugin-pagefind'

export default defineConfig({
    base: '/',
    lang: 'zh-CN',
    title: "Great blog by Mr.Shang",
    description: "A VitePress Site",
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {
                text: '文档',
                items: [
                    {text: '全部', link: '/src/technology/分组展示'},
                    {text: '技术', link: '/src/technology/'},
                    {text: '生活', link: '/src/technology/分组展示'},
                    {text: '美食', link: '/src/technology/分组展示'},
                    {text: '随想', link: '/src/technology/分组展示'},
                    {text: '测评', link: '/src/technology/分组展示'},
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/shangjundragon'}
        ],
        sidebar: {
            '/src/technology/': [
                {
                    text: '全部',
                },
                {
                    text: 'Java',
                    items: [
                        {
                            text: 'SpringBoot'
                        },
                        {
                            text: 'SpringCloud'
                        },
                    ]
                },
                {
                    text: '前端',
                },
                {
                    text: 'Docker',
                },
            ],
            '/goodfood/': [
                {
                    text: '小炒',
                },
            ],
        }

    },
    vite: {
        plugins: [pagefindPlugin()],
    }
})
