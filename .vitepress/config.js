import {defineConfig} from 'vitepress'
import {pagefindPlugin} from 'vitepress-plugin-pagefind'

export default defineConfig({
    base: '/',
    lang: 'zh-CN',
    title: "Great blog",

    description: "A VitePress Site",
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
    themeConfig: {
        logo: '/avatar.jpg',
        nav: [
            {text: '首页', link: '/'},
            {
                text: '文档',
                items: [
                    {text: '全部', link: '/src/all'},
                    {text: '技术', link: '/src/technology/all'},
                    {text: '生活', link: '/src/life/all'},
                    {text: '美食', link: '/src/goodfood/all'},
                    {text: '随想', link: '/src/randomthoughts/all'},
                    {text: '测评', link: '/src/test/all'},
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/shangjundragon'}
        ],
        sidebar: {
            '/src/technology/': [
                {text: '全部技术文档', link: '/src/technology/all',},
            ],
            '/src/life/': [
                {text: '全部生活文档', link: '/src/life/all',},
            ],
            '/src/goodfood/': [
                {text: '全部美食文档', link: '/src/goodfood/all',},
            ],
            '/src/randomthoughts/': [
                {text: '全部随想文档', link: '/src/randomthoughts/all',},
            ],
            '/src/test/': [
                {text: '全部测评文档', link: '/src/test/all',},
            ],
        }
    },
    vite: {
        plugins: [pagefindPlugin()],
    }
})
